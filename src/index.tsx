import * as React from 'react'
import * as ReactDOM from 'react-dom'
import {Button} from 'semantic-ui-react'
import {BrowserRouter, Route, Link} from 'react-router-dom'

import '!style-loader!css-loader!semantic-ui-css/semantic.min.css'

import MainContainer from './components/MainContainer/MainContainer'
import AddListingForm from './components/AddListingForm/AddListingForm'
import {Property} from './services/api'

import '!style-loader!css-loader!./index.css'


export const routes = {
  'home': {path: '/', component: () => <MainContainer property={property} />},
  'upload': {path: '/upload', component: AddListingForm}
}

let property: any|undefined

const rootComponent = (
  <BrowserRouter>
    <div>
      {Object.values(routes).map(r => <Route key={r.path} exact {...r}/>)}
    </div>
  </BrowserRouter>
)


async function init () {
  ReactDOM.render(rootComponent, document.getElementById('app'))
  // property = await Property.mockProperty()
  // ReactDOM.render(rootComponent, document.getElementById('app'))  
}

init()