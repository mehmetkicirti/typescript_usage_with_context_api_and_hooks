import React from 'react';
import { Store, ActionTypes } from '../service/Store';
import { Typography, Card, Col, Row } from 'antd';
import { IEpisode } from '../models/IEpisode';
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
                  style={{ width: 240,margin:10 }}
                  cover={<img alt={`Rick and Morty ${episode.name}`} src={episode.image.medium} />}
                >
                  <Meta title={episode.name} description={`Season : ${episode.season} Number : ${episode.number}`} />
                </Card>
              </Col>
            )
          })
        }
      </Row>
    </React.Fragment>
  );
}

export default App;
