import {API_PROPERTY_URL} from '../constants'

export namespace Property {

  export async function getForNameOrAddess(nameOrAddess: string) {
    return fetch(API_PROPERTY_URL + '?name=' + nameOrAddess)
  }

}
