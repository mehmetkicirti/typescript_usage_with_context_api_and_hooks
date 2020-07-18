import React from 'react';
import { Store } from '../service/Store';
import { Typography, Col, Row } from 'antd';
import { Link } from '@reach/router';

const { Title, Text } = Typography;

function App(props:any){
  const { state} = React.useContext(Store);

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
