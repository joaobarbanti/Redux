/* payload e uma carga que voce adiciona na action */


const addItemAction = (item)=>{return {type:"ADD_ITEM", payload:item}}

module.exports = {addItemAction}