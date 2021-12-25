/* payload e uma carga a mais que voce coloca no action voce esta falando que essa carga a mais e igual value */
const incrementAction = (value) => {return{type:'INCREMENT',payload:value || 1}}/* ISSO E UMA ACTION a barra serve para falar que se o value for vazio retorna 1 assim nao causa erros payload recebe value se nao tiver value recebe 1*/
const decrementAction = (value) => {return{type:'DECREMENT',payload:value || 1} }/* ISSO E UMA ACTION */

module.exports = {
    incrementAction,
    decrementAction





}