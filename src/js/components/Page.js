import React, { Component } from 'react';

export default class Page extends Component {

  constructor(props) {
    super(props);

    this.state = {
      lines: [],
      focused: null
    }

    this.ref = React.createRef();
    this._handleKeyDown = this._handleKeyDown.bind(this);
  }

  componentDidMount() {

    this._addLines(this.props.numLines);
  }

  render() {
    return (
      <div
        ref={this.ref}
        contentEditable
        className="Page"
        onClick={(e) => this._handleClick(e)}
        onKeyDown={this._handleKeyDown}>
          {this.state.lines}
        </div>
    );
  }

  _handleClick(e) {

    this._updateFocus({ type: 'click', data: e.pageY })

  }

  _handleKeyDown(e) {

    switch (e.key) {

      case 'Enter':
      case 'Tab':
        this._keyWhiteSpace(e);
        break;
      case 'ArrowDown':
        e.preventDefault();
        this._updateFocus({ type: 'arrow-down' })
        break;
      default:
        // this.updateValue(e.key);
        break;
    }
  }

  // change isLast property
  _addLines(qty) {
    const lines = this.state.lines;

    for (; qty > 0; qty--)
      lines.push(<Line key={lines.length -1} />);

    this.setState({lines});
  }

  _updateFocus({type, data}) {

    switch (type) {
      case 'click':
        const focused = this._closestLine(data);
        this.setState({ focused });

        break;

      case 'arrow-down':
        const curr = this.state.focused;

        if (!curr.isLast) {
          const next = LineHandler(this.state.lines[curr.id + 1], curr.id +1 == this.state.lines.length -1 , curr.id +1);
          this.setState({focused: next});

        } else {
          console.log('Last LineHandler');
        }

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


  _keyWhiteSpace(e) {

    switch (e.key) {
      case 'Tab':
        // this.updateValue('&#x9;');
        break;

      case 'Enter':
        if (this.state.focused.isLast)
          console.log('Is last')
        else
          console.log('Is not last')
        break;
    }

  }


}

class Line extends Component {

  constructor(props) {
    super(props);

    // this.onFocus = this.onFocus.bind(this);
  }

  render() {
    return (
      <p className="Page__line" onFocus={this.onFocus}></p>
    )
  }
}

function LineHandler(line, isLast, id) {
  return {
    line,
    isLast,
    id,
  };
}
