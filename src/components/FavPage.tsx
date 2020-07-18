import React from 'react'
import { Store } from '../service/Store';
import {toggleFavAction} from './../utils/actions';
import { IEpisodeProps } from '../utils/serviceInterfaces';
const EpisodeList = React.lazy<any>(()=>import('./EpisodeList'));

const FavPage = () : JSX.Element => {
    
    const {state,dispatch} = React.useContext(Store);
    
    const props : IEpisodeProps= {
        episodes:state.favourites,
        store:{state,dispatch},
        toggleFavAction,
        favourites:state.favourites
    }


    return (
        <React.Suspense fallback={<div style={{fontSize: 32, fontWeight: 'bold', textAlign: 'center', margin: '0 auto'}}></div>}>
            <div className="episode-layout">
                <EpisodeList {...props}/>
            </div>
        </React.Suspense>
    );
}

export default FavPage;