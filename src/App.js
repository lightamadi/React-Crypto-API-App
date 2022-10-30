import "./styles.css";

// Use this API
// https://api2.binance.com/api/v3/ticker/24hr

// symbols we want...
// BTCUSDT (Bitcoin)
// ETHUSDT (Ethereum)
// SOLUSDT (Solana)
// ADAUSDT (Cardano)
// DOGEUSDT (DogeCoin)

export default function App() {
  // 1. STATE AND USEEFFECT HERE

  // 2. How will you "Pull out" the symbols we need?

  // 3. ...and then store them in state?

  return (
    <div className="App">
      <nav>
        <img
          alt="logo"
          src="https://assets.codepen.io/6060109/crypto-logo-secondary.png"
        />
        <input type="text" placeholder="Search" />
      </nav>
      <div className="main-content">
        <h2>Today's cryptocurrency prices</h2>
        <table>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Price</th>
            <th>24h %</th>
          </tr>
          {/* 3. Display data here... */}
          {/* HINT: Map to JSX */}

          {/* Up? Green + ▲ */}
          {/* Down? Red + ▼ */}
          <tr>
            <td>1</td>
            <td>Bitcoin</td>
            <td>$40,000</td>
            <td style={{ color: "green" }}>▲1.02%</td>
          </tr>
        </table>
        <div className="bottom-logo-ctr">
          <img
            className="bottom-logo"
            alt="logo"
            src="https://assets.codepen.io/6060109/crypto-logo-primary.png"
          />
        </div>
      </div>
    </div>
  );
}
