function AlbumInfo({ props }) {

  const { title, artist, year, composer, cover, instruments } = props

  return <div id="album-con">
    <div id="album-cover" style={{ backgroundImage: `url("${cover}")` }}></div>
    <div id="album-info">
      <div id="album-title">{title}</div>
      <div id="album-artist">{artist}</div>
      <div id="album-year">{year}</div>
      <div id="album-composer">{composer}</div>
      <div id="instruments">
        {Object.entries(instruments).map(([type, player]) => (
          <div key={type}
            id={`instrument-${type}`}
            className="instrument">
            {type}: {player}
          </div>
        ))}
      </div>
    </div>
  </div>
}

export default AlbumInfo
