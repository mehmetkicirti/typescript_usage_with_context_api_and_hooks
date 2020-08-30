import React from 'react';
import { Store } from '../service/Store';
import { Typography, Col, Row } from 'antd';
import { Link } from '@reach/router';
import { fetchDataAction } from '../utils/actions';

const { Title, Text } = Typography;

function App(props: any) {
  const { state,dispatch} = React.useContext(Store);
  React.useEffect(() => {
    state.episodes.length === 0 && fetchDataAction(dispatch);
  });
  return (
    <React.Fragment>
      {console.log(state)}
      <header className="header">
        <Row align="bottom" justify="space-between">
          <Col>
            <Title level={2}>
              Rick and Morty
             </Title>
            <Text keyboard>Pick your favourite episode!!</Text>
          </Col>
          <Col>
            <Link to="/">Homepage
            </Link>
            <Link to="/faves">
              Favourites : {state.favourites.length}
            </Link>
          </Col>
        </Row>
      </header>
    </React.Fragment>
  );
}

export default App;
