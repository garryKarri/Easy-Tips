import { initState } from '../initState';
import { DISABLE_LOADER, ENABLE_LOADER } from '../type/loaderTypes';

// eslint-disable-next-line default-param-last
const loaderReducer = (state = initState().loader, action) => {
  switch (action.type) {
    case ENABLE_LOADER:
      return true;

    case DISABLE_LOADER:
      return false;

    default:
      return state;
  }
};

export default loaderReducer;
