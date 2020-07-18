import React from 'react'
import { Store } from '../service/Store';
import { ActionTypes, IAction, IEpisodeProps } from '../utils/serviceInterfaces';
import { IEpisode } from '../models/IEpisode';
import { Row } from 'antd';

const EpisodeList = React.lazy<any>(() => import('./EpisodeList'));

const Homepage = () => {
    const { state, dispatch } = React.useContext(Store);
    React.useEffect(() => {
        state.episodes.length === 0 && fetchDataAction();
    });

    const fetchDataAction = async () => {
        let url = "https://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes";
        const data = await fetch(url);
        const dataJSON = await data.json();
        return dispatch({
            type: ActionTypes.FETCH_DATA,
            payload: dataJSON._embedded.episodes
        });
    }
    const toggleFavAction = (episode: IEpisode): IAction => {
        const isIncludedFav = state.favourites.includes(episode);
        let dispatchObject = {
            type: ActionTypes.ADD_FAV,
            payload: episode
        }
        if (isIncludedFav) {
            const withoutFav = state.favourites.filter((fav: IEpisode) => fav.id !== episode.id);
            dispatchObject = {
                type: ActionTypes.REMOVE_FAV,
                payload: withoutFav
            }
        }
        return dispatch(dispatchObject);
    }
    const props: IEpisodeProps = {
        episodes: state.episodes,
        toggleFavAction,
        favourites: state.favourites
    }
    return (
        <Row>
            <React.Suspense fallback={<div style={{ fontSize: 32, fontWeight: 'bold', textAlign: 'center', margin: '0 auto' }}>loading..</div>}>
                <EpisodeList {...props} />
            </React.Suspense>
        </Row>
    );
}

export default Homepage;