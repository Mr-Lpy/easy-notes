/**
 * Created by lpy on 2017/5/22.
 */
import Vue from 'vue';
import Vuex from 'vuex';
import * as actions from './actions';

Vue.use(Vuex);

const state = {
  notes: [],
  activeNote: {
    title: '',
    text: '',
    favorite: false
  }
};

const mutations = {
  ADD_NOTE (state) {
    console.log('in ADD_NOTE');
    const newNote = {
      title: '',
      text: '',
      favorite: false
    };
    let length = state.notes.length;
    newNote.title = length > 0 ? '新建笔记' + state.notes.length : '新建笔记';
    state.notes.push(newNote);
    state.activeNote = newNote;
  },
  EDIT_NOTE (state,note) {
    state.activeNote.text = note.text;
    state.activeNote.title = note.title;
    console.log(state.activeNote);
  },
  DELETE_NOTE (state) {
    console.log('in DELETE_NOTE');

    if (state.notes.length == 0) return;

    // vue1的$remove在vue2中废除了
    //state.notes.$remove(state.activeNote);
    let index = state.notes.indexOf(state.activeNote);
    state.notes.splice(index,1);

    state.activeNote = state.notes[index-1] || {};
  },
  TOGGLE_FAVORITE (state) {
    console.log('in TOGGLE_FAVORITE');
    state.activeNote.favorite = !state.activeNote.favorite;
  },
  SET_ACTIVE_NOTE (state,note) {
    state.activeNote = note;
  }
};

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters: {
    getActive: state => {
      return state.activeNote;
    },
    notes: state => {
      return state.notes;
    }
  }
});
