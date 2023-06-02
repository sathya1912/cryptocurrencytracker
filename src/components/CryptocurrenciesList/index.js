import {Component} from 'react'

import CryptocurrencyItem from '../CryptocurrencyItem'

import './index.css'

class CryptocurrencyList extends Component {
  renderCryptocurrenciesHeader = () => {
    ;<div>
      <p>Coin Type</p>
      <div>
        <p>USD</p>
        <p>EURO</p>
      </div>
    </div>
  }

  renderCrytpocurrenciesView = () => {
    const {cryptocurrenciesData} = this.props

    return (
      <div data-testid="loader">
        {this.renderCryptocurrenciesHeader()}
        <ul>
          {cryptocurrenciesData.map(eachCryptocurrency => (
            <CryptocurrencyItem
              key={eachCryptocurrency.id}
              cryptocurrencyDetails={eachCryptocurrency}
            />
          ))}
        </ul>
      </div>
    )
  }

  render() {
    return (
      <div data-testid="loader">
        <h1>Cryptocurrency Tracker</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
          alt="cryptocurrency"
        />
        {this.renderCrytpocurrenciesView()}
      </div>
    )
  }
}
export default CryptocurrencyList
