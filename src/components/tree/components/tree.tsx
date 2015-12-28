import * as React from 'react';
import * as classnames from 'classnames';
import Node from './node';
import TreeModel from '../treeModel';

interface TreeProps {
    tree?: any;
    onChange?: any;
    paddingLeft?: any;
    isNodeCollapsed?: boolean;
    changeNodeCollapsed?: boolean;
    renderNode?: Function;
}
class Tree extends React.Component<TreeProps, any> {
    static getDefaultProps = {
        paddingLeft: 20
    };
    static propTypes = {
        tree: React.PropTypes.object.isRequired,
        paddingLeft: React.PropTypes.number,
        renderNode: React.PropTypes.func.isRequired
    };
    private displayName;
    private _updated;
    private _start;
    private _startX;
    private _startY;
    private _offsetX;
    private _offsetY;
    private dragging;
    constructor(props, context) {
        super(props, context);
        // this.state = {};
        this.displayName = 'UITree';
        this.state = this.init(this.props);
        this.dragStart = this.dragStart.bind(this);
        this.dragEnd = this.dragEnd.bind(this);
        this.drag = this.drag.bind(this);
        return this; //.init(this.props);
    }

    componentWillReceiveProps(nextProps) {
        console.log('will receive props', nextProps);
        if(!this._updated) this.setState(this.init(nextProps));
        else this._updated = false;
    }


    init(props) {
        var tree = new TreeModel(props.tree);
        (tree as any).isNodeCollapsed = props.isNodeCollapsed;
        (tree as any).renderNode = props.renderNode;
        (tree as any).changeNodeCollapsed = props.changeNodeCollapsed;
        tree.updateNodesPosition();
        return {
            tree: tree,
            dragging: {
                id: null,
                x: null,
                y: null,
                w: null,
                h: null
            }
        };
    }

    render() {
        var tree = this.state.tree;
        var dragging = this.state.dragging;
        var draggingDom = this.getDraggingDom();

        return (
            <div className="m-tree">
                {draggingDom}
                <Node
                    tree={tree}
                    index={tree.getIndex(1)}
                    key={1}
                    paddingLeft={this.props.paddingLeft}
                    onDragStart={(id, dom, e) => { this.dragStart(id, dom, e) }}
                    onCollapse={(nodeId) => this.toggleCollapse(nodeId)}
                    dragging={dragging && dragging.id}
                />
            </div>
        );
    }

    change(tree) {
        this._updated = true;
        if(this.props.onChange) this.props.onChange(tree.obj);
    }

    getDraggingDom() {
        var tree = this.state.tree;
        var dragging = this.state.dragging;

        if(dragging && dragging.id) {
            var draggingIndex = tree.getIndex(dragging.id);
            var draggingStyles = {
                top: dragging.y,
                left: dragging.x,
                width: dragging.w
            };

            return (
                <div className="m-draggable" style={draggingStyles}>
                    <Node
                        tree={tree}
                        index={draggingIndex}
                        paddingLeft={this.props.paddingLeft}
                    />
                </div>
            );
        }

        return null;
    }

    dragStart(id, dom, e) {
        this.dragging = {
            id: id,
            w: dom.offsetWidth,
            h: dom.offsetHeight,
            x: dom.offsetLeft,
            y: dom.offsetTop
        };

        this._startX = dom.offsetLeft;
        this._startY = dom.offsetTop;
        this._offsetX = e.clientX;
        this._offsetY = e.clientY;
        this._start = true;
        window.addEventListener('mousemove', this.drag);
        window.addEventListener('mouseup', this.dragEnd);
    }

    // oh
    drag(e) {
        if(this._start) {
            this.setState({
                dragging: this.dragging
            });
            this._start = false;
        }

        var tree = this.state.tree;
        var dragging = this.state.dragging;
        var paddingLeft = this.props.paddingLeft;
        var newIndex = null;
        var index = tree.getIndex(dragging.id);
        var collapsed = index.node.collapsed;

        var _startX = this._startX;
        var _startY = this._startY;
        var _offsetX = this._offsetX;
        var _offsetY = this._offsetY;

        var pos = {
            x: _startX + e.clientX - _offsetX,
            y: _startY + e.clientY - _offsetY
        };
        dragging.x = pos.x;
        dragging.y = pos.y;

        var diffX = dragging.x - paddingLeft/2 - (index.left-2) * paddingLeft;
        var diffY = dragging.y - dragging.h/2 - (index.top-2) * dragging.h;

        if(diffX < 0) { // left
            if(index.parent && !index.next) {
                newIndex = tree.move(index.id, index.parent, 'after');
            }
        } else if(diffX > paddingLeft) { // right
            if(index.prev) {
                var prevNode = tree.getIndex(index.prev).node;
                if(!prevNode.collapsed && !prevNode.leaf) {
                    newIndex = tree.move(index.id, index.prev, 'append');
                }
            }
        }

        if(newIndex) {
            index = newIndex;
            newIndex.node.collapsed = collapsed;
            dragging.id = newIndex.id;
        }

        if(diffY < 0) { // up
            var above = tree.getNodeByTop(index.top-1);
            newIndex = tree.move(index.id, above.id, 'before');
        } else if(diffY > dragging.h) { // down
            if(index.next) {
                var below = tree.getIndex(index.next);
                if(below.children && below.children.length && !below.node.collapsed) {
                    newIndex = tree.move(index.id, index.next, 'prepend');
                } else {
                    newIndex = tree.move(index.id, index.next, 'after');
                }
            } else {
                var below = tree.getNodeByTop(index.top+index.height);
                if(below && below.parent !== index.id) {
                    if(below.children && below.children.length) {
                        newIndex = tree.move(index.id, below.id, 'prepend');
                    } else {
                        newIndex = tree.move(index.id, below.id, 'after');
                    }
                }
            }
        }

        if(newIndex) {
            newIndex.node.collapsed = collapsed;
            dragging.id = newIndex.id;
        }

        this.setState({
            tree: tree,
            dragging: dragging
        });
    }

    dragEnd() {
        this.setState({
            dragging: {
                id: null,
                x: null,
                y: null,
                w: null,
                h: null
            }
        });

        window.removeEventListener('mousemove', this.drag);
        window.removeEventListener('mouseup', this.dragEnd);
        this.change(this.state.tree);
    }

    toggleCollapse(nodeId) {
        var tree = this.state.tree;
        var index = tree.getIndex(nodeId);
        var node = index.node;
        node.collapsed = !node.collapsed;
        tree.updateNodesPosition();

        this.setState({
            tree: tree
        });

        this.change(tree);
    }
}
export default Tree;
