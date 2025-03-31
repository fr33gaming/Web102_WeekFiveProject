import React from "react";
import { useState } from "react";
import SideNav from "./SideNav";

const CatCard = () => {

    const [currentImage, setCurrentImage] = useState(null);
    const [currentBreed, setCurrentBreed] = useState("");
    const [currentWeight, setCurrentWeight] = useState("");
    const [currentOrigin, setCurrentOrigin] = useState("");
    const [currentLifeSpan, setCurrentLifeSpan] = useState("");

    const [previousCats, setPreviousCats] = useState([]);

    const API_KEY = import.meta.env.VITE_APP_API_KEY;

    const catNames = [
        "Lily",
        "Oliver",
        "Milo",
        "Leo",
        "Charlie",
        "Max",
        "Bella",
        "Lucy",
        "Daisy",
        "Chloe",
        "Sophie",
        "Luna",
        "Coco",
        "Nala",
        "Mittens",
        "Shadow"];

    const getBreed = async () => {
        const response = await fetch("https://api.thecatapi.com/v1/images/search?limit=1&has_breeds=1&api_key=" + API_KEY);
        const data = await response.json();
        console.log("Filtered Data:", data); // Log only the first item
        console.log("Image URL:", data[0].url); // Log the image URL
        setCurrentImage(data[0].url); // Set the first image
        setCurrentBreed(data[0].breeds[0].name); // Set the breed name
        setCurrentWeight(data[0].breeds[0].weight.imperial); // Set the weight   
        setCurrentOrigin(data[0].breeds[0].origin); // Set the origin
        setCurrentLifeSpan(data[0].breeds[0].life_span); // Set the life span
        console.log("Breed Name:", data[0].breeds[0].name); // Log the breed name
        console.log("Weight:", data[0].breeds[0].weight.imperial); // Log the weight
        console.log("Origin:", data[0].breeds[0].origin); // Log the origin
        console.log("Life Span:", data[0].breeds[0].life_span); // Log the life span

        //setPreviousCats((prevCats) => [...prevCats, { image: data[0].url, breed: data[0].breeds[0].name, origin: data[0].breeds[0].origin }]);

    }

    const getRandomCatName = () => {
        const randomIndex = Math.floor(Math.random() * catNames.length);
        return catNames[randomIndex];
    }

    const handleClick = () => {

        getBreed();

        if (currentImage) {
            setPreviousCats((prevCats) => [...prevCats, { image: currentImage, breed: currentBreed, origin: currentOrigin }]);
        }
        document.querySelector(".cat-card").style.display = "block";
    }

    const handleBreedBan = () => {

        const banList = document.querySelector(".ban-list");
        const newButton = document.createElement("button");
        newButton.className = "attribute";
        newButton.id = "banned";
        newButton.innerText = currentBreed;
        banList.appendChild(newButton);      
        
    } 

    const handleWeightBan = () => {
        const banList = document.querySelector(".ban-list");
        const newButton = document.createElement("button");
        newButton.className = "attribute";
        newButton.id = "banned";
        newButton.innerText = currentWeight + " lbs";
        banList.appendChild(newButton);      
        
    }

    const handleOriginBan = () => {
        const banList = document.querySelector(".ban-list");
        const newButton = document.createElement("button");
        newButton.className = "attribute";
        newButton.id = "banned";
        newButton.innerText = currentOrigin;
        banList.appendChild(newButton);      
        
    }

    const handleLifeSpanBan = () => {
        const banList = document.querySelector(".ban-list");
        const newButton = document.createElement("button");
        newButton.className = "attribute";
        newButton.id = "banned";
        newButton.innerText = currentLifeSpan + " years";
        banList.appendChild(newButton);      
        
    }

    return (
        <div className="whole-card">
            <div className="cat-card">
                <h2 id='cat-name'>{getRandomCatName()}</h2>
                <div className="cat-card-buttons">
                    <button id="breed" className="attribute" onClick={handleBreedBan}>{currentBreed}</button>
                    <button id="weight" className="attribute" onClick={handleWeightBan}>{currentWeight} lbs</button>
                    <button id="origin" className="attribute" onClick={handleOriginBan}>{currentOrigin}</button>
                    <button id="life" className="attribute" onClick={handleLifeSpanBan}>{currentLifeSpan} years</button>
                </div>
                {currentImage && <img src={currentImage} alt="Cat" />}
            </div>
                <button className="attribute" id="discover" onClick={handleClick}>Discover a New Cat!</button>

                <SideNav cats={previousCats} />
            <div className="ban-list">
                <h2>Ban List</h2>
                
            </div>
        </div>
    );

}

export default CatCard;