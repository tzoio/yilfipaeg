import * as React from 'react';
import { CardList } from './exhibits/CardList';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { Selection } from './components/Selection';
import { Form } from './exhibits/Form';


export class App extends React.Component<{}, {}> {

  render() {

    return (
      <Router >
        <div className="Gallery Page">
          <Selection/>

          <Switch>
            <Route path="/card-list">
              <React.Fragment>
                <h1 className="Page__title">CardList</h1>
                <CardList/>
              </React.Fragment>

            </Route>
            <Route path="/form">
              <React.Fragment>
                <h1 className="Page__title">Form</h1>
                <Form />
              </React.Fragment>

            </Route>
          </Switch>
        </div>
      </Router>
      );
    }
  }

  // <div className="Gallery Section">
  //   <Selection>
  //     <ExhibitItem
  //       name="CardList"
  //       iconPath={require('../assets/images/cardlist.png')}
  //       curator={curator}
  //       component={React.createElement(CardList)}/>
  //   </Selection>
  //   <Display curator={curator}>

  //   </Display>
  // </div>
