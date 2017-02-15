import React from 'react';
import ReactDOM from 'react-dom';
import Section from './Section.js'
import states from '../../data/states.json';

class TreeNode extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: true,
    };
  }
  
  toggle = () => {
    this.setState({visible: !this.state.visible});
  };
  
  render() {
    var childNodes;
    var classObj;
   
    
    if (this.props.node.children != null) {
      childNodes = this.props.node.children.map(function(node, index) {
        return (<li key={index}>
                  <TreeNode node={node} />
                              
                </li>)
      });

      classObj = {
        togglable: true,
        "togglable-down": this.state.visible,
        "togglable-up": !this.state.visible
      };
    } 

    var style;
    if (!this.state.visible) {
      style = {display: "none"};
    }

    return (
      <div>
        <h2 onClick={this.toggle} >
          {this.props.node.title}
        </h2>
        <Section id={this.props.node.id} states={states}/> 
        <ul style={style}>
          {childNodes}
        </ul>
      </div>
    );
  }
}


export default TreeNode;