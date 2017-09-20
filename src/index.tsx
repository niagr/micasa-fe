import * as React from 'react'
import * as ReactDOM from 'react-dom'
import {Button} from 'semantic-ui-react'
import {BrowserRouter, Route, Link} from 'react-router-dom'

import '!style-loader!css-loader!semantic-ui-css/semantic.min.css'

import MainContainer from './components/MainContainer/MainContainer'
import AddListingForm from './components/AddListingForm/AddListingForm'

import '!style-loader!css-loader!./index.css'


export const routes = {
  'home': {path: '/', component: MainContainer},
  'upload': {path: '/upload', component: AddListingForm},
  '*': {path: '*', component: _ => <div>Fuck off</div>}
}

const rootComponent = (
  <BrowserRouter>
    <div>
      {Object.values(routes).map(r => <Route key={r.path} exact {...r}/>)}
    </div>
  </BrowserRouter>
)

ReactDOM.render(rootComponent, document.getElementById('app'))
