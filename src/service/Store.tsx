import React from 'react';
import { IState, ActionTypes, IAction } from '../utils/serviceInterfaces';

const initialState: IState = {
    episodes: [],
    favourites: []
}

export const Store = React.createContext<IState | any>(initialState);

export const reducer = (state: IState, action: IAction): IState => {
    switch (action.type) {
        case ActionTypes.FETCH_DATA:
            return {
                ...state,
                episodes: action.payload
            }
        case ActionTypes.ADD_FAV:
            return {
                ...state,
                favourites: [...state.favourites, action.payload]
            }
        case ActionTypes.REMOVE_FAV:
            return {
                ...state,
                favourites: action.payload
            }
        default:
            return state;
    }
}

export const StoreProvider = ({children}:JSX.ElementChildrenAttribute): JSX.Element => {
    const [state, dispatch] = React.useReducer(reducer, initialState);
    return (
        <Store.Provider value={{ state, dispatch }}>
            {children}
        </Store.Provider>
    )
}