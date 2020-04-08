import * as React from 'react';

export interface LineProps {

}

export class Line extends React.Component<LineProps, {}> {

  constructor(props: LineProps) {
    super(props);

    this.onFocus = this.onFocus.bind(this);
  }

  onFocus(e: React.SyntheticEvent) {
    console.log(e);
  }

  render() {
    return (
      <p className="Editor__line" onFocus={this.onFocus}></p>
    )
  }
}
