import {ADD_FOLDER,RENAME_FOLDER,SET_CURRENT_DIRECTORY} from '../constants';
import _ from 'lodash';


const initialState = {
    fullDirectory: [
        {
            id:1,
            parentID:0,
            name:"root",
            type:"directory"
        }
    ],
    currentDirectoryID: 0
};

export default function directoriesData(state = initialState, action){

    switch(action.type){

        case ADD_FOLDER:
            return {
                currentDirectoryID : state.currentDirectoryID,
                fullDirectory:[{
                    id:_.uniqueId(Date.now()+"_"),
                    parentID:state.currentDirectoryID,
                    name:action.newFolderName,
                    type:"directory"
                },
                ...state.fullDirectory]
            }
            
        case RENAME_FOLDER:
                return {fullDirectory : state.fullDirectory.map(dir =>{
                    if(dir.id === state.currentDirectoryID){
                        return Object.assign({}, dir, {
                                                        id:dir.id,
                                                        parent:dir.parent,
                                                        name:action.newFolderName,
                                                        type:"directory",
                                                    })

                        }else{
                            return dir;
                        }
                    }),
                    currentDirectoryID : state.currentDirectoryID,
            }

        case SET_CURRENT_DIRECTORY:
            return {
                currentDirectoryID : action.currentID,
                fullDirectory: state.fullDirectory
            }
        default:
            return state;

    }

}
