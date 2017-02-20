import React, { Component } from 'react';
import DirectoryFolder from './DirectoryFolder';

class DirectoryContainer extends Component {

    setThisDirectory(){
        let filteredDirectory = this.props.directoryData.filter(dir=>
          dir.id===this.props.currentDirectoryId    
      ) 
      
       if(filteredDirectory[0]!==undefined)
    {this.props.setCurrentDirectory(filteredDirectory[0].parentID);}
      
    }
  
  render() {
      
      let {currentDirectoryId, directoryData, actions} = this.props;
      let filteredDirectories = directoryData.filter(dir=>
          dir.parentID===currentDirectoryId    
      )
      
      let directories = filteredDirectories.map(dir =>
            <DirectoryFolder key={dir.id} directory={dir} setDirectory = {this.props.setCurrentDirectory.bind(this)}/>
          );

      var styles = {
             marginLeft:'30px',
             marginRight:'30px',
             marginBottom:'5px'
        };
    return (
        <main style={styles}>
            <table className="table table-hover">
                <thead>
                    <tr>
                    <th>Name</th>
                    </tr>
                </thead>
                <tbody>
                <tr>
                <td scope="row" onClick={this.setThisDirectory.bind(this)}><span className="glyphicon glyphicon-file"></span>&nbsp;...Go Back</td>
                </tr>
                    {directories}
                </tbody>
                </table>
        </main>
    )
  }
}

export default DirectoryContainer
