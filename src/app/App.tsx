import * as React from 'react';
import { Selection } from './components/Selection';
import { Display } from './components/Display';
import { Curator } from './services/Curator';
import { ExhibitItem } from './components/ExhibitItem';
import { Card } from './exhibits/Card';


export class App extends React.Component<{}, {}> {

  render() {
    const curator = new Curator();

    return (
      <div className="Gallery">
        <Selection>
          <ExhibitItem name=" " iconPath=" " curator={curator} component={React.createElement(Card)}/>
        </Selection>
        <Display curator={curator}>

        </Display>
      </div>
      );
  }
}

