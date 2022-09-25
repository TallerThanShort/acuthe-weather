'use strict';

const e = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { clicked: false };
  }

  render() {
    if (this.state.clicked) {
      return 'Error: No Source Code to Fetch Data.';
    }

    return e(
      'button',
      { onClick: () => this.setState({ clicked: true }) },
      'Refresh Data'
    );
  }
}

const domContainer = document.querySelector('#refresh_button_container');
const root = ReactDOM.createRoot(domContainer);
root.render(e(LikeButton));