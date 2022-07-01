import "./App.css";
import React from "react";
import Card from "./components/Card";
import { getStays } from "./data";

export default function App() {
  let stays = getStays();
  return (
    <div className="app">
      <header className="app-header">
        <h1>Le rêve visite</h1>
      </header>
      <h2>World-wide</h2>
      <button>Change user</button>
      <button onClick={() => {
    let welcomeMessage = document.getElementById("welcomeMessage");
    let username = prompt("Please enter your name.");
    localStorage.setItem("name", username);
    welcomeMessage.textContent = "Welcome, " + username;
    
console.log('Hello')}}>Click me</button>
      <p id="welcomeMessage">
        Hello people of the world. Welcome to our wonderful website!!!
      </p>

      <h3>Stays</h3>




      <div className="container">
        {stays.map((stay) => {
          return (
            <Card
              key={stay.id}
              id={stay.id}
              name={stay.name}
              description={stay.description}
              img={stay.img}
              rating={stay.rating}
            />
          );
        })}
      </div>
    </div>
  );
}
