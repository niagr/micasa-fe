import * as React from 'react'
import * as ReactDOM from 'react-dom'
import {Button} from 'semantic-ui-react'
import {BrowserRouter, Route, Link} from 'react-router-dom'

import '!style-loader!css-loader!semantic-ui-css/semantic.min.css'

import MainContainer from './components/MainContainer/MainContainer'

import '!style-loader!css-loader!./index.css'

ReactDOM.render(
  <BrowserRouter>
    <div>
      <Link to={'/upload'}>Link</Link>
      <Route exact path="/" component={MainContainer}/>
      <Route path="/upload" component={() => <div> <h1>Upload Listing</h1></div>}/>
    </div>
  </BrowserRouter>
, document.getElementById('app'))
