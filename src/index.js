import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
// loggerimport React from 'react';
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put as dispatch } from 'redux-saga/effects';
import logger from 'redux-logger';
import axios from 'axios';
import App from './App';

// this startingPlantArray should eventually be removed
// const startingPlantArray = [
//   { id: 1, name: 'Rose' },
//   { id: 2, name: 'Tulip' },
//   { id: 3, name: 'Oak' }
// ];

const plantList = (state = [], action) => {
  switch (action.type) {
    case 'ADD_PLANT':
      return  action.payload 
    default:
      return state;
  }
};
function* fetchPlant() {
  console.log('fetchPlant was hit');
  try {
    const plantResponse = yield axios.get('/api/plant');
    yield dispatch({ type: 'ADD_PLANT', payload: plantResponse.data })
  } catch (error) {
    console.log('this was an error with the fetch- probably your fault');

  }
}

function* postPlant(action) {
  try {
    yield axios.post('/api/plant', action.payload );
    yield dispatch({ type: 'FETCH_PLANT'});
  } catch (error) {
    console.log('this was an error with the fetch- probably your fault');

  }
}

function* deletePlant(action) {
  try {
    console.log('delete element hit', action)
   
    yield axios({
      method: 'DELETE',
      url: `/api/plant/`+action.payload,
    });
    yield dispatch({ type: 'FETCH_PLANT' })
  } catch (error) {
    console.log('Failed in postElement', error)
  }

}

function* watcherSaga() {
  yield takeEvery('FETCH_PLANT', fetchPlant);
  yield takeEvery('POST_PLANT', postPlant)
  yield takeEvery('DELETE_PLANT', deletePlant)
}

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  combineReducers( {plantList }),
  applyMiddleware(sagaMiddleware, logger),
);
sagaMiddleware.run(watcherSaga);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('react-root'));
