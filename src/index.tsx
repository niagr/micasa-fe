import * as React from 'react'
import * as ReactDOM from 'react-dom'
import {Button} from 'semantic-ui-react'

import '!style-loader!css-loader!semantic-ui-css/semantic.min.css'

import MainContainer from './components/MainContainer/MainContainer'

ReactDOM.render(<MainContainer>Hello</MainContainer>, document.getElementById('app'))
