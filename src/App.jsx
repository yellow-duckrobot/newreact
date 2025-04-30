import React from "react";
import ProfileCard from "./Components/ProfileCard";
import ProductCard from "./Components/ProductCard";
import "./App.css";

const App = () => {
  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">User Dashboard</h1>

      <div className="grid-layout">
        <ProfileCard name="Ali" bio="Gamer" isOnline={true} />
        <ProfileCard name="Hamaz" isOnline={false} />

        <ProductCard title="Movie" price={2000} onSale={true} />
        <ProductCard title="Phone" price={9000} onSale={false} />
      </div>
    </div>
  );
};

export default App;