import { createStore } from 'vuex';

const store = createStore({
    state: {

        upVotesList: [
            {
            id: 0,
            upVotes: [
                {
                    selected: false
                }
            ],
            },
            {
                id: 1,
                upVotes: [
                    {
                        selected: false
                    }
                ],
            },
            {
                id: 2,
                upVotes: [
                    {
                        selected: false
                    }
                ],
            }
        ]
    },
    getters: {

    },
    mutations: {
        NEW_UPVOTE(state,upVoteListId) {
            state.upVotesList[upVoteListId].upVotes.push({
                selected: false
            })
        },
        TOGGLE_UPVOTE_STATUS(state, upVoteListId) {
            state.upVotesList[upVoteListId].upVotes.map((upvote) => {
                upvote.selected = !upvote.selected;
            })
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