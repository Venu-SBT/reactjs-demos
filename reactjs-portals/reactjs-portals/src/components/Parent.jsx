import React from 'react';
import Modal from './Modal';
import Child from './Child';

class Parent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {clicks: 0};
      this.handleClick = this.handleClick.bind(this);
    }
  
    handleClick() {
      // This will fire when the button in Child is clicked,
      // updating Parent's state, even though button
      // is not direct descendant in the DOM.
      this.setState(state => ({
        clicks: state.clicks + 1
      }));
    }
  
    render() {
      return (
        <div onClick={this.handleClick}>
          <p>Number of clicks: {this.state.clicks}</p>
          <p>Open up the browser DevTools to observe that the button is not a child of the div with the onClick handler.</p>
          <Modal>
            <Child />
          </Modal>
        </div>
      );
    }
}

export default Parent;