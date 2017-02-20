import * as types from '../constants'


export function addFolder(newFolderName) {
  return { type: types.ADD_FOLDER,newFolderName }
}

export function renameFolder(newFolderName) {
  return { type: types.RENAME_FOLDER, newFolderName }
}

export function setCurrentDirectory(currentID){
  return {type: types.SET_CURRENT_DIRECTORY, currentID}
}

