

module.exports =  (state = [],action) => {
    switch (action.type) {
       case 'ADD_ITEM':
return[...state, action.payload]/* fica em array porque e uma lista */
        default:
            return state
    }






}