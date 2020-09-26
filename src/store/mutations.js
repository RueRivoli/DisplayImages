const mutations = {
    EXPOSE: (state, bl) => {
        state.exposeFavourites = bl
    },
    PICTURE: (state, ind) => {
        state.picture = ind
    },
}

export default mutations