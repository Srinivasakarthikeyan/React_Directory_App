import {
  Modal,
  ModalHeader,
  ModalTitle,
  ModalClose,
  ModalBody,
  ModalFooter
} from 'react-modal-bootstrap';
import React, {Component} from 'react';

class RenameFolderModal extends Component {

    constructor(){
        super();
        this.state = {
            isOpen: false
        };
        this.hideModal = this.hideModal.bind(this);
        this.openModal = this.openModal.bind(this);
        this.renameFolder = this.renameFolder.bind(this);
    }

    componentDidMount(){
        this.props.showModal ? this.openModal() : this.hideModal();
    }

    openModal(){
        this.setState({
            isOpen: true
        });
    };

    hideModal(){
        this.setState({
            isOpen: false
        });
        this.props.closeModal();
    };

    renameFolder(){
        //TODO - handle validations separately
        if(this.refs.folderName.value!==''){
            this.props.renameFolder(this.refs.folderName.value);
            this.setState({
                isOpen: false
            });
            this.props.closeModal();
            this.refs.folderName.value = "";
        }
        
    }
  
  render() {
      
    return (
        <Modal isOpen={this.props.showModal} onRequestHide={this.hideModal}>
        <ModalHeader>
            <ModalClose onClick={this.hideModal}/>
            <ModalTitle>Rename</ModalTitle>
        </ModalHeader>
        <ModalBody>
            <input type="text" ref="folderName" placeholder="Enter your new name"/>
        </ModalBody>
        <ModalFooter>
            <button className='btn btn-primary' onClick={this.renameFolder}>
            Save
            </button>
        </ModalFooter>
        </Modal>
        
    )
  }
}

export default RenameFolderModal;