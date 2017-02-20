import React, { Component } from 'react'

class BreadCrumbs extends Component {

  
  render() {

    let {currentDirectoryId, directoryData} = this.props;
    let tempId = currentDirectoryId,tempDirData=[];
    let breads = [];

      while(currentDirectoryId!==0 && tempId!==0){
        tempDirData = directoryData.filter(dir=>dir.id===tempId);
        if(tempDirData[0]!==undefined){
          breads.push(tempDirData[0].name);
          tempId = tempDirData[0].parentID;
        }
      }
      
    let breadCrumb = [];
    for(let i=breads.length; i>0;i--){
      if(breads[i-0])
      breadCrumb.push(<li key={i-0} className="breadcrumb-item" >{breads[i-0]}</li>);
    }
    
    
    return (
      <nav className="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">Home</li>
            {breadCrumb}
          </ol>
      </nav>
    )
  }
}

export default BreadCrumbs
