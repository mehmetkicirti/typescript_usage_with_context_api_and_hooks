import React from 'react'
import { Store } from '../service/Store';
import {IEpisodeProps } from '../utils/serviceInterfaces';
import { Row } from 'antd';
import {toggleFavAction} from './../utils/actions';
//When needing component we used to create lazy.But we take suspense callback error,so with React.Suspense need to decorate where we wants to create.
const EpisodeList = React.lazy<any>(() => import('./EpisodeList'));

const Homepage = () : JSX.Element => {
    const { state, dispatch } = React.useContext(Store);
    
    //In here I defined props to send EpisodeList component's props to reach whatever it wants.
    const props: IEpisodeProps = {
        episodes: state.episodes,
        toggleFavAction,
        store:{state,dispatch},
        favourites: state.favourites
    }
    React.useEffect(()=>{
        console.log("Deneme");
    })

    return (
        <Row>
            <React.Suspense fallback={<div style={{ fontSize: 32, fontWeight: 'bold', textAlign: 'center', margin: '0 auto' }}>loading..</div>}>
                <EpisodeList {...props} />
            </React.Suspense>
        </Row>
    );
}

export default Homepage;