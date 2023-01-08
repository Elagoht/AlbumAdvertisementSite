import './index.css'
import { useState } from 'react'
import AlbumInfo from './components/AlbumInfo'
import images from './assets/images'

const albums = [
  {
    title: "Protect Your Roots",
    artist: "Elàgoht",
    year: 2019,
    composer: "Furkan Baytekin",
    cover: images.protect,
    instruments: {
      "Bass Guitar": "Furkan Baytekin",
      "Electro Gitar": "Furkan Baytekin",
      "Drum": "Furkan Baytekin",
      "Org": "Furkan Baytekin",
    }
  }, {
    title: "Behind Of War",
    artist: "Elàgoht",
    year: 2019,
    composer: "Furkan Baytekin",
    cover: images.behind,
    instruments: {
      "Bass Guitar": "Furkan Baytekin",
      "Electro Gitar": "Furkan Baytekin",
      "Drum": "Furkan Baytekin",
      "Org": "Furkan Baytekin",
    }
  }, {
    title: "Demolition Of Obsidian",
    artist: "Elàgoht",
    year: 2020,
    composer: "Furkan Baytekin",
    cover: images.demolition,
    instruments: {
      "Bass Guitar": "Furkan Baytekin",
      "Electro Gitar": "Furkan Baytekin",
      "Drum": "Furkan Baytekin",
      "Org": "Furkan Baytekin",
    }
  }
]

function App() {
  const [selected, setSelected] = useState(2)

  return <div>
    <AlbumInfo
      props={albums[selected]}
    />
    <button onClick={() => { setSelected(0) }}>Protect Your Roots</button>
    <button onClick={() => { setSelected(1) }}>Behind Of War</button>
    <button onClick={() => { setSelected(2) }}>Demolition Of Obsidian</button>
  </div>
}

export default App
