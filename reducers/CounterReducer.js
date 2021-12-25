

module.exports = function counterReducer(state = 0/* estado inicial nao esta passando nada entao = 0 */, action){/* isso e um reducer */
    switch (action.type/* type porque voce definiu como type */) {
        case 'INCREMENT':
            return state + action.payload
           
    case 'DECREMENT':
    return state + action.payload
    
          
        default:
          return state;
    }
    }