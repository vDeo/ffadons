import axios from 'axios';

export default {
    state: {
        addOns: [],
        sort: '',
        direction: 'ASC'
    },
    getters: {
        getAddOns(state) {
            return state.addOns;
        },

        getSort(state) {
            return state.sort;
        },
    },
    actions: {
        fetchAddOns({commit}) {
            return new Promise((resolve, reject) => {
                axios.get('http://127.0.0.1:5000/api/addons')
                    .then( response => {
                        let data = response.data;
                        commit('SET_ADD_ONS', data.results);
                        console.log(data.results);
                        resolve(data);
                    })
                    .catch( error => {
                        reject(error);
                    });
            });
        },

        sortAddOns({commit, state, getters}, sort) {
            const addOns = JSON.parse(JSON.stringify([...getters.getAddOns]));
            const currSort = state.sort;
            let direction = state.direction;
            let multi = 1;
            
            if(currSort != sort) {
                commit('SET_DIRECTION', 'DSC');
            } else {
                if(direction === 'DSC') {
                    console.log('here')
                    multi = -1
                    commit('SET_DIRECTION', 'ASC');
                }else {
                    commit('SET_DIRECTION', 'DSC');
                }               
            }
            
            switch(sort) {
                case("Name"):
                    addOns.sort( (a,b) => {
                        if(a.name[a.default_locale].toLowerCase() < b.name[b.default_locale].toLowerCase()) {
                            return multi*1
                        }
                        return multi*-1;
                    })
                    break;
                case("Author"):
                    addOns.sort( (a,b) => {
                        if(a.authors[0].name.toLowerCase() < b.authors[0].name.toLowerCase() ) {
                            return multi*1
                        }
                        return multi*-1;
                    })
                    break;
                case("Ratings"):
                    addOns.sort( (a,b) => {
                        if(a.ratings.average < b.ratings.average ) {
                            return multi*-1
                        }
                        return multi*1;
                    })
                    break;
                case("Updated"):
                    addOns.sort( (a,b) => {
                        if(a.last_updated < b.last_updated ) {
                            return multi*-1
                        }
                        return multi*1; 
                    })
                    break;
                case(""):
                    return;
            }

            commit('SET_SORT', sort);
            commit('SET_ADD_ONS', addOns);
        }
    },
    mutations: {
        SET_ADD_ONS(state, addOns) {
            state.addOns = addOns;
        },

        SET_SORT(state, sort) {
            state.sort = sort;
        },

        SET_DIRECTION(state, direction) {
            state.direction = direction;
        }

    }
}