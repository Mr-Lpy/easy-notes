/**
 * Created by lpy on 2017/5/22.
 */

export const addNote = ({commit}) => {
  console.log('in addnote');
  commit('ADD_NOTE');
}

export const editNote = ({commit},e) => {
  console.log(e);
  commit('EDIT_NOTE',e)
};

export const deleteNote = ({commit}) => {commit('DELETE_NOTE')};

export const updateActiveNote = ({commit},note) => {commit('SET_ACTIVE_NOTE',note)};

export const toggleFavorite = ({commit}) => {commit('TOGGLE_FAVORITE')};
