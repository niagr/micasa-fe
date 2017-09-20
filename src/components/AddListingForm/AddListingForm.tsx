import * as React from 'react'
import * as ReactDOM from 'react-dom'
import {Form, Button, TextArea, Input} from 'semantic-ui-react'

import * as styles from './AddListingForm.css'

import RadioButtonGroup from '../RadioButton/RadioButton'
import {range} from '../../services/util'

interface ListingFormFields {
  preferredTenantType?: string
  numberOfBathrooms?: string
}

interface AddListingFormState {
  form: ListingFormFields
}

export default class AddListingForm extends React.Component<{}, AddListingFormState> {

  constructor (props) {
    super(props)
    this.state = {form: {}}
  }

  handleFormChanged = (field: keyof ListingFormFields, newSelection: string) => {
    this.setState({
      form: {
        ...this.state.form, 
        [field]: newSelection
      }
    })
  }

  render () {
    return (
      <div className={styles.container}>
        <Form>
          <Form.Field className={styles.nameField} label="Name" control={Input} />
          <Form.Field label="Address" control={TextArea} />
          <Form.Field inline label="Rent" control={Input} />
          <Form.Field inline label="Deposit" control={Input} />
          <RadioButtonGroup label="Preferred Tenant Type" options={['bachelors', 'family']} />
          <RadioButtonGroup label="Guests Allowed" options={['yes', 'no']} />
          <RadioButtonGroup
            label="Number of bathrooms"
            options={['0', '1', '2', '3', '4']} 
            onChange={(value) => this.handleFormChanged("numberOfBathrooms", value)} 
          />
          {range(this.state.form.numberOfBathrooms || 0).map(i => 
            <RadioButtonGroup 
              key={`bathroom-${i}`} 
              label={`Type of toilet in bathroom ${i+1}`} 
              options={['western', 'indian']} 
            />
          )}
          <Form.Field><Button>Submit</Button></Form.Field>
        </Form>
      </div>
    )
  }

}
