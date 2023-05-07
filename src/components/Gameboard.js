import React, { useEffect, useState } from "react";
import Card from "./Card";
import Scoreboard from "./Scoreboard";
import avada from "../images/avada.jpg";
import dementors from "../images/dementors.jpg";
import expecto from "../images/expecto.jpg";
import felix from "../images/felix.jpg";
import golden from "../images/golden.jpg";
import lumos from "../images/lumos.jpg";
import occlumency from "../images/occlumency.jpg";
import owls from "../images/owls.jpg";
import phoenix from "../images/phoenix.jpg";
import wingardium from "../images/wingardium.jpg";

const Gameboard = () => {
    const [images, setImages] = useState([
        {link: avada, altMsg: "Avada Kedavra Card", clicked: false, id: "avada"},
        {link: dementors, altMsg: "Dementors Card", clicked: false, id: "dementors"},
        {link: expecto, altMsg: "Expecto Patronum Card", clicked: false, id: "expecto"},
        {link: felix, altMsg: "Felix Felicis Card", clicked: false, id: "felix"},
        {link: golden, altMsg: "Golden Snitch Card", clicked: false, id: "golden"},
        {link: lumos, altMsg: "Lumos Card", clicked: false, id: "lumos"},
        {link: occlumency, altMsg: "Occlumency Card", clicked: false, id: "occlumency"},
        {link: owls, altMsg: "Owls Card", clicked: false, id: "owls"},
        {link: phoenix, altMsg: "Phoenix Card", clicked: false, id: "phoenix"},
        {link: wingardium, altMsg: "Wingardium Leviosa Card", clicked: false, id: "wingardium"}
    ]);

    const [currScore, setCurrScore] = useState(0);
    const [highscore, setHighscore] = useState(0);
    const [shuffled, setShuffled] = useState(false);

    useEffect(() => {
        if (shuffled) {
            shuffleImages();
        }
        updateHighScore()
    })

    const clickImage = (e) => {
        const targetId = e.target.parentElement.id;
        const index = images.findIndex((item) => item.id === targetId);
        const image = images[index];

        //if image was not previously clicked, set clicked as true, update currentscore and shuffle cards
         if (!image.clicked) {
            setImages(images.map(item => item.id === targetId ? {...item, clicked: true}: item))
            setCurrScore(currScore+1);
            setShuffled(true);
            //alert player if they won 
            if (currScore+1 >= 10) {
                alert("Congratulations, you have proved your memory skills!");
                setHighscore(10);
                resetAllClicked();
                setCurrScore(0);
            }
        } else {
            resetAllClicked();
            setCurrScore(0);
        } 
    };

    const shuffleImages = () => {
        let tempArray = [...images];
        for (let i = tempArray.length-1; i>0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            let temp = tempArray[i];
            tempArray[i] = tempArray[j];
            tempArray[j] = temp;
        }
        setImages(tempArray);
        setShuffled(false);
    };

    const updateHighScore = () => {
        if (currScore > highscore) {
            setHighscore(currScore);
        }
    };

    const resetAllClicked = () => {
        setImages(images.map(image => image.clicked === true ? {...image, clicked: false}: image));
    };

    return (
        <div className="gameboardDiv">
            <Scoreboard currScore={currScore} highScore={highscore}></Scoreboard>
            <div className="cardsDiv">
                {images.map((image) => {
                    return <Card image={image} clickImage={clickImage} key={image.id}></Card>
                })}
            </div>
        </div>
    )
}

export default Gameboard;