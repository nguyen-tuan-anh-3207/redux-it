import {createStore} from 'redux';

var initialState ={ 
    status : false,
    sort : {
        by: 'name',
        value : 1 //1 :tăng, -1 : giảm
    }
}

var myReducer = (state=initialState, action)=>{
    if(action.type === 'TOGGLE_STATUS'){
        state.status = !state.status;
        return state;
    }
    if(action.type === 'SORT'){
        // //console.log(action);
        // state.sort ={
        //     by: action.sort.by,
        //     value : action.sort.value
        var {by, value} = action.sort; //action.sort
        var {status} = state;
        return {
            status : status,
            sort: {
                by: by,
                value : value
            }
        }
        }
    }


const store = createStore(myReducer);
console.log(store.getState())
//thực hiện thay đổi status;
var action = {type: 'TOGGLE_STATUS'};
store.dispatch(action);
console.log(store.getState());
// thực hiện công việc sắp xếp  từ Z -A
var sortAction ={
    type: 'SORT',
    sort :{
        by:'name',
        value: -1
    }
}

store.dispatch(sortAction);
console.log(store.getState());