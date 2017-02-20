import React, { Component } from 'react';
import AddFolderModal from './modals/AddFolderModal';
import RenameFolderModal from './modals/RenameFolderModal';

class CommandBar extends Component {

  constructor() {
    super()
    this.state = { showCreateModal: false,
      showRenameModal:false }
  }


  openCreateModal(){
    this.setState({
      showCreateModal: true
    })
  }

  closeCreateModal(){
    this.setState({
      showCreateModal: false
    })
  }
  openRenameModal(){
    this.setState({
      showRenameModal: true
    })
  }

  closeRenameModal(){
    this.setState({
      showRenameModal: false
    })
  }
  
  render() {
    let {currentDirectoryId, directoryData} = this.props;

    var styles = {
            marginLeft:'30px',
            marginRight:'30px'
        };
    return (
      <div style={styles}>
        <button type="button" className="btn btn-default" onClick={this.openCreateModal.bind(this)}>New Folder</button>&emsp;
        <button type="button" className="btn btn-default" onClick={this.openRenameModal.bind(this)}>Rename this Folder</button>
        <AddFolderModal showModal={this.state.showCreateModal} closeModal={this.closeCreateModal.bind(this)}
                        addFolder = {this.props.addFolder.bind(this)}></AddFolderModal>
        <RenameFolderModal showModal={this.state.showRenameModal} closeModal={this.closeRenameModal.bind(this)}
                        renameFolder= {this.props.renameFolder.bind(this)} ></RenameFolderModal>
      </div>
    )
  }
}

export default CommandBar
