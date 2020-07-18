import { ActionTypes, IAction, IState, Dispatch } from "./serviceInterfaces";
import { IEpisode } from "../models/IEpisode";

export const fetchDataAction = async (dispatch:Dispatch) => {
    let url = "https://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes";
    const data = await fetch(url);
    const dataJSON = await data.json();
    return dispatch({
        type: ActionTypes.FETCH_DATA,
        payload: dataJSON._embedded.episodes
    });
}
export const toggleFavAction = (state:IState,dispatch:any,episode: IEpisode |any): IAction => {
    const isIncludedFav = state.favourites.includes(episode);
    let dispatchObject = {
        type: ActionTypes.ADD_FAV,
        payload: episode
    }
    if (isIncludedFav) {
        const withoutFav = state.favourites.filter((fav: IEpisode) => fav.id !== episode.id);
        dispatchObject = {
            type: ActionTypes.REMOVE_FAV,
            //can be array or only object so we take IEpisode | any
            payload:withoutFav
        }
    }
    return dispatch(dispatchObject);
}