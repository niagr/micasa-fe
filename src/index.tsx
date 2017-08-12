import * as React from 'react'
import * as ReactDOM from 'react-dom'
import {Button} from 'semantic-ui-react'
import {BrowserRouter, Route, Link} from 'react-router-dom'

import '!style-loader!css-loader!semantic-ui-css/semantic.min.css'

import MainContainer from './components/MainContainer/MainContainer'
import AddListingForm from './components/AddListingForm/AddListingForm'

import '!style-loader!css-loader!./index.css'

const mainPage = () => <MainContainer/>

const uploadPage = () => <AddListingForm/>

const rootComponent = (
  <BrowserRouter>
    <div>
      <Route exact path="/" component={mainPage}/>
      <Route path="/upload" component={uploadPage}/>
    </div>
  </BrowserRouter>
)

ReactDOM.render(rootComponent, document.getElementById('app'))
