import { useEffect, useState } from "react";
// import { useDispatch } from "react-redux";
// import { useSelector } from "react-redux";
// import { fetchTickers } from "./redux/tickers/fetchTickers";
import { io } from "socket.io-client";
import TickersList from "./components/TickersList";

function App() {
  const [tickers, setTickers] = useState([]);

  useEffect(() => {
    const socket = io("http://localhost:4000");
    socket.emit("start");
    socket.on("ticker", function (data) {
      console.log(data);
      setTickers(data);
    });
  }, []);

  return <div>{tickers.length !== 0 && <TickersList tickers={tickers} />}</div>;
}

export default App;
