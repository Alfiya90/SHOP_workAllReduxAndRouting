import store from './store'

let basketState = [
   { item: {
           id: "1",
           img:"/Image.png",
           title:"Model1",
           price:1200,
           rate: 4.8
       },
       count: 0

    },
    { item: {
            id: "2",
            img:"/Image1.png",
            title:"Model2",
            price:3500,
            rate: 4.8
        },
        count: 0


    },
    { item:{
            id: "3",
            img:"/Image2.png",
            title:"Model3",
            price:2800,
            rate: 4.8
        },
        count: 0

    }


]
/*let box = {
    item,
    count
}*/

let basketReducer = (state = basketState, action) => {
    switch (action.type) {
        case "ADD": {
            let newState = {...state};
            let index = newState.findIndex(box => box.item.id === action.item.id) //todo
            if (index !== -1) {
                newState[index].count++;
            } else {
                newState.push({ item: action.item, count: 1})
            }
            return newState;
        }
        case "DELETE": {
            let newState = {...state};
            let index = newState.findIndex(box => box.item.id === action.item.id) //todo
            if (index !== -1) {
                newState[index].count--;
                if (newState[index].count === 0) {
                    newState.splice(index, 1);
                }
            }
            return newState;
        }
        default:
            return state;

    }
}

export const addItemAC = (item) => {
    return {type: 'ADD', item}
}
export const deleteItemAC = (item) => {
    return {type: 'DELETE', item}
}


export default basketReducer;