import * as React from 'react';
export class Form extends React.Component {
  render () {
    return (
      <React.Fragment>

        <div className="FormControl__group">
          <label className="FormControl__label">Input Text</label>
          <input type="text" className="FormControl__input" placeholder="This is a placeholder"/>
        </div>

        <div className="FormControl__group">
          <label className="FormControl__label">Textarea</label>
          <textarea className="FormControl__textarea" >This is pure text</textarea>
        </div>

        <div className="FormControl__group">
          <label className="FormControl__label">Radio Buttons</label>
          <div className="FormControl__radio">
            <input type="radio" className="FormControl__radio__input" name="radio"/>
            <label className="FormControl__radio__label">First Radio Button</label>
          </div>
          <div className="FormControl__radio">
            <input type="radio" className="FormControl__radio__input" name="radio"/>
            <label className="FormControl__radio__label">Second Radio Button</label>
          </div>
        </div>

        <div className="FormControl__group">
          <label className="FormControl__label">Selection</label>
          <select className="FormControl__select">
            <option value="0">Option Zero</option>
            <optgroup label="SubGroup">
              <option value="f1">First Option</option>
              <option value="s2">Second Option</option>
            </optgroup>
            <option value="t3">Third Option</option>
          </select>
        </div>

        <div className="FormControl__group">
          <label className="FormControl__label">Example Number</label>
          <input type="number" className="FormControl__number"/>
        </div>

        <div className="Button__group">
          <button className="Button">One Button</button>
          <button className="Button Button--outlined">Second Button</button>
        </div>
      </React.Fragment>

    );
  }
}
