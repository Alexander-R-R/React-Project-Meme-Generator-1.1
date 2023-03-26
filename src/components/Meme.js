import React from "react";

export default function Meme() {
 
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  const [allMemeImages, setAllMemeImages] = React.useState([]);

  function getMemeImg() {
    const randomIndex = Math.floor(Math.random() * allMemeImages.length);
    const url = allMemeImages[randomIndex].url;

    setMeme((prevMeme) => {
      return {
        ...prevMeme,
        randomImage: url
      };
    });

    console.log(url);
  }

  React.useEffect(()=> {
    fetch("https://api.imgflip.com/get_memes")
    .then(res => res.json())
    .then(data => setAllMemeImages(data.data.memes))
  }, [])

  console.log(allMemeImages)

  function handleChange(event) {
    const {name, value} = event.target
    setMeme(prevMeme => ({
        ...prevMeme,
        [name]: value
    }))
}
  return (

    <main className="meme-container">
      <div className="form">
        <input 
           type="text" 
           placeholder="Top text" 
           className="input-1"
           name="topText"
           value={meme.topText} 
           onChange={handleChange}
        />

        <input 
           type="text" 
           placeholder="Bottom text" 
           className="input-2"
           name="bottomText"
           value={meme.bottomText}  
           onChange={handleChange}
        />

        <button 
            className="submit-btn" 
            onClick={getMemeImg}>
            Get a new meme image 🖼️
        </button>
      </div>
      <div className="meme">
        <img className="meme--img" src={meme.randomImage}></img>
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>
        
      </div>
    </main>
  );
}


