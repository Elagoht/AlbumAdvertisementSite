import './index.css'
import { useEffect, useState } from 'react'
import { SelectedAlbumContext } from './contexts/SelectedAlbumContext'
import AlbumInfo from './components/AlbumInfo'
import AllAlbums from './components/AllAlbums'
import { covers } from './assets/images'
import Links from './components/Links'
import Footer from './components/Footer'

const albums = [
  {
    title: "Protect Your Roots",
    artist: "Elàgoht",
    year: 2019,
    composer: "Furkan Baytekin",
    cover: covers.protect,
    instruments: {
      "bassguitar": "Furkan Baytekin",
      "leadguitar": "Furkan Baytekin",
      "drumkit": "Furkan Baytekin",
      "keyboard": "Furkan Baytekin",
      "vocal": "Furkan Baytekin",
    },
    links: {
      youtube: "#",
      google: "#",
      spotify: "#",
      apple: "#",
      deezer: "#",
      soundcloud: "#",
      tidal: "#"
    }
  }, {
    title: "Behind Of War",
    artist: "Elàgoht",
    year: 2019,
    composer: "Furkan Baytekin",
    cover: covers.behind,
    instruments: {
      "vocal": "Furkan Baytekin",
      "keyboard": "Furkan Baytekin",
      "rhythmguitar": "Furkan Baytekin",
      "leadguitar": "Furkan Baytekin",
      "bassguitar": "Furkan Baytekin",
      "drumkit": "Furkan Baytekin",
    },
    links: {
      google: "#",
      youtube: "#",
      spotify: "#",
      apple: "#",
      deezer: "#",
      soundcloud: "#",
      tidal: "#"
    }
  }, {
    title: "Demolition Of Obsidian",
    artist: "Elàgoht",
    year: 2020,
    composer: "Furkan Baytekin",
    cover: covers.demolition,
    instruments: {
      "rhythmguitar": "Furkan Baytekin",
      "keyboard": "Furkan Baytekin",
      "drumkit": "Furkan Baytekin",
      "bassguitar": "Furkan Baytekin",
      "vocal": "Furkan Baytekin",
    },
    links: {
      youtube: "#",
      spotify: "#",
      apple: "#",
      deezer: "#",
      google: "#",
      soundcloud: "#",
      tidal: "#"
    }
  }
]

function App() {

  const [selected, setSelected] = useState(0)

  const contextData = {
    selected,
    setSelected,
    albums
  }

  useEffect(() => {
    document.getElementById("background").style.backgroundImage = `url("${albums[selected].cover}")`
  }, [selected])

  return <SelectedAlbumContext.Provider value={contextData}>
    <div id="background"></div>
    <div id="master-con">
      <AlbumInfo props={albums[selected]} />
      <Links links={albums[selected].links} />
      <AllAlbums />
      <Footer />
    </div>
  </SelectedAlbumContext.Provider >
}

export default App
