import {fetchAskList, fetchItemInfo, fetchJobsList, fetchNewsList, fetchUserInfo , fetchList} from "@/api";
export default {
    FETCH_NEWS(context) {
        fetchNewsList()
            .then(res => {
                // context commit 을 통해 mutations에 데이터를 넘깁니다.
                context.commit('SET_NEWS', res.data);
                return res;
            })
            .catch(err => {
                console.log(err)
            })
    },
    FETCH_JOBS({commit}) {  // {commit} context object 안에 commit을 불러옴
        fetchJobsList()
            .then(({data}) => {
                commit('SET_JOBS', data);
            })
            .catch(err => console.log(err));
    },
    FETCH_ASKS({commit}) {
        fetchAskList()
            .then(({data}) => {
                commit('SET_ASKS', data);
            })
            .catch(err => {
                console.log(err);
            })
    },
    FETCH_USER({ commit } , name) {
        fetchUserInfo(name)
            .then(({ data }) => {
                commit('SET_USER' , data);
            })
            .catch(err => console.log(err));
    },
    FETCH_ITEM({ commit } , id) {
        fetchItemInfo(id)
            .then(({ data }) => {
                commit('SET_ITEM' , data);
            })
            .catch(err => console.log(err));
    },
    FETCH_LIST( { commit } , pageName  ) {
        fetchList(pageName)
            .then(( {data} ) => commit('SET_LIST' , data ))
            .catch(err => console.log(err));
    }
}
