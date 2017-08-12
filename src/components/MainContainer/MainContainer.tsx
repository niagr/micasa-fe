import * as React from 'react'
import * as ReactDOM from 'react-dom'

import * as styles from './MainContainer.css'

import SearchBar from '../SearchBar/SearchBar'
import SearchResult from '../SearchResult/SearchResult'
import {API_PROPERTY_URL} from '../../constants'

interface Property {
  name: string;
  address: string
}

interface MainContainerState {
  results?: Property[]
}

export default class MainContainer extends React.Component<any, MainContainerState> {

  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    this.handleSearchChanged('')
  }

  handleSearchChanged = async (text: string) => {
    const resp = await fetch(API_PROPERTY_URL + '?name=' + text)
    const results: Property[] = await resp.json()
    this.setState({
      results: results //.map(p => ({title: p.name, description: p.address}))
    })
  }

  render() {
    return (
      <div className={styles.container}>
        <div className={styles.searchContainer}>
          <SearchBar 
            onSearchChange={this.handleSearchChanged}
            dropdown={false}
          />
        </div>

        <div className={styles.resultsContainer}>
          {this.state.results && 
           this.state.results.map((p, i) => <SearchResult key={p.name+i} title={p.name} desc={p.address} />)}
        </div>
      </div>
    )
  }
}
