import axios from "axios"

const baseUrl = "http://jsonplaceholder.typicode.com";

const state = {
  posts: []
};

const mutations = {
  SET_POSTS(state, _posts) {
    state.posts = _posts;
  },
  LIKE_POST(state, _post) {
    const idx = state.posts.findIndex(post => post.id === _post.id)
    state.posts.splice(idx, 1, { ..._post, isLiked: !_post.isLiked });
  },
  SAVE_POST(state, _post) {
    const idx = state.posts.findIndex(post => post.id === _post.id)
    state.posts.splice(idx, 1, { ..._post, isSaved: !_post.isSaved });
  }
};

const actions = {
  async getPosts({ commit }) {
    try {
      const response = await axios.get(`${baseUrl}/photos?_start=0&_limit=10`);

      if (response.data === null) return;
      commit("SET_POSTS", response.data);
    } catch (e) {
      console.log(e);
    }
  },
  async postLiked({ commit }, post) {
    if (post?.id === null) return;
    commit("LIKE_POST", post);
  },
  async postSaved({ commit }, post) {
    if (post?.id === null) return;
    commit("SAVE_POST", post);
  }
};

const getters = {
  posts: (state) => state.posts
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};