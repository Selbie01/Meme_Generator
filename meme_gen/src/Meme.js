import React from 'react'

export default function Meme(){

 const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "https://i.imgflip.com/30b1gx.jpg"
 })
 const [allMemes, setAllMemes] = React.useState([])

    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes") // calls api
            .then(res => res.json()) //parses the response
            .then(data => setAllMemes(data.data.memes)) // gets all of the available meme's data
    } , [])
        
        function getMemeImage() { //gets a random meme
        const randomNum = Math.floor(Math.random() * allMemes.length)
        const url = allMemes[randomNum].url
        setMeme(prevMeme => ({ //sets a meme to meme.randomImage
            ...prevMeme,
            randomImage: url
        }))
    }

    function handleChange(event) {
        const {name, value} = event.target //shortens event.target.name and event.target.value
        setMeme(prevMeme => {
            return {
                ...prevMeme,
                [name]: value // [name] is a computed property syntax. Allows the names of object properties to be determined dynamically, i.e. computed.
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