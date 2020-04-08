import * as React from 'react';
import {Component, MouseEvent, KeyboardEvent} from 'react';
import {Line} from './Line';

export interface EditorProps {}

export class Editor extends Component<EditorProps, {lines: JSX.Element[], focused: Line}> {

  constructor(props: EditorProps) {
    super(props);

    this.state = {
      lines: [],
      focused: null
    }

    this._handleKeyDown = this._handleKeyDown.bind(this);
  }

  componentDidMount() { }

  render() {
    return (
      <div
        contentEditable
        className="Page"
        onClick={(e) => this._handleClick(e)}
        onKeyDown={this._handleKeyDown}>
          {this.state.lines}
        </div>
    );
  }

  _handleClick(e: MouseEvent) {

    this._updateFocus({ type: 'click', data: e.pageY })

  }

  _handleKeyDown(e: KeyboardEvent) {

    switch (e.key) {

      case 'Enter':
      case 'Tab':
        this._keyWhiteSpace(e);
        break;
      case 'ArrowDown':
        e.preventDefault();
        // this._updateFocus({ type: 'arrow-down' })
        break;
      default:
        // this.updateValue(e.key);
        break;
    }
  }

  // change isLast property
  _addLines(qty: number) {
    const lines = this.state.lines;

    for (; qty > 0; qty--)
      lines.push(<Line key={lines.length -1} />);

    this.setState({lines});
  }

  _updateFocus(p: {type: string, data?: any}) {

    switch (p.type) {
      case 'click':

        break;

      case 'arrow-down':

        break;
    }

  }

  // params clickY: where in the Y axis the click occoured
  // returns LineHandler
  // _closestLine(clickY) {

  //   const prev = {elm: null, diff: null};

  //   for (let i = 0; i < this.state.lines.length; i++) {
  //     const line = this.state.lines[i];
  //     const lineY = line.ref.current.offsetTop + (line.ref.current.offsetHeight/2);
  //     const curDiff = Math.abs(lineY - clickY);

  //     if (prev.elm != null && curDiff > prev.diff) {
  //       return LineHandler(line, false, --i); // prev
  //     } else if (prev.elm != null && curDiff == prev.diff) {
  //       return LineHandler(line, false, i); // cur
  //     } else if (i == this.state.lines.length -1) {
  //       return LineHandler(line, true, i); //cur
  //     } else {

  //       prev.elm = line;
  //       prev.diff = curDiff;
  //     }
  //   }
  // }


  _keyWhiteSpace(e: KeyboardEvent) {

    switch (e.key) {
      case 'Tab':
        // this.updateValue('&#x9;');
        break;

      case 'Enter':
        // if (this.state.focused.isLast)
        //   console.log('Is last')
        // else
        //   console.log('Is not last')
        break;
    }

  }


}
