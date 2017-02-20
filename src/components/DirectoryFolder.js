import React, { Component } from 'react';

class DirectoryFolder extends Component {
  
   setThisDirectory(){
      this.props.setDirectory(this.props.directory.id)
    }

  render() { 

    let {directory} = this.props; 
    return (
        <tr>
        <td scope="row" onClick={this.setThisDirectory.bind(this)}><span className="glyphicon glyphicon-file"></span>&nbsp;{directory.name}</td>
        </tr>
    )
  }
}

export default DirectoryFolder
