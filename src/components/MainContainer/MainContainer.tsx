import * as React from 'react'
import * as ReactDOM from 'react-dom'
import {Link} from 'react-router-dom'
import {Button} from 'semantic-ui-react'

import * as styles from './MainContainer.css'
import * as logoImg from '../../assets/img/logo.png'

import {routes} from '../../'
import SearchBar from '../SearchBar/SearchBar'
import SearchResult from '../SearchResult/SearchResult'
import MapComponent, {Marker} from '../MapComponent/MapComponent'
import * as ApiService from '../../services/api'
import {BLR_COORD_LAT, BLR_COORD_LNG} from '../../constants'
import { Property } from '../../models'

// interface Property {
//   name: string;
//   address: string
// }

interface MainContainerState {
  results?: Property[]
  property?: Property
}

export default class MainContainer extends React.Component<any, MainContainerState> {

  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    // this.handleSearchChanged('')
    const property = ApiService.Property.mockProperty().then(property => {
      this.setState({property})
    })
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
        <div className={styles.headerSection}>
          <div className={styles.logoContainer}>
            <img className={styles.logo} src={logoImg} />
          </div>
          <div className={styles.searchContainer}>
            <SearchBar
              onSearchChange={this.handleSearchChanged}
              dropdown={false}
            />
          </div>
          <div className={styles.addListingButtonContainer}>
            <Link className={styles.addListingButton} to={routes.upload.path}>
              <Button>
                Add Listing
              </Button>
            </Link>
          </div>
        </div>

        {/* <div className={styles.resultsContainer}>
          {this.state.results &&
           this.state.results.map((p, i) => <SearchResult key={p.name+i} title={p.name} desc={p.address} />)}
        </div> */}

        <MapComponent
          defaultZoom={12}
          defaultCenter={{lat: BLR_COORD_LAT, lng: BLR_COORD_LNG}}
        >
          <Marker position={this.state.property && this.state.property.coords}/>
        </MapComponent>

      </div>
    )
  }
}
