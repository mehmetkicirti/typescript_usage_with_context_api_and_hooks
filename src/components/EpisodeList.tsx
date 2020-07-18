import React from 'react'
import { IEpisode } from '../models/IEpisode';
import { Col, Card, Button } from 'antd';
import { fetchDataAction } from '../utils/actions';
const { Meta } = Card;

export default function EpisodeList(props: any): Array<JSX.Element> {
    const { episodes, toggleFavAction, favourites,store} = props;
    const {state,dispatch} = store;
    
    React.useEffect(() => {
        state.episodes.length === 0 && fetchDataAction(dispatch);
    });
    
    return episodes.map((episode: IEpisode) => {
        return (
            <Col key={episode.id} span={6}>
                <Card
                    hoverable
                    style={{ width: 240, margin: 5 }}
                    cover={<img alt={`Rick and Morty ${episode.name}`} src={episode.image.medium} />}
                >
                    <Meta title={episode.name} description={`Season : ${episode.season} Number : ${episode.number}`} />
                </Card>
                <Button style={{ float: 'inline-end' }} danger onClick={() => toggleFavAction(episode,state,dispatch)}>
                    {
                    favourites.find((fav: IEpisode) => fav.id === episode.id) ? 'Unfav' : 'Fav'
                    }
                </Button>
            </Col>
        )
    })
}