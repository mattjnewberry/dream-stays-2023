import "./App.css";
import React from "react";
import Card from "./components/Card";
import {getStays} from "./data";

export default function App() {
    let stays = getStays();
    return (
        <div className="app">
            <header className="app-header">
                <h1>London Hotels</h1>
                <h3>Swag London Hotels for Swag Persons</h3>
            </header>
            <h2>Our Hotels:</h2>
            <button onClick = {() => {
                let welcomeMessage = document.getElementById("welcomeMessage");
                let username = prompt("Please enter your name.");
                localStorage.setItem("name", username);
                welcomeMessage.textContent = "Welcome our swaggiest customer, " + username;

console.log ("Hello")}}>Log in</button>
    <p id="welcomeMessage">
        Are you even swag enough to travel?
    </p>
            <div className="container">
                {stays.map((stay) => {
                   

                    return <Card
                        key={stay.id}
                        id={stay.id}
                        name={stay.name}
                        price={stay.price}
                        description={stay.description}
                        nearby={stay.nearby[0]}
                        img={stay.img}
                    
                    />
                })}
            </div>
        </div>
    );
}
 <div className="footer"></div>

