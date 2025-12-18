function About() {
  return (
    <div className="section">
      <h2>About Our Group</h2>
       <p>
        We are a group of believers brought together by one purpose —  
        to glorify God through music.
      </p>

      <p>
        Every song we sing is a prayer, every note a testimony,  
        and every melody an offering of thanksgiving to the Lord.
      </p>

      <p>
        As the Bible says, <br />
        <em>
          “Sing to the Lord a new song; sing to the Lord, all the earth.”
          <br />— Psalm 96:1
        </em>
      </p>

      {/* OLD SONG SECTION */}
      <div className="old-song">
        <h3>🎶 Our Previous Song</h3>
        <p>Show some love and support us ❤️</p>

        <div className="video-wrapper">
         <iframe width="560" height="315" src="https://www.youtube.com/embed/7xapv4vJODs?si=6PTuJyP-PvvHIzOE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
      </div>
    </div>
  );
}

export default About;
