import * as React from 'react';
import { Display } from '../components/Display';
export class Curator {


  get display(): Display {
    return this._display;
  }
  set display(display: Display) {
    this._display = display;
  }
  private _display: Display;

  constructor() { }

  changeExhibit(exhibit: JSX.Element) {
    console.log('changeExhibit')
    this.display.exhibit = exhibit;
  }
}
