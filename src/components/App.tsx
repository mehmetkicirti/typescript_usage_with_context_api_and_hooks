import React from 'react';
import { Store } from '../service/Store';
import { Typography, Col, Row } from 'antd';
import { Link } from '@reach/router';

const { Title, Text } = Typography;


//When needing component we used to create lazy.But we take suspense callback error,so with React.Suspense need to decorate where we wants to create.

function App(): JSX.Element {
  const { state} = React.useContext(Store);

  //In here I defined props to send EpisodeList component's props to reach whatever it wants.


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
