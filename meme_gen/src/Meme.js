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

    function handleChange(event) {
        const {name, value} = event.target
        setMeme(prevMeme => {
            return {
                ...prevMeme,
                [name]: value
            }
        })
    }

    return (
        <main>
            <div className = "form">
                <input 
                    type ="text" 
                    placeholder = "Top text" 
                    className = "form-input" 
                    name = "topText" 
                    value = {meme.topText} 
                    onChange = {handleChange}
                    />
                <input 
                    type = "text" 
                    placeholder= "Bottom text" 
                    className="form-input" 
                    name = "bottomText"
                    value = {meme.bottomText} 
                    onChange = {handleChange}
                />
                <button className= "form-btn" onClick = {getMemeImage}>Get a new meme!</button>
            </div>
            <div className='meme'>
            <img src = {meme.randomImage} className = "memeImage" alt = ""/>
            <h2 className='meme-text top'>{meme.topText}</h2>
            <h2 className = "meme-text bottom">{meme.bottomText}</h2>
            </div>
            
        </main>
    );
}