import { useState } from 'react'
import "./app.scss"
import Dock from './components/Dock'
import Nav from './components/Nav'
import Github from './components/windows/Github'
import Note from './components/windows/Note'
import Resume from './components/windows/Resume'
import Spotify from './components/windows/Spotify'
import Cli from './components/windows/Cli'




function App() {

  const [windowsState, setWindowsState] = useState({
    github: false,
    note: false,
    resume: false,
    spotify: false,
    cli: false
  })
  const [activeWindow, setActiveWindow] = useState(null)
  const wallpaper = `url(${import.meta.env.BASE_URL}mac-wallpaper.jpg)`
  
  return (
    <main style={{ "--wallpaper-image": wallpaper }}>
      <Nav setWindowsState={setWindowsState} setActiveWindow={setActiveWindow} />
      <section className="about" aria-labelledby="about-title">
        <p className="about-eyebrow">About me</p>
        <h1 id="about-title">Hi, I&apos;m Deepanshu Singh.</h1>
        <p className="about-lead">
          I&apos;m a Computer Science undergraduate specializing in Artificial Intelligence and Machine Learning,
          passionate about building useful web products and intelligent applications.
        </p>
        <div className="about-details">
          <div>
            <strong>Currently pursuing</strong>
            <span>B.Tech in Computer Science and Engineering (AI &amp; ML), 2023–2027</span>
            <small>Inderprastha Engineering College</small>
          </div>
          <div>
            <strong>What I work with</strong>
            <span>ReactJS, Django, Python, TensorFlow, cloud platforms, and DevOps tools</span>
          </div>
          <div>
            <strong>Where I&apos;m heading</strong>
            <span>Building polished software and cloud-native products as a front-end or software developer</span>
          </div>
        </div>
      </section>
      <Dock windowsState={windowsState} setWindowsState={setWindowsState} setActiveWindow={setActiveWindow} />
      { windowsState.github && <Github windowName="github" setWindowsState={setWindowsState} isActive={activeWindow === "github"} onFocus={() => setActiveWindow("github")} />}
      { windowsState.note && <Note windowName="note" setWindowsState={setWindowsState} isActive={activeWindow === "note"} onFocus={() => setActiveWindow("note")} />}
      { windowsState.resume && <Resume windowName="resume" setWindowsState={setWindowsState} isActive={activeWindow === "resume"} onFocus={() => setActiveWindow("resume")} />}
      { windowsState.spotify && <Spotify windowName="spotify" setWindowsState={setWindowsState} isActive={activeWindow === "spotify"} onFocus={() => setActiveWindow("spotify")} />}
      { windowsState.cli && <Cli windowName="cli" setWindowsState={setWindowsState} isActive={activeWindow === "cli"} onFocus={() => setActiveWindow("cli")} />}
    </main>
  )
}

export default App
