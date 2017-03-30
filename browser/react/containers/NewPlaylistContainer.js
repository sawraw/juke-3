import React from 'react';
import NewPlaylist from '../components/NewPlaylist';
class NewPlaylistContainer extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            inputValue: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange (evt) {
      const value = evt.target.value;
          this.setState({
              inputValue: value

          });
    }

    handleSubmit (evt) {
      evt.preventDefault();
      // const value = evt.target.playListInput.value;
      // console.log('event value ', value);
      this.setState({
          inputValue: ''
      });
    }

    disabled(){
      if(this.state.inputValue.length > 16 || this.state.inputValue.length < 0){
        this.setState({return false;})
        return true;
    }

    render () {
        // const inputValue = this.state.inputValue;
      console.log('handleSubmit  ', this.handleSubmit);
        return (
            <div>
              { this.state &&
                <NewPlaylist handleSubmit= {this.handleSubmit}
                inputValue={this.state.inputValue} onChange={this.handleChange}
                disabled={this.disabled} />
              }
            </div>
        );
    }
}

export default NewPlaylistContainer;
