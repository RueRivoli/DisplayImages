const actions = {
    switchExpose ({ commit }, { bool }) {
      commit('SET_EXPOSE', { bool })
    },
    setPicture ({ commit }, { n }) {
        commit('SET_PICTURE', { n })
      },
}

export default actions