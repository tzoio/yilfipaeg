import * as React from 'react';

export class CardList extends React.PureComponent {

  render() {
    const placeholder = require('../../assets/images/placeholder.png');
    return (
      <div className="CardList">

        <div className="Card">
          <div className="Card__header">
            <img src={placeholder} alt="" className="Card__image"/>
            <h1 className="Card__title">Card Title</h1>
            <p className="Card__subtitle">This is the subtitle</p>
          </div>
          <p className="Card__body">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>

        <div className="Card">
          <div className="Card__header">
            <h1 className="Card__title">Card Title</h1>
            <p className="Card__subtitle">This is the subtitle</p>
            <img src={placeholder} alt="" className="Card__image" />
          </div>
          <p className="Card__body">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>

        <div className="Card">
          <div className="Card__header">
            <h1 className="Card__title">Card Title</h1>
            <p className="Card__subtitle">This is the subtitle</p>
            <img src={placeholder} alt="" className="Card__image Card__image--full" />
          </div>
          <p className="Card__body">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
      </div>
    );
  }
}
