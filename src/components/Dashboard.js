import { Link } from "react-router-dom";
import Stocks from "./stock-data";

function Dashboard(props) {
return (
    <div>
        
    {Stocks.map((stock, idx) => {
        const {name, symbol} = stock;
        return(
            <Link to={`/stocks/${symbol}`}>
            <h2>{name}({symbol})</h2>
            </Link>

        )
        })}
    </div>
    )

}

export default Dashboard;