import store from './store'

let basketState = [
]
/*let box = {
    item,
    count
}*/

let basketReducer = (state = basketState, action) => {
    let newState = [...state];
    switch (action.type) {
        case "ADD": {
            let index = newState.findIndex(box => box.item.id === action.item.id) //todo
            console.log(index)
            if (index !== -1) {
                newState[index].count++;
            } else {
                newState.push({ item: action.item, count: 1})
            }
            break;
        }
        case "DELETE": {

            let index = newState.findIndex(box => box.item.id === action.item.id) //todo
            if (index !== -1) {
                newState[index].count--;
                if (newState[index].count === 0) {
                    newState.splice(index, 1);
                }
            }
            break;
        }
        default:{
            break;
        }



    }
    console.log(action)
    console.log(newState)
    return newState;
}

export const addItemAC = (item) => {
    return {type: 'ADD', item}
}
export const deleteItemAC = (item) => {
    return {type: 'DELETE', item}
}


export default basketReducer;