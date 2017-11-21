import * as React from 'react'
import * as ReactDOM from 'react-dom'
import {compose, withProps, withState, withHandlers} from 'recompose'
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  GroundOverlay
} from 'react-google-maps'

import * as styles from './MapComponent.css'


const MapComponent = compose<any, any>(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div className={styles.containerElement} />,
    mapElement: <div className={styles.mapElement} />,
  }),
  withScriptjs,
  withGoogleMap
)(props => <GoogleMap {...props}/>)

export default MapComponent
export {Marker} from 'react-google-maps'