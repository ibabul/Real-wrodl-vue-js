import Vue from "vue";
import Vuex from "vuex";
import EventService from '@/services/EventService.js';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        user: { id: 'abc123', name: "MD Imtiaz" },
        categories: [
            'Sustanability',
            'nature',
            'animal welfare',
            'housing',
            'education',
            'food',
            'community'
        ],
        todos: [
            { id: 1, text: " ...", done: false },
            { id: 2, text: " ...", done: true },
            { id: 3, text: " ...", done: true },
            { id: 4, text: " ...", done: false },
            { id: 5, text: " ...", done: true },

        ],
        events: [],
        count: 0
    },
    mutations: {
        INCREMENT_COUNT(state, payload) {
            state.count += payload

        },
        ADD_EVENT(state, event) {
            state.events.push(event)
        },
        SET_EVENTS(state, payload) {
            state.events = payload
        }
    },
    actions: {
        updateCount({ state, commit }, payload) {
            if (state.user) {
                commit('INCREMENT_COUNT', payload)
            }
        },
        createEvent({ commit }, event) {
            return EventService.postEvent(event).then(() => {
                commit('ADD_EVENT', event)

            })
        },
        fetchEvents({ commit }) {
            EventService.getEvents()
                .then(response => {
                    commit('SET_EVENTS', response.data)
                })
                .catch(error => {
                    console.log('There was an error' + error.response)
                })
        }
    },
    modules: {},
    getters: {
        catLength: state => {
            return state.categories.length
        },
        doneTodos: state => {
            return state.todos.filter(todo => todo.done).length
        },
        activeTodosCount: state => {
            return state.todos.filter(todo => !todo.done).length
        },
        getEventById: state => id => {
            return state.events.find(event => event.id === id)
        },
        getEventByName: state => id => {
            return state.events.find(event => event.id === id).organizer
        }

    }
});