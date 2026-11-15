import React from 'react'
import MacWindow from './MacWindow'
import "./resume.scss"

const Resume = ({ windowName, setWindowsState, isActive, onFocus }) => {
    return (
        <MacWindow windowName={windowName} setWindowsState={setWindowsState} isActive={isActive} onFocus={onFocus} >
            <div className="resume-window">
                <embed src={`${import.meta.env.BASE_URL}resume.pdf`} frameBorder="0"></embed>
            </div>
        </MacWindow>
    )
}

export default Resume