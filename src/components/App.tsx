import React from 'react';
import { Store} from '../service/Store';
import { Typography, Card, Col, Row,Button } from 'antd';
import { IEpisode } from '../models/IEpisode';
import { ActionTypes, IAction } from '../utils/serviceInterfaces';
const { Title, Text } = Typography;
const { Meta } = Card;

function App(): JSX.Element {
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
  const toggleFavAction = (episode:IEpisode):IAction => {
    const isIncludedFav = state.favourites.includes(episode);
    let dispatchObject = {
      type:ActionTypes.ADD_FAV,
      payload:episode
    }
    if(isIncludedFav){
      const withoutFav = state.favourites.filter((fav:IEpisode)=>fav.id !== episode.id);
      dispatchObject={
        type:ActionTypes.REMOVE_FAV,
        payload:withoutFav
      }
    }
    return dispatch(dispatchObject);
  }

  return (
    <React.Fragment>
      {console.log(state)}
      <Title level={2}>
        Rick and Morty
        </Title>
      <Text keyboard>Pick your favourite episode!!</Text>
      <Row>

        {
          state.episodes.map((episode: IEpisode) => {
            return (
              <Col span={6}>
                <Card
                  key={episode.id}
                  hoverable
                  style={{ width: 240,margin:5 }}
                  cover={<img alt={`Rick and Morty ${episode.name}`} src={episode.image.medium} />}
                >
                  <Meta title={episode.name} description={`Season : ${episode.season} Number : ${episode.number}`} />
                </Card>
            <Button style={{float:'inline-end'}} danger onClick={()=>toggleFavAction(episode)}>{
              state.favourites.find((fav:IEpisode)=>fav.id === episode.id) ? 'Unfav' : 'Fav'
            }</Button>
              </Col>
            )
          })
        }
      </Row>
    </React.Fragment>
  );
}

export default App;
