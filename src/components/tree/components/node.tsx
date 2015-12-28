'use strict';
import * as React from 'react';
import * as classnames from 'classnames';

interface NodeProps {
    index?: any;
    key?: any;
    tree?: any;
    dragging?: any;
    paddingLeft?: any;
    onCollapse?: any;
    onDragStart?: any;
}
interface IchildrenStyles {
    display?: string;
    paddingLeft?: any;

}

class Node extends React.Component<NodeProps, any> {
    private displayName;
    constructor(props, context) {
        super(props, context);
        this.displayName = 'UITreeNode';
        this.handleMouseDown = this.handleMouseDown.bind(this);
        this.handleCollapse = this.handleCollapse.bind(this);
        return this;
    }

    renderCollapse() {
        var index = this.props.index;

        if (index.children && index.children.length) {
            var collapsed = index.node.collapsed;
            return (
                <span
                    className={classnames('collapse', collapsed ? 'caret-right' : 'caret-down')}
                    onMouseDown={(e) => {e.stopPropagation()}}
                    onClick={this.handleCollapse}>
                </span>
            );
        }

        return null;
    }

    renderChildren() {
        var index = this.props.index;
        var tree = this.props.tree;
        var dragging = this.props.dragging;

        if (index.children && index.children.length) {

            var childrenStyles: IchildrenStyles = {};
            if (index.node.collapsed) childrenStyles.display = 'none';
            childrenStyles['paddingLeft'] = this.props.paddingLeft + 'px';

            let renderedChildren = [];

            index.children.map( (child) => {
                var childIndex = tree.getIndex(child);

                renderedChildren.push(<Node
                    tree={tree}
                    index={childIndex}
                    key={childIndex.id}
                    dragging={dragging}
                    paddingLeft={this.props.paddingLeft}
                    onCollapse={ this.props.onCollapse}
                    onDragStart={ (nodeId, dom, e) => { console.log('drag start asked'); this.props.onDragStart(nodeId, dom, e) }}
                />);
            });
            return (
                <div className={'children'} style={childrenStyles}>
                    {renderedChildren}
                </div>
            );
        }

        return null;
    }

    render() {
        //console.log('Node: rendering node', this.props)
        var tree = this.props.tree;
        var index = this.props.index;
        var dragging = this.props.dragging;
        var node = index.node;
        var styles = {};
        return (
            <div className={classnames('m-node', {'placeholder': index.id === dragging})} style={styles}>
                <div className="inner" ref="inner" onMouseDown={this.handleMouseDown}>
                    {this.renderCollapse()}
                    {tree.renderNode(node)}
                </div>
                {this.renderChildren()}
            </div>
        );
    }

    handleCollapse(e) {
        e.stopPropagation();
        var nodeId = this.props.index.id;
        console.log('handle collapse', nodeId, this.props)
        if (this.props.onCollapse) this.props.onCollapse(nodeId);
    }

    handleMouseDown(e) {
        var nodeId = this.props.index.id;
        var dom = this.refs['inner'];

        if (this.props.onDragStart) {
            this.props.onDragStart(nodeId, dom, e);
        }
    }
}

export default Node;