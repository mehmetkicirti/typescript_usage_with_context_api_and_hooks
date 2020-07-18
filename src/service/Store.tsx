import React from 'react';

interface IState {
    episodes : [];
    favourites: [];
}

interface IAction {
    type:string;
    payload:any;
}

const initialState : IState = {
    episodes: [],
    favourites:[]
}

export enum ActionTypes{
    FETCH_DATA="FETCH_DATA"
}

export const Store = React.createContext<IState|any>(initialState);

export const reducer = (state:IState,action:IAction):IState =>{
    switch(action.type){
        case ActionTypes.FETCH_DATA:
            return {
                ...state,
                episodes:action.payload
            }
        default:
            return state;
    }
}

export const StoreProvider = (props:any):JSX.Element => {
    const [state,dispatch] = React.useReducer(reducer,initialState);
    return (
        <Store.Provider value = {{state,dispatch}}>
            {props.children}
        </Store.Provider>
    )
}