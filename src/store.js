import { createStore } from 'vuex';

const store = createStore({
    state: {

        upVotes: [
            {
                selected: false
            }
        ]
    },
    getters: {

    },
    mutations: {
        NEW_UPVOTE(state, upVoteItem) {
            state.upVotes.push({
                selected: false
            })
        },
        TOGGLE_UPVOTE_STATUS(state, upVoteItem) {
            upVoteItem.selected = !upVoteItem.selected;
        }
    },
    actions: {
        toggleUpVoteStatus({ commit }, upVoteItem) {
            commit('TOGGLE_UPVOTE_STATUS', upVoteItem);
        },
        addNewUpVote({ commit }, upVoteItem) {
            commit('NEW_UPVOTE', upVoteItem);
        }
    }
});
export default store;