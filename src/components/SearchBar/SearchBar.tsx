import * as React from 'react'
import * as ReactDOM from 'react-dom'
import {Search, SearchProps, SearchResultProps} from 'semantic-ui-react'

const ESC_KEYCODE = 27

interface Property {
  name: string;
  address: string
}

export interface SearchBarProps {
  onSearchChange?: (text: string) => void
  results?: SearchResultProps[]
  dropdown?: boolean
  
}

interface SearchBarState {
  searchText?: string
  results?: SearchResultProps[]
}

export default class SearchBar extends React.Component<SearchBarProps, SearchBarState> {

  constructor (props: any) {
    super(props)
    this.state = {}
  }

  handleSearchChange = async (searchText?: string) => {
    this.props.onSearchChange && this.props.onSearchChange(searchText || "")
    this.setState({
      searchText: searchText,
    })
  }

  handleOnKeyDown = (event: React.KeyboardEvent<SearchBar>) => {
    if (event.keyCode === ESC_KEYCODE) {
      this.setState({searchText: ''}, () => this.handleSearchChange(this.state.searchText))
    }
  }

  render () {
    return (
      <div>
        <Search
          value={this.state.searchText}
          fluid 
          input={{fluid: true}} 
          placeholder="Search for homes"
          onSearchChange={(ev, data) => this.handleSearchChange(data.value)}
          open={this.props.dropdown && !!this.state.searchText}
          results={this.props.results}
          onKeyDown={this.handleOnKeyDown}
        />
      </div>
    )
  }

}
