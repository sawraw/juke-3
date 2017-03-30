import React from 'react';
import NewPlaylist from '../components/NewPlaylist';
class NewPlaylistContainer extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            inputValue: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit (evt) {
      evt.preventDefault();
      const value = evt.target.playListInput.value;
      console.log('event value ', value);
        this.setState({
            inputValue: value
        });
    }


    render () {
        // const inputValue = this.state.inputValue;
      console.log('handleSubmit  ', this.handleSubmit);
        return (
            <div>
                <NewPlaylist handleSubmit= {this.handleSubmit} inputValue={this.state.inputValue} />
            </div>
        );
        }
}

export default NewPlaylistContainer;
