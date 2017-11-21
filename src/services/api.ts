import {API_PROPERTY_URL} from '../constants'
import {Property as IProperty} from '../models'

export namespace Property {

  export async function getForNameOrAddess(nameOrAddess: string) {
    return fetch(API_PROPERTY_URL + '?name=' + nameOrAddess)
  }

  export async function mockProperty(): Promise<IProperty> {
    return {
      name: "Nishant's Place",
      address: '52/2 2nd Cross, Muneswara Nagar, HSR Layout Sector 6',
      coords: {lat: 12.911560, lng: 77.628397},
      images: [],
      posterImage: ''
    }
  }

}
