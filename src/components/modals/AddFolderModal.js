//import Modal from 'react-modal';
import {
  Modal,
  ModalHeader,
  ModalTitle,
  ModalClose,
  ModalBody,
  ModalFooter
} from 'react-modal-bootstrap';
import React, {Component} from 'react';

class AddFolderModal extends Component {

    constructor(){
        super();
        this.state = {
            isOpen: false
        },
        this.hideModal = this.hideModal.bind(this);
        this.openModal = this.openModal.bind(this);
        this.createFolder = this.createFolder.bind(this);
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

    createFolder(){
        //TODO - handle validations separately
        if(this.refs.folderName.value!==''){
            this.props.addFolder(this.refs.folderName.value);
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
            <ModalTitle>Create Folder</ModalTitle>
        </ModalHeader>
        <ModalBody>
            <input type="text" ref="folderName" placeholder="Enter your folder name"/>
        </ModalBody>
        <ModalFooter>
            <button className='btn btn-default' onClick={this.createFolder}>
            Create
            </button>
        </ModalFooter>
        </Modal>
        
    )
  }
}

export default AddFolderModal;