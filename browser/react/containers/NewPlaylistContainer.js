import React from 'react';
import NewPlaylist from '../components/NewPlaylist';
import axios from 'axios';


class NewPlaylistContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      disabled: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.disabled = this.disabled.bind(this)
  }

  handleChange(evt) {
    const value = evt.target.value;
    this.setState({
      inputValue: value,
      disabled: this.disabled(value.length)
    });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    // const value = evt.target.playListInput.value;
    // console.log('event value ', value);
    axios.post('/api/playlists', {name: this.state.inputValue })
      .then(res => res.data)
      .then(result => {
        console.log(result) // response json from the server!
      });

    this.setState({
      inputValue: ''
    });
  }

  disabled(val) {
    if (val > 16 || val <= 0) return true;
    else return false;
  }


render() {
  // const inputValue = this.state.inputValue;
  console.log('handleSubmit  ', this.handleSubmit);
  return (
    <div>
      {this.state &&
        <NewPlaylist handleSubmit={this.handleSubmit}
          inputValue={this.state.inputValue} onChange={this.handleChange}
          disabled={this.state.disabled} />
      }
    </div>
  );
}
}

export default NewPlaylistContainer;
