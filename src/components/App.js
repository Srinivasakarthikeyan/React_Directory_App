
import React, { Component } from 'react';
import Header from '../components/Header';
import BreadCrumbs from '../components/BreadCrumbs';
import DirectoryContainer from '../components/DirectoryContainer';
import CommandBar from '../components/CommandBar';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import * as DirActions from '../actions';

export class App extends Component{

    render() {
        const { directoriesData, actions } = this.props;

        return (
            <div> 
                <Header></Header>
                <BreadCrumbs  currentDirectoryId = {directoriesData.currentDirectoryID}
                directoryData={directoriesData.fullDirectory}></BreadCrumbs>
                <CommandBar currentDirectoryId = {directoriesData.currentDirectoryID} 
                directoryData={directoriesData.fullDirectory} {...actions}></CommandBar>
                <DirectoryContainer currentDirectoryId = {directoriesData.currentDirectoryID}
                directoryData={directoriesData.fullDirectory} {...actions}></DirectoryContainer>
            </div>
            
        );
    }

}

function mapStateToProps(state) {
  return {
    directoriesData: state.directoriesData
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(DirActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
