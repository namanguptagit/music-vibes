import "./styles.css";
import { useState } from "react";
const musicDB = {
  English: [
    { name: "Witt Lowry - Into Your Arms (feat. Ava Max)", rating: "4/5" },
    {
      name: "Say Something - A Great Big World, Christina Aguilera,rating",
      rating: "4.5/5"
    }
  ],
  Hindi: [
    { name: "Kho Gaye Hum Kahan", rating: "4/5" },
    { name: "Hamdard", rating: "3.5/5" }
  ],
  Japanese: [
    { name: "Tokyo Ghoul – Opening Theme – Unravel", rating: "5/5" },
    {
      name: "Hotaru No Hikari (Sha la la) (From Naruto Shippuden)",
      rating: "4.5/5"
    }
  ]
};

var languagesWeKnow = Object.keys(musicDB);

export default function App() {
  const [songLanguage, setSongLanguage] = useState("Japanese");
  function languageClickHandler(language) {
    setSongLanguage(language);
  }
  return (
    <div className="App">
      <h1>🎶 Music Vibes</h1>
      <h2>Checkout my favorite songs. Select a language to get started !</h2>
      <div>
        {languagesWeKnow.map((language) => (
          <button
            onClick={() => languageClickHandler(language)}
            style={{ padding: "0.5rem", margin: "0.5rem" }}
          >
            {language}
          </button>
        ))}
      </div>
      <div style={{ textAlign: "center" }}>
        <ul>
          {musicDB[songLanguage].map((song) => (
            <li key={song.name} id="li">
              {" "}
              <div class="output"> {song.name} </div>
              <div class="output"> {song.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
