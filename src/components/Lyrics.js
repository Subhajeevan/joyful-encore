import { useEffect, useState } from "react";
import { db } from "../firebase";
import {
  doc,
  getDoc,
  setDoc,
  updateDoc,
  onSnapshot,
} from "firebase/firestore";

/* ===== SONG LIST (ORDER MATTERS) ===== */
const songs = [
  {
    title: "Silent Night",
    lyrics: `Silent night, holy night
All is calm, all is bright
Round yon Virgin Mother and Child
Holy Infant so tender and mild
Sleep in heavenly peace
Sleep in heavenly peace`,
  },
  {
    title: "O Holy Night",
    lyrics: `O holy night, the stars are brightly shining
It is the night of our dear Savior’s birth
Long lay the world in sin and error pining
Till He appeared and the soul felt its worth`,
  },
];

function Lyrics() {
  const [likes, setLikes] = useState(0);
  const [animatedLikes, setAnimatedLikes] = useState(0);

  const ref = doc(db, "likes", "concert");

  /* ===== LIVE LIKE LISTENER ===== */
  useEffect(() => {
    const unsub = onSnapshot(ref, async (snap) => {
      if (snap.exists()) {
        setLikes(snap.data().count);
      } else {
        await setDoc(ref, { count: 0 });
      }
    });

    return () => unsub();
  }, []);

  /* ===== ANIMATE LIKE COUNT ===== */
  useEffect(() => {
    let start = animatedLikes;
    let end = likes;

    if (start === end) return;

    const step = Math.max(1, Math.abs(end - start) / 20);

    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        start = end;
        clearInterval(timer);
      }
      setAnimatedLikes(Math.floor(start));
    }, 30);

    return () => clearInterval(timer);
  }, [likes]);

  /* ===== LIKE ACTION ===== */
  const likeConcert = async () => {
    await updateDoc(ref, { count: likes + 1 });
  };

  return (
    <div className="section" id="lyrics">
      {/* SONGS */}
      {songs.map((song, index) => (
        <div key={index} className="song-card">
          <h2 className="song-title">
            {index + 1}. 🎵 {song.title}
          </h2>

          <pre className="lyrics">{song.lyrics}</pre>
        </div>
      ))}

      {/* SINGLE LIKE SECTION */}
      <div className="like-section">
        <p className="like-line">
          Enjoying our concert? Show your love ❤️
        </p>

        <button className="like-btn" onClick={likeConcert}>
          ❤️ Like ({animatedLikes})
        </button>
      </div>
    </div>
  );
}

export default Lyrics;
