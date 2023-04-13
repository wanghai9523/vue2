const state = {
    message: 'Hello!'
}
// export default {
//     debug: true,
//     state: {
//       message: 'Hello!'
//     },
//     setMessageAction (newValue) {
//       if (this.debug) console.log('setMessageAction triggered with', newValue)
//       this.state.message = newValue
//     },
//     clearMessageAction () {
//       if (this.debug) console.log('clearMessageAction triggered')
//       this.state.message = ''
//     }
//   }
const getters = {
    getMessage() {
        return 333;
    }
}

const mutations  = function() {
    console.log('zzz');
}

const actions = function(){
    console.log('333');
}

export default { namespaced: true, state, mutations, getters, actions }