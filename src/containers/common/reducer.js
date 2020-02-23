import { SET_UPDATE_ROUTE } from './action';

const initialState = {
    currentBrand: ''
  };

  const commonReducer = (state = initialState, action) => {
    switch(action.type){
        case SET_UPDATE_ROUTE:
            return {
                ...state,
                currentBrand: action.data
        }
        default:
            return {...state};
    }
};

export const getCurrentBrand = state => state.commonReducer.currentBrand;


export default commonReducer;