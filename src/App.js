import { useState, useEffect } from "react";
import Card from "./components/Card";
import Header from "./components/Header";

const App = () => {

  const [deals, setDeals] = useState(null);

  const getDeals = async() => {
    try{
      const response = await fetch("http://localhost:8000/deals", {method: "GET"})
      const data = await response.json()
      setDeals(data);
    }
    catch(err){
      console.error(err)
    }
  }
  
  useEffect(() => {
    getDeals();
  }, [])

  return (
    <div className="app">
      <Header />
      <nav>
        <button className="primary">Amazon</button>
        <button className="primary" disabled>Aliexpress</button>
        <button className="primary" disabled>eBay</button>
        <button className="primary" disabled>Etsy</button>
      </nav>

      <div>
        <h2>
          Best Deal!
        </h2>
        <div className="feed">
          {deals?.map(deal => <Card key={deal.pos} item={deal} />)}
        </div>
      </div>
    </div>
  );
}

export default App;
