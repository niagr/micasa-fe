import * as React from 'react'
import * as ReactDOM from 'react-dom'

import {Header} from 'semantic-ui-react'

import * as styles from './SearchResult.css'
import * as homeImg from '../../assets/img/home.png'

interface SearchResultProps {
  title: string
  desc: string
}

const SearchResult = (props: SearchResultProps) => (
  <div className={styles.mainContainer}>
    <img className={styles.poster} src={homeImg} />
    <div>
      <Header>{props.title}</Header>
      <p>{props.desc}</p>
    </div>
  </div>
)

export default SearchResult