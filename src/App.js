// import logo from "./logo.svg";
import axios from "axios";
import { useEffect } from "react";
import "./App.css";
import WilderCard from "./components/WilderCard";
// import wildersArray from "./wildersArray.js";
import { useState } from "react";
import AddWilderForm from "./components/AddWilderForm";

function App() {
  const [wilders, setWilders] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      const wilders = await axios.get("http://localhost:5000/api/wilders");
      console.log(wilders.data);
      setWilders(wilders.data);
    };

    fetch();
  });
  return (
    <div className="App">
      <div>
        <header>
          <div className="container">
            <h1>Wilders Book</h1>
          </div>
        </header>
        <main className="container">
          <h2>Wilders</h2>
          <section className="card-row">
            {wilders.map((wilder) => {
              return (
                <WilderCard
                  key={wilder.id}
                  name={wilder.name}
                  upvotes={wilder.upvotes}
                />
              );
            })}
          </section>
          <AddWilderForm />
        </main>
        <footer>
          <div className="container">
            <p>&copy; 2022 Wild Code School</p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
