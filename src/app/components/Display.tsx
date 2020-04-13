import * as React from 'react';
import { DisplayProps } from '../interfaces/Display';

export class Display extends React.PureComponent<DisplayProps, {}> {


  get exhibit() {
    return this._exhibit;
  }
  set exhibit(exhibit: JSX.Element) {

    this._exhibit = exhibit;
    this.forceUpdate();
  }
  private _exhibit: JSX.Element;

  componentDidMount() {
    this.props.curator.display = this;
  }


  render()  {
    return (
    <div className="Gallery__display">{this.exhibit}</div>
    );
  }

}
