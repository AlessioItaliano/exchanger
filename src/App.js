import ActionButton from "components/ActionButton";
import CryptoAmount from "components/CryptoAmount";
import Receive from "components/Receive";

const ws = new WebSocket("wss://fstream.binance.com");

function App() {
  console.log(ws);
  return (
    <div>
      <CryptoAmount />
      <ActionButton />
      <Receive />
    </div>
  );
}

export default App;

// import React, { useEffect } from "react";

// function App() {
//   useEffect(() => {
//     const ws = new WebSocket("wss://fstream.binance.com/ws/ethusdt@trade");

//     ws.onopen = () => {
//       console.log("WebSocket connected");
//     };

//     ws.onmessage = (event) => {
//       const data = JSON.parse(event.data);
//       console.log("Received data:", data);
//       // Process the incoming data here
//     };

//     ws.onclose = () => {
//       console.log("WebSocket disconnected");
//     };

//     return () => {
//       // Clean up WebSocket connection when component unmounts
//       ws.close();
//     };
//   }, []); // Run this effect only once on component mount

//   return (
//     <div>
//       <p>ciao</p>
//     </div>
//   );
// }

// export default App;
