import { Root } from '../Config/router';
import { NavigationActions } from 'react-navigation';

const initialState = Root.router.getStateForAction(NavigationActions.init());

export const navigation = (state = initialState, action) => {
  const nextState = Root.router.getStateForAction(action, state);

  return nextState || state;
};
