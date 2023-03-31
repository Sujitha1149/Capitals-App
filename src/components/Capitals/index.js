import {Component} from 'react'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

class Capitals extends Component {
  state = {
    countryId: countryAndCapitalsList[0].id,
    country: countryAndCapitalsList[0].country,
  }

  onChangingCapital = event => {
    const item = countryAndCapitalsList.filter(
      eachItem => eachItem.id === event.target.value,
    )
    console.log(item[0].country)
    this.setState({
      countryId: event.target.value,
      country: item[0].country,
    })
  }

  render() {
    const {country, countryId} = this.state

    return (
      <div className="bg-container">
        <div className="card-bg">
          <h1>Countries And Capitals</h1>
          <form>
            <select
              id="drop-menu-capital"
              className="drop-select"
              onChange={this.onChangingCapital}
              value={countryId}
            >
              {countryAndCapitalsList.map(eachItem => (
                <option value={eachItem.id} key={eachItem.id}>
                  {eachItem.capitalDisplayText}
                </option>
              ))}
            </select>
            <label htmlFor="drop-menu-capital">
              is capital of which country?
            </label>
          </form>

          <h1>{country}</h1>
        </div>
      </div>
    )
  }
}
export default Capitals
