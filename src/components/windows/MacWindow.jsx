import { useState } from 'react'
import { Rnd } from 'react-rnd'
import "./window.scss"

const MacWindow = ({ children, width = "85vw", height = "75vh", windowName, setWindowsState, isActive, onFocus }) => {
    const [isMinimized, setIsMinimized] = useState(false)
    const [isMaximized, setIsMaximized] = useState(false)

    return (
        <Rnd
            dragHandleClassName="window-drag-handle"
            style={{ zIndex: isActive ? 20 : 1 }}
            default={{
                width: width,
                height: height,
                x: 100,
                y: 80
            }}
        >
            <div
                onMouseDown={onFocus}
                className={`window${isMinimized ? " minimized" : ""}${isMaximized ? " maximized" : ""}`}
            >
                <div className="nav window-drag-handle">
                    <div className="dots">
                        <button
                            type="button"
                            onClick={() => setWindowsState(state => ({ ...state, [windowName]: false }))}
                            className="dot red"
                            aria-label="Close window"
                        ></button>
                        <button
                            type="button"
                            onClick={() => setIsMinimized(value => !value)}
                            className="dot yellow"
                            aria-label="Minimize window"
                        ></button>
                        <button
                            type="button"
                            onClick={() => {
                                setIsMinimized(false)
                                setIsMaximized(value => !value)
                            }}
                            className="dot green"
                            aria-label="Maximize window"
                        ></button>
                    </div>

                    <div className="title"><p>Deepanshu Singh - zsh</p></div>

                </div>
                <div className="main-content">
                    {children}
                </div>
            </div>
        </Rnd>
    )
}

export default MacWindow