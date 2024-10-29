import { Trade } from "./NewTradeForm";
import TradeListItem from "./TradeListIem";

interface TradeListProps {
    trades: Trade[]; // Define the type of the trades prop
  }
  
  export default function TradeList({ trades }: TradeListProps) {
    console.log(trades)
    return(
        <div className="flex-1 bg-card p-6 rounded-lg shadow-md my-5 text-text">
      <h1 className="font-bold text-xl text-text mb-4">All Trades</h1>
      {trades.length === 0 ? ( // Check if there are no trades
        <div>Nothing to show, add a new trade</div>
      ) : (
        <div>
           {trades.map((trade, index) => (
            <TradeListItem key={index} trade={trade} />
          ))}
        </div>
      )}
      </div>
    );
}