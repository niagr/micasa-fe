import * as React from 'react'
import * as ReactDOM from 'react-dom'
import {Link} from 'react-router-dom'
import {Button} from 'semantic-ui-react'

import * as styles from './MainContainer.css'

import SearchBar from '../SearchBar/SearchBar'
import SearchResult from '../SearchResult/SearchResult'
import * as ApiService from '../../services/api'

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
    const resp = await ApiService.Property.getForNameOrAddess(text)
    const results: Property[] = await resp.json()
    this.setState({
      results: results //.map(p => ({title: p.name, description: p.address}))
    })
  }

  render() {
    return (
      <div className={styles.container}>
        <Link className={styles.addListingButton} style={{color: 'black'}} to="/upload"> 
          <Button>
            Add Listing 
          </Button>
        </Link>
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
