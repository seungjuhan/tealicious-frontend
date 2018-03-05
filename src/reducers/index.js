import * as types from '../actions/ActionTypes';
import { Map, List } from 'immutable';

// 초기 상태를 정의합니다
const initialState = Map({
  postercard: List([
    Map({
      place: '설입역 담쟁이넝쿨',
      poster: 'https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180',
      host: '서울대학교 전기정보공학부 R반'
    }),
    Map({
      place: 'Unknown',
      poster: 'https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180',
      host: 'Unknown'
    }),
    Map({
      place: 'Unknown',
      poster: 'https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180',
      host: 'Unknown'
    }),
    Map({
      place: 'Unknown',
      poster: 'https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180',
      host: 'Unknown'
    }),
  ])
})

/*
    리듀서 함수를 정의합니다. 리듀서는 state 와 action 을 파라미터로 받습니다.
    state 가 undefined 일때 (스토어가 생성될때) state 의 기본값을 initialState 로 사용합니다.
    action.type 에 따라 다른 작업을 하고, 새 상태를 만들어서 반환합니다.
    이 때 주의 할 점은 state 를 직접 수정하면 안되고,
    기존 상태 값에 원하는 값을 덮어쓴 새로운 객체를 만들어서 반환해야합니다.
*/

function poster(state = initialState, action) {
  const postercard = state.get('postercard');

  switch (action.type) {
    default:
      return state;
  }
};

export default poster;
