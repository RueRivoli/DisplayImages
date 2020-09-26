const actions = {
    switchExpose ({ commit }, { bool }) {
      commit('SET_EXPOSE', { bool })
    }
}

export default actions