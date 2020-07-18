import { IEpisode } from "../models/IEpisode";

/**
 * 
 * All we needed Interfaces defined in here
 */

export type Dispatch = React.Dispatch<IAction>;

export interface IState {
    episodes : Array<IEpisode>;
    favourites: Array<IEpisode>;
}

export interface IAction {
    type:string;
    //can be array or object so we added any attribute
    payload:Array<IEpisode> | any;
}

export enum ActionTypes{
    FETCH_DATA="FETCH_DATA",
    ADD_FAV="ADD_FAV",
    REMOVE_FAV="REMOVE_FAV"
}

export interface IEpisodeProps {
    episodes : Array<IEpisode>;
    store:{state:IState,dispatch:Dispatch};
    //we recreated own action because is changed. We give new parameter
    toggleFavAction : (episode:IEpisode|any,dispatch:Dispatch,state:IState) => IAction;
    favourites : Array<IEpisode>;
}