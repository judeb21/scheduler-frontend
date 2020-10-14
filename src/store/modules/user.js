import axios from 'axios'

export default {
    state: {},
    getters: {
        isLoggedIn: state => !!state.token,
        authStatus: state => state.status,
    },
    mutations: {},
    actions: {
        LOGIN: ({commit}, payload) => {
            return new Promise(( resolve, reject ) => {
                commit('auth_request')
                axios.post(`login`, payload)
                .then(response => {
                    if (response.status === 201) {
                        const token = response.data.access_token
                        const user = response.data.user
                        localStorage.setItem('token', token)
                        axios.defaults.headers.common['Authorization'] = token
                        commit('auth_success', token, user)
                        resolve(true)
                    }
                })
                .catch(err => {
                    commit('auth_error')
                    localStorage.removeItem('token')
                    reject(err)
                })
            })
        },

        LOGOUT: ({commit}) => {
            return new Promise((resolve, reject) => {
                commit('logout')
                localStorage.removeItem('token')
                delete axios.defaults.headers.common['Authorization']
                resolve()
            })
          }
    }
}