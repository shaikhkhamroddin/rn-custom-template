import {configureStore, Middleware} from '@reduxjs/toolkit';
import homeReducer from './homeslice';
import {CONFIG_ENV, ENV_DEV} from '../shared/constants';
import {useDispatch, useSelector} from 'react-redux';

const additionalMiddlewares: Array<Middleware> = [];

if (CONFIG_ENV !== ENV_DEV) {
  const {logger} = require('redux-logger');
  additionalMiddlewares.push(logger);
}

export const store = configureStore({
  reducer: {
    home: homeReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(...additionalMiddlewares),
});

/**  Infer the `RootState` and `AppDispatch` types from the store itself */
export type RootState = ReturnType<typeof store.getState>;
/**  Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState} */
export type AppDispatch = typeof store.dispatch;

/** Use throughout your app instead of plain `useDispatch` and `useSelector`  */
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
