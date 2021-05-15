export const state = () => ({
  announcement: null
})

export const mutations = {
  SET_ANNOUNCEMENT(state, message){
    state.announcement = message
  }
}

export const actions = {
  async nuxtServerInit( { commit } ){
    const { body } = await this.$axios.$get('/api/posts/1')
    commit('SET_ANNOUNCEMENT', body)

    console.log("Eseguo ServerSide: ", body);
  }
}
