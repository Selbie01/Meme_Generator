import React from 'react'
import memesData from "./MemeData"

export default function Meme(){

 const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "https://i.imgflip.com/30b1gx.jpg"
 })
 const [allMemeImages, setAllMemeImages] = React.useState(memesData)

    function getMemeImage(){
        const memesArr = allMemeImages.data.memes
        const randomNum = Math.floor(Math.random() * memesArr.length)
        const url = memesArr[randomNum].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
    }

    return (
        <main>
            <div className = "form">
                <input type ="text" placeholder = "Top text"className = "form-input"/>
                <input type = "text" placeholder= "Bottom text" className="form-input" />
                <button className= "form-btn" onClick = {getMemeImage}>Get a new meme!</button>
            </div>
            <img src = {meme.randomImage} className = "memeImage" alt = ""/>
        </main>
    );
}