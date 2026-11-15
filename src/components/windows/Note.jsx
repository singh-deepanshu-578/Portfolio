import React, { useEffect,useState } from 'react'
import MacWindow from './MacWindow'
import "./note.scss"


const Note = ({ windowName, setWindowsState, isActive, onFocus }) => {

    const [ markdown, setMarkdown ] = useState(null)

    useEffect(() => {
        fetch(`${import.meta.env.BASE_URL}note.txt`)
            .then(res => {
                if (!res.ok) {
                    throw new Error(`Notes request failed with status ${res.status}`)
                }
                return res.text()
            })
            .then(text => setMarkdown(text))
            .catch(error => setMarkdown(`Unable to load Notes: ${error.message}`))
    }, [])

    return (
        <MacWindow windowName={windowName} setWindowsState={setWindowsState} isActive={isActive} onFocus={onFocus} >
            <div className="note-window">
                { markdown ? <pre className="note-text">{markdown}</pre> : <p>Loading...</p> }
            </div>
        </MacWindow>
    )
}

export default Note