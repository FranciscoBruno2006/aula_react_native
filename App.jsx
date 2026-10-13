import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './insta.css'
import icongit from './assets/icons8-github-30.png'
import iconspotify from './assets/icons8-spotify-50.png'
import iconsteam from './assets/icons8-steam-30.png'
import Destaques from './Destaques'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <div id="pagina">
      <Destaques></Destaques>

        <div id="conteudo">
          <div id="ftp"><img src="https://i.pinimg.com/236x/da/07/a8/da07a8fee9520aac7e756cc96ff8d24e.jpg" alt="" />
            <div id="bio"><h2>Dotxzy</h2><br />
              <p><strong>113</strong> seguimores <strong>67 </strong>  seguindo</p>
              <p>Essa é a bio<br />
                Aprendiz eterno<br />
                Gosto de um tal doce TRU<br />
                <strong>CONEXÕES:</strong></p>
            </div>
          </div>
          <div id="links">
            <a href="https://open.spotify.com/playlist/5MajP9Gd5EOrzOjlVkkQEs" target="_blank" class="btn spotify">
              <img class="icone" src={iconspotify} alt="spotify" />Spotify
            </a>
            <a href="https://steamcommunity.com/profiles/76561198951596994/" target="_blank" class="btn steam">
              <img src={iconsteam} alt="steam" />Steam
            </a>
            <a href="https://developer.mozilla.org/pt-BR/" target="_blank" class="btn mdn">MDN
            </a>
            <a href="https://github.com/FranciscoBruno2006" target="_blank" class="btn github">
              <img src={icongit} alt="" />GitHub
            </a>
          </div>



          <div id="feed">
            <div class="postes"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrrsohjATrjNh1rkvninWe5seevRrj0sbgb4gNq4j_hw&s" alt="" /></div>
            <div class="postes"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrrsohjATrjNh1rkvninWe5seevRrj0sbgb4gNq4j_hw&s" alt="" /></div>
            <div class="postes"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrrsohjATrjNh1rkvninWe5seevRrj0sbgb4gNq4j_hw&s" alt="" /></div>
            <div class="postes"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrrsohjATrjNh1rkvninWe5seevRrj0sbgb4gNq4j_hw&s" alt="" /></div>
            <div class="postes"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrrsohjATrjNh1rkvninWe5seevRrj0sbgb4gNq4j_hw&s" alt="" /></div>
            <div class="postes"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrrsohjATrjNh1rkvninWe5seevRrj0sbgb4gNq4j_hw&s" alt="" /></div>
            <div class="postes"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrrsohjATrjNh1rkvninWe5seevRrj0sbgb4gNq4j_hw&s" alt="" /></div>
            <div class="postes"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrrsohjATrjNh1rkvninWe5seevRrj0sbgb4gNq4j_hw&s" alt="" /></div>
            <div class="postes"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrrsohjATrjNh1rkvninWe5seevRrj0sbgb4gNq4j_hw&s" alt="" /></div>
            <div class="postes"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrrsohjATrjNh1rkvninWe5seevRrj0sbgb4gNq4j_hw&s" alt="" /></div>
            <div class="postes"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrrsohjATrjNh1rkvninWe5seevRrj0sbgb4gNq4j_hw&s" alt="" /></div>
            <div class="postes"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrrsohjATrjNh1rkvninWe5seevRrj0sbgb4gNq4j_hw&s" alt="" /></div>
            <div class="postes"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrrsohjATrjNh1rkvninWe5seevRrj0sbgb4gNq4j_hw&s" alt="" /></div>
            <div class="postes"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrrsohjATrjNh1rkvninWe5seevRrj0sbgb4gNq4j_hw&s" alt="" /></div>
            <div class="postes"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrrsohjATrjNh1rkvninWe5seevRrj0sbgb4gNq4j_hw&s" alt="" /></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
