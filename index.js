const redux = require('redux');
const createStore = redux.createStore/* store cria o lugar onde fica o estado */
const combineReducer = redux.combineReducers

const {incrementAction,decrementAction} = require('./actions/CounterActions')
const {addItemAction} = require('./actions/ListActions')


const counterReducer = require('./reducers/CounterReducer')
const listReducer = require('./reducers/ListReducer')








/* esta combinando os dois reducer */
const combineReducers = combineReducer({/* esta juntando os dois reducers */
      counter: counterReducer,
      list: listReducer




})
/* criando a store para armazenar tudo */
const store = createStore(combineReducers);/* aqui voce criou uma store para armazenar tudo voce disse que queria armazenar as coisas do combineReducer*/
console.log(store.getState())/* imprimi o estado se quisesse so o estado do counter coloca .counter ou .list */
store.subscribe(()=>{console.log(store.getState())}) /*se quisesse o estado so do counter coloca .counter so da list .list no .getState esta pegando o estado da action 
no subscribe voce fala que quando o estado for modificado voce imprime ele na tela*/ 
store.dispatch(addItemAction('Um novo item'))

store.dispatch(decrementAction(-5))  /* dispatch leva action para reducer e altera estado o 5 seria o value que voce definiu  em action */                                                   