export const GET_UPDATED_ROUTE = 'GET_UPDATED_ROUTE';
export const SET_UPDATE_ROUTE = 'SET_UPDATE_ROUTE';

export const setUpdatedRoute = (data) => {
    return {
        type: SET_UPDATE_ROUTE,
        data
    };
}