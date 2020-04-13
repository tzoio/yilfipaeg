import * as React from 'react';

export class Card extends React.PureComponent {

  render() {
    return (
      <div className="Card">
        <div className="Card__header">
          <p className="Card__title">Card Example</p>
          <img src="" alt="" className="Card__image"/>
        </div>
        <p className="Card__body">This is a card body</p>
      </div>
    );
  }
}
