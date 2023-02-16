import React, {useState} from "react";
import memesData from "./memeData";

export default function Meme() {

    const [meme, setMemeImage] = useState({
        topText: '',
        bottomText: '',
        randomImage: "https://i.imgflip.com/1bh3.jpg"
    })

    const [allImages, setAllMemeImages] = useState(memesData)

    function getMemeImage() {
        const memesArray = allImages.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        setMemeImage(prev => {
            return {
                ...prev,
                randomImage: memesArray[randomNumber].url
            }
        })
 }
    function handleChange(event) {
        const {name, value} = event.target

        setMemeImage(prev => {
            return {
                ...prev,
                [name]: value
            }
        })
    }

    return (
        <main>
            <div className="form" >
                <input 
                    type="text" 
                    onChange={handleChange}
                    value={meme.topText}
                    name="topText"
                    className="input-top"
                    placeholder="top text"  
                />

                <input 
                    type="text"
                    onChange={handleChange}
                    value={meme.bottomText}
                    name="bottomText"
                    className="input-bottom"
                    placeholder="bottom text" 

                />

                <button onClick={getMemeImage} className="button" >Get a new meme image 🖼️</button>
            </div>
            <div className="meme" >
                <img 
                    src={meme.randomImage} 
                    className="meme-img" 
                />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    )
}