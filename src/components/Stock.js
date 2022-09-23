import React from 'react'
import Stocks from './stock-data';



function Stock(props) {
    // I found this filter line in the example, unsure of how else to tackle this since we mostly had practice with API's.
    const stock = props.stocks.filter( d => d.symbol === props.match.params.symbol)[0]
    return(
        <div>
        <h2>Name: {stock.name}</h2>
        <h2>Price: {stock.lastPrice}</h2>
        </div>
    )
}

export default Stock;