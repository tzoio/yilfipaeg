import * as React from 'react';
import { ExhibitItemProps, ExhibitItemState } from '../interfaces/ExhibitItem';

export class ExhibitItem extends React.Component<ExhibitItemProps, ExhibitItemState> {

  constructor(props: ExhibitItemProps) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.curator.changeExhibit(this.props.component);
  }

  render() {
    return (
    <div onClick={this.handleClick}>
      <figure>
        <figcaption>{this.props.name}</figcaption>
        <img src={this.props.iconPath} alt={this.props.name}/>
      </figure>

    </div>);

  }

}
