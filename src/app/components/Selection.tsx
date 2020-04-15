import * as React from 'react';
import { Link } from 'react-router-dom';
import { Scrollbars } from 'react-custom-scrollbars';

export class Selection extends React.Component {
  render() {
    return (
      <div className="Nav Nav--scroll Selection">
        <Scrollbars autoHeight autoHeightMin={50} >
          <li className="Nav__item">
            <Link to="/card-list" className="Nav__link">CardList</Link>
          </li>
          <li className="Nav__item">
            <Link to="/form" className="Nav__link">Form</Link>
          </li>
        </Scrollbars>
      </div>
    );
  }
}
