export const state = () => ({
    route: null
  })
  
  export const mutations = {
    SET_ROUTE(state, route) {
        state.route = route;
      }
  }