// Write your code here
import {Component} from 'react'
import DestinationItem from '../DestinationItem/index'

import './index.css'

class DestinationSearch extends Component {
  state = {
    searchInput: '',
  }

  onChangeSearchInput = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  render() {
    const {searchInput} = this.state
    const {destinationsList} = this.props
    const searchResults = destinationsList.filter(eachItem =>
      eachItem.name.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return (
      <div className="app-container">
        <h1 className="title">Destination Search</h1>
        <div className="search-input-container">
          <input
            type="search"
            placeholder="Search"
            onChange={this.onChangeSearchInput}
            value={searchInput}
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
            alt="search icon"
            className="search-icon"
          />
        </div>
        <ul className="list-container">
          {searchResults.map(eachItem => (
            <DestinationItem
              destinationDetails={eachItem}
              key={eachItem.uniqueNo}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default DestinationSearch
