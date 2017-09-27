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

import {BLR_COORD_LAT, BLR_COORD_LNG} from '../../constants'

const MapComponent = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div className={styles.containerElement} />,
    mapElement: <div className={styles.mapElement} />,
  }),
  withState('zoom', 'onZoomChange', 8),
  withHandlers(() => {
    const refs: {map?: any} = {
      map: undefined,
    }

    return {
      onMapMounted: () => ref => {
        refs.map = ref
      },
      onZoomChanged: ({ onZoomChange }) => () => {
        onZoomChange(refs.map && refs.map.getZoom())
      }
    }
  }),
  withScriptjs,
  withGoogleMap
)(props =>
  <GoogleMap
    defaultZoom={12}
    defaultCenter={{lat: BLR_COORD_LAT, lng: BLR_COORD_LNG}}
  >

  </GoogleMap>
)

export default MapComponent