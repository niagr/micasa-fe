import * as React from 'react'
import * as ReactDOM from 'react-dom'
import {Form, Button} from 'semantic-ui-react'

import * as styles from './AddListingForm.css'

export default class AddListingForm extends React.Component {

  render () {
    return (
      <div className={styles.container}>
        <Form>
          <Form.Field className={styles.nameField}>
            <label>Name</label>
            <input/>
          </Form.Field>
          <Form.Field>
            <label>Address</label>
            <textarea/>
          </Form.Field>
          <Form.Field><Button>Submit</Button></Form.Field>
        </Form>
      </div>
    )
  }

}