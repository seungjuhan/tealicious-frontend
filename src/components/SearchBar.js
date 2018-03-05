import React from 'react';
import { Button, ButtonGroup } from 'reactstrap';

import './SearchBar.css'

export default class SearchBar extends React.Component {
  render() {
    return (
      <div className="SearchBarContainer">
        <ButtonGroup>
          <Button>Left</Button>{' '}
          <Button>Middle</Button>{' '}
          <Button>Right</Button>
        </ButtonGroup>
      </div>
    );
  }
}
