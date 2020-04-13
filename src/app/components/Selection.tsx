import * as React  from 'react';

export class Selection extends React.Component {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}
