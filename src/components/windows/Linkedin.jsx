import MacWindow from './MacWindow'
import "./linkedin.scss"

const Linkedin = ({ windowName, setWindowsState }) => {
    return (
        <MacWindow windowName={windowName} setWindowsState={setWindowsState} >
            <div className="linkedin-profile">
                <div className="linkedin-badge">in</div>
                <h1>Deepanshu Singh</h1>
                <p>Computer Science undergraduate | AI &amp; ML</p>
                <a href="https://www.linkedin.com/in/singhdeepanshu578/">View LinkedIn profile</a>
            </div>
        </MacWindow>
    )
}

export default Linkedin
