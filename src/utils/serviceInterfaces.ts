import { IEpisode } from "../models/IEpisode";

/**
 * 
 * All we needed Interfaces defined in here
 */

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

export interface IEpisodeProps {
    episodes : Array<IEpisode>,
    toggleFavAction : (episode:IEpisode) => {},
    favourites : Array<IEpisode>
}