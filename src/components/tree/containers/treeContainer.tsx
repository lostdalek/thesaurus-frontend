/// <reference path="../../../../typings/tsd.d.ts" />

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as React from 'react';
import * as classnames from 'classnames';
import Tree from '../components/tree';

const css = require('./treeContainer.scss');

interface TreeProps {
    tree?: any;
    dispatch?: Redux.Dispatch;
}

class TreeContainer extends React.Component<TreeProps, any> {
    tree = {
        module: 'react-ui-tree',
        children: [{
            module: 'dist',
            collapsed: true,
            children: [{
                module: 'node.js',
                children: [{
                    module: 'node.js',
                    children: [{
                        module: 'node.js',
                        children: [{
                            module: 'node.js',
                            children: [{
                                module: 'node.js',
                                children: [{
                                    module: 'node.js',
                                    children: [{
                                        module: 'node.js',
                                        leaf: true
                                    }, {
                                        module: 'react-ui-tree.css',
                                        leaf: true
                                    }, {
                                        module: 'react-ui-tree.js',
                                        leaf: true
                                    }, {
                                        module: 'tree.js',
                                        leaf: true
                                    }],
                                    leaf: true
                                }, {
                                    module: 'react-ui-tree.css',
                                    leaf: true
                                }, {
                                    module: 'react-ui-tree.js',
                                    leaf: true
                                }, {
                                    module: 'tree.js',
                                    leaf: true
                                }],
                                leaf: true
                            }, {
                                module: 'react-ui-tree.css',
                                leaf: true
                            }, {
                                module: 'react-ui-tree.js',
                                leaf: true
                            }, {
                                module: 'tree.js',
                                leaf: true
                            }],
                            leaf: true
                        }, {
                            module: 'react-ui-tree.css',
                            leaf: true
                        }, {
                            module: 'react-ui-tree.js',
                            leaf: true
                        }, {
                            module: 'tree.js',
                            leaf: true
                        }],
                        leaf: true
                    }, {
                        module: 'react-ui-tree.css',
                        leaf: true
                    }, {
                        module: 'react-ui-tree.js',
                        leaf: true
                    }, {
                        module: 'tree.js',
                        leaf: true
                    }],
                    leaf: true
                }, {
                    module: 'react-ui-tree.css',
                    leaf: true
                }, {
                    module: 'react-ui-tree.js',
                    leaf: true
                }, {
                    module: 'tree.js',
                    leaf: true
                }],
                leaf: true
            }, {
                module: 'react-ui-tree.css',
                leaf: true
            }, {
                module: 'react-ui-tree.js',
                leaf: true
            }, {
                module: 'tree.js',
                leaf: true
            }]
        }, {
            module: 'example',
            children: [{
                module: 'app.js',
                leaf: true
            }, {
                module: 'app.less',
                leaf: true
            }, {
                module: 'index.html',
                leaf: true
            }]
        },{
            module: 'dist',
            collapsed: true,
            children: [{
                module: 'node.js',
                children: [{
                    module: 'node.js',
                    children: [{
                        module: 'node.js',
                        children: [{
                            module: 'node.js',
                            children: [{
                                module: 'node.js',
                                children: [{
                                    module: 'node.js',
                                    children: [{
                                        module: 'node.js',
                                        leaf: true
                                    }, {
                                        module: 'react-ui-tree.css',
                                        leaf: true
                                    }, {
                                        module: 'react-ui-tree.js',
                                        leaf: true
                                    }, {
                                        module: 'tree.js',
                                        leaf: true
                                    }],
                                    leaf: true
                                }, {
                                    module: 'react-ui-tree.css',
                                    leaf: true
                                }, {
                                    module: 'react-ui-tree.js',
                                    leaf: true
                                }, {
                                    module: 'tree.js',
                                    leaf: true
                                }],
                                leaf: true
                            }, {
                                module: 'react-ui-tree.css',
                                leaf: true
                            }, {
                                module: 'react-ui-tree.js',
                                leaf: true
                            }, {
                                module: 'tree.js',
                                leaf: true
                            }],
                            leaf: true
                        }, {
                            module: 'react-ui-tree.css',
                            leaf: true
                        }, {
                            module: 'react-ui-tree.js',
                            leaf: true
                        }, {
                            module: 'tree.js',
                            leaf: true
                        }],
                        leaf: true
                    }, {
                        module: 'react-ui-tree.css',
                        leaf: true
                    }, {
                        module: 'react-ui-tree.js',
                        leaf: true
                    }, {
                        module: 'tree.js',
                        leaf: true
                    }],
                    leaf: true
                }, {
                    module: 'react-ui-tree.css',
                    leaf: true
                }, {
                    module: 'react-ui-tree.js',
                    leaf: true
                }, {
                    module: 'tree.js',
                    leaf: true
                }],
                leaf: true
            }, {
                module: 'react-ui-tree.css',
                leaf: true
            }, {
                module: 'react-ui-tree.js',
                leaf: true
            }, {
                module: 'tree.js',
                leaf: true
            }]
        },{
            module: 'lib',
            children: [{
                module: 'node.js',
                leaf: true
            }, {
                module: 'react-ui-tree.js',
                leaf: true
            }, {
                module: 'react-ui-tree.less',
                leaf: true
            }, {
                module: 'tree.js',
                leaf: true
            }]
        }, {
            module: 'lib',
            children: [{
                module: 'node.js',
                leaf: true
            }, {
                module: 'react-ui-tree.js',
                leaf: true
            }, {
                module: 'react-ui-tree.less',
                leaf: true
            }, {
                module: 'tree.js',
                leaf: true
            }]
        }, {
            module: 'lib',
            children: [{
                module: 'node.js',
                leaf: true
            }, {
                module: 'react-ui-tree.js',
                leaf: true
            }, {
                module: 'react-ui-tree.less',
                leaf: true
            }, {
                module: 'tree.js',
                leaf: true
            }]
        }, {
            module: 'lib',
            children: [{
                module: 'node.js',
                leaf: true
            }, {
                module: 'react-ui-tree.js',
                leaf: true
            }, {
                module: 'react-ui-tree.less',
                leaf: true
            }, {
                module: 'tree.js',
                leaf: true
            }]
        }, {
            module: 'lib',
            children: [{
                module: 'node.js',
                leaf: true
            }, {
                module: 'react-ui-tree.js',
                leaf: true
            }, {
                module: 'react-ui-tree.less',
                leaf: true
            }, {
                module: 'tree.js',
                leaf: true
            }]
        }, {
            module: 'lib',
            children: [{
                module: 'node.js',
                leaf: true
            }, {
                module: 'react-ui-tree.js',
                leaf: true
            }, {
                module: 'react-ui-tree.less',
                leaf: true
            }, {
                module: 'tree.js',
                leaf: true
            }]
        }, {
            module: 'lib',
            children: [{
                module: 'node.js',
                leaf: true
            }, {
                module: 'react-ui-tree.js',
                leaf: true
            }, {
                module: 'react-ui-tree.less',
                leaf: true
            }, {
                module: 'tree.js',
                leaf: true
            }]
        }, {
            module: 'lib',
            children: [{
                module: 'node.js',
                leaf: true
            }, {
                module: 'react-ui-tree.js',
                leaf: true
            }, {
                module: 'react-ui-tree.less',
                leaf: true
            }, {
                module: 'tree.js',
                leaf: true
            }]
        }, {
            module: 'lib',
            children: [{
                module: 'node.js',
                leaf: true
            }, {
                module: 'react-ui-tree.js',
                leaf: true
            }, {
                module: 'react-ui-tree.less',
                leaf: true
            }, {
                module: 'tree.js',
                leaf: true
            }]
        }, {
            module: 'lib',
            children: [{
                module: 'node.js',
                leaf: true
            }, {
                module: 'react-ui-tree.js',
                leaf: true
            }, {
                module: 'react-ui-tree.less',
                leaf: true
            }, {
                module: 'tree.js',
                leaf: true
            }]
        }, {
            module: 'lib',
            children: [{
                module: 'node.js',
                leaf: true
            }, {
                module: 'react-ui-tree.js',
                leaf: true
            }, {
                module: 'react-ui-tree.less',
                leaf: true
            }, {
                module: 'tree.js',
                leaf: true
            }]
        }, {
            module: 'lib',
            children: [{
                module: 'node.js',
                leaf: true
            }, {
                module: 'react-ui-tree.js',
                leaf: true
            }, {
                module: 'react-ui-tree.less',
                leaf: true
            }, {
                module: 'tree.js',
                leaf: true
            }]
        }, {
            module: 'lib',
            children: [{
                module: 'node.js',
                leaf: true
            }, {
                module: 'react-ui-tree.js',
                leaf: true
            }, {
                module: 'react-ui-tree.less',
                leaf: true
            }, {
                module: 'tree.js',
                leaf: true
            }]
        }, {
            module: 'lib',
            children: [{
                module: 'node.js',
                leaf: true
            }, {
                module: 'react-ui-tree.js',
                leaf: true
            }, {
                module: 'react-ui-tree.less',
                leaf: true
            }, {
                module: 'tree.js',
                leaf: true
            }]
        }, {
            module: 'lib',
            children: [{
                module: 'node.js',
                leaf: true
            }, {
                module: 'react-ui-tree.js',
                leaf: true
            }, {
                module: 'react-ui-tree.less',
                leaf: true
            }, {
                module: 'tree.js',
                leaf: true
            }]
        }, {
            module: 'lib',
            children: [{
                module: 'node.js',
                leaf: true
            }, {
                module: 'react-ui-tree.js',
                leaf: true
            }, {
                module: 'react-ui-tree.less',
                leaf: true
            }, {
                module: 'tree.js',
                leaf: true
            }]
        }, {
            module: 'lib',
            children: [{
                module: 'node.js',
                leaf: true
            }, {
                module: 'react-ui-tree.js',
                leaf: true
            }, {
                module: 'react-ui-tree.less',
                leaf: true
            }, {
                module: 'tree.js',
                leaf: true
            }]
        }, {
            module: 'lib',
            children: [{
                module: 'node.js',
                leaf: true
            }, {
                module: 'react-ui-tree.js',
                leaf: true
            }, {
                module: 'react-ui-tree.less',
                leaf: true
            }, {
                module: 'tree.js',
                leaf: true
            }]
        }, {
            module: 'lib',
            children: [{
                module: 'node.js',
                leaf: true
            }, {
                module: 'react-ui-tree.js',
                leaf: true
            }, {
                module: 'react-ui-tree.less',
                leaf: true
            }, {
                module: 'tree.js',
                leaf: true
            }]
        }, {
            module: 'lib',
            children: [{
                module: 'node.js',
                leaf: true
            }, {
                module: 'react-ui-tree.js',
                leaf: true
            }, {
                module: 'react-ui-tree.less',
                leaf: true
            }, {
                module: 'tree.js',
                leaf: true
            }]
        }, {
            module: '.gitiignore',
            leaf: true
        }, {
            module: 'index.js',
            leaf: true
        }, {
            module: 'LICENSE',
            leaf: true
        }, {
            module: 'Makefile',
            leaf: true
        }, {
            module: 'package.json',
            leaf: true
        }, {
            module: 'README.md',
            leaf: true
        }, {
            module: 'webpack.config.js',
            leaf: true
        }]
    }
    private isNodeCollapsed;


    constructor(props, context) {
        super(props, context);
        this.state = {
            active: null,
            tree: {
                module: 'rot',
                children: [{
                    module: 'a1',
                    children: [{
                        module: 'aa1',
                        leaf: true
                    }, {
                        module: 'aa2',
                        leaf: true
                    }]
                }, {
                    module: 'a2'
                }]
            }
        };
        this.isNodeCollapsed = true;
        this.onClickNode = this.onClickNode.bind(this);
        //console.log('set state', this.state)
    }

    renderNode(node) {
        return (
            <span className={classnames('node', {'is-active': node === this.state.active})}
                  onClick={this.onClickNode}>
                {node.module}
            </span>
        );
    }

    onClickNode(node) {
        this.setState({
            active: node
        });
    }

    render() {
        return (
            <div className="app">
                <div className="tree">
                    <Tree
                        paddingLeft={20}
                        tree={this.state.tree}
                        onChange={(e) => this.handleChange(e)}
                        isNodeCollapsed={this.isNodeCollapsed}
                        renderNode={(e) => this.renderNode(e)}
                    />
                </div>
                <div className="inspector">
                    <button onClick={() => this.updateTree()}>update tree</button>
                    <pre>
                        {JSON.stringify(this.state.tree, null, '  ')}
                    </pre>
                </div>
            </div>
        );
    }

    handleChange(tree) {
        this.setState({
            tree: tree
        });
    }

    updateTree() {
        var tree = this.state.tree;
        tree.children.push({module: 'test'});
        this.setState({
            tree: tree
        });
    }
}

const mapStateToProps = state => ({
    tree: state.tree
});

export default connect(mapStateToProps)(TreeContainer);