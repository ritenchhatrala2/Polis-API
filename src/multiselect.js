import React, {PropTypes, Component} from 'react';
import Select from 'react-select';

const fruits = [
    { label: 'Banana', value: '1' },
    { label: 'Apple', value: '2' },
    { label: 'Mango', value: '3' },
    { label: 'Goa', value: '4' },
    { label: 'Grapes', value: '5' },
    { label: 'Pine Apple', value: '6' },
];

export default class MultiSelectField extends Component {
  constructor(props) {
    super(props);
    this.state = {
      crazy: false,
      value: [],
    };
    this.handleSelectChange = this.handleSelectChange.bind(this);
  }

  handleSelectChange(value) {
    console.log('You have selected: ', value);
    this.setState({ value });
  }

  static propTypes = {
    label: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.array,
      PropTypes.object,
    ])
  }

  render () {
        return (
            <div className="section">
                <h3 className="section-heading">{this.props.label}</h3>
                <Select multi joinValues value={this.state.value} placeholder="Select your favourite(s)" options={fruits} onChange={this.handleSelectChange} />
            </div>
        );
    }
}