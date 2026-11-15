import React from 'react'
import "./dock.scss"

const Dock = ({ windowsState, setWindowsState, setActiveWindow }) => {
    const iconPath = (name) => `${import.meta.env.BASE_URL}doc-icons/${name}.svg`
    const openWindow = (windowName) => {
        setWindowsState(state => ({ ...state, [windowName]: true }))
        setActiveWindow(windowName)
    }

    return (
        <footer className='dock' >
            <div
                onClick={() => openWindow("github")}
                className="icon github"><img src={iconPath("github")} alt="" /></div>
            <div
                onClick={() => openWindow("note")}
                className="icon note"><img src={iconPath("note")} alt="" /></div>
            <div
                onClick={() => openWindow("resume")}
                className="icon pdf"><img src={iconPath("pdf")} alt="" /></div>
            <div
                onClick={()=>{window.open("https://calendar.google.com/","_blank")}}
            
             className="icon calender"><img src={iconPath("calender")} alt="" /></div>
            <div
                onClick={() => openWindow("spotify")}
                className="icon spotify"><img src={iconPath("spotify")} alt="" /></div>
            <div
            onClick={()=>{window.open("mailto:singhdeepanshu578@gmail.com","_blank")}}
             className="icon mail"><img src={iconPath("mail")} alt="" /></div>
            <div 
            onClick={() => { window.open("https://www.linkedin.com/in/singhdeepanshu578/", "_blank", "noopener,noreferrer") }}
            
            className="icon link"><img src={iconPath("link")} alt="" /></div>
            <div
                onClick={() => openWindow("cli")}
                className="icon cli"><img src={iconPath("cli")} alt="" /></div>
        </footer>
    )
}

export default Dock