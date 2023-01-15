export default {
    SET_NEWS(state, news) { // mutations 는 state로 넘기기 위한 메서드이므로 무조건 첫번째 인자로 state 를 받습니다.
        state.news = news;
    },
    SET_JOBS(state, jobs) {
        state.jobs = jobs;
    },
    SET_ASKS(state, asks) {
        state.asks = asks;
    },
    SET_USER(state, user) {
        state.user = user;
    },
    SET_ITEM(state, item) {
        state.item = item;
    },
    SET_LIST(state, list) {
        state.list = list;
    }

}