import React from 'react';

const NewPlaylist = (props) => {
  console.log('~~~props', props);
return (
<div className="well">
  <form className="form-horizontal" onSubmit={props.handleSubmit} >
    <fieldset>
      <legend>New Playlist</legend>
      {props.disabled ? <div className="alert alert-warning">Please enter a valid name</div> : null}
      <div className="form-group">
        <label className="col-xs-2 control-label">Name</label>
        <div className="col-xs-10">
          <input className="form-control" type="text" name="playListInput"
           value={props.inputValue} onChange={props.onChange} />
        </div>
      </div>
      <div className="form-group">
        <div className="col-xs-10 col-xs-offset-2">
          <button type="submit" className="btn btn-success"
          disabled = {props.disabled}>Create Playlist</button>
        </div>
      </div>
    </fieldset>
  </form>
</div>
);
};

export default NewPlaylist;
