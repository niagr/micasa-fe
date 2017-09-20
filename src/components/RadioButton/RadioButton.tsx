import * as React from 'react'
import * as ReactDOM from 'react-dom'
import {Form, Button, TextArea, Input} from 'semantic-ui-react'


interface RadioButtonGroupProps {
  label: string
  options: string[]
  onChange?: (newSelection: string) => void
}

interface RadioButtonGroupState {
  selected?: string
}

export default class RadioButtonGroup extends React.Component<RadioButtonGroupProps, RadioButtonGroupState> {

  constructor (props) {
    super(props)
    this.state = {}
  }

  handleOnChange = (newSelection) => {
    this.setState({selected: newSelection})
    this.props.onChange && this.props.onChange(newSelection)
  }

  mapOptionsToRadioElems = () =>
    this.props.options.map((option, i) => 
      <Form.Radio 
        key={i}
        label={option.charAt(0).toUpperCase() + option.slice(1)} 
        value={option}
        checked={this.state.selected === option}
        onChange={(ev, {value}) => this.handleOnChange(value)}
      />
    )

  render () {
    return (
      <Form.Group inline>
        <label>{this.props.label}</label>
        {this.mapOptionsToRadioElems()}
      </Form.Group>
    )
  }

}

