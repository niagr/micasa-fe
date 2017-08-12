import * as React from 'react'
import * as ReactDOM from 'react-dom'
import {Button} from 'semantic-ui-react'
import {BrowserRouter, Route, Link} from 'react-router-dom'

import '!style-loader!css-loader!semantic-ui-css/semantic.min.css'

import MainContainer from './components/MainContainer/MainContainer'

import '!style-loader!css-loader!./index.css'

const mainPage = () => <MainContainer/>

const uploadPage = () => <div> <h1>Upload</h1></div>

const rootComponent = (
  <BrowserRouter>
    <div>
      <Link to={'/upload'}>Link</Link>
      <Route exact path="/" component={mainPage}/>
      <Route path="/upload" component={uploadPage}/>
    </div>
  </BrowserRouter>
)

ReactDOM.render(rootComponent, document.getElementById('app'))
