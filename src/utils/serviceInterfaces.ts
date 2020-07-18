export interface IState {
    episodes : Array<any>;
    favourites: Array<any>;
}

export interface IAction {
    type:string;
    payload:any;
}

export enum ActionTypes{
    FETCH_DATA="FETCH_DATA",
    ADD_FAV="ADD_FAV",
    REMOVE_FAV="REMOVE_FAV"
}