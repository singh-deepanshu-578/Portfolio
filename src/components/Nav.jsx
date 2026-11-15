import { useState } from 'react'
import "./nav.scss"
import DateTime from './DateTime'

const Nav = ({ setWindowsState, setActiveWindow }) => {
    const assetPath = (name) => `${import.meta.env.BASE_URL}navbar-icons/${name}.svg`
    const [isFileMenuOpen, setIsFileMenuOpen] = useState(false)

    const openTerminal = () => {
        setWindowsState(state => ({ ...state, cli: true }))
        setActiveWindow("cli")
    }

    const openResume = () => {
        setWindowsState(state => ({ ...state, resume: true }))
        setActiveWindow("resume")
        setIsFileMenuOpen(false)
    }

    return (
        <nav>
            <div className="left">
                <div className="apple-icon">
                    <img src={assetPath("apple")} alt="" />
                </div>

                <div className="nav-item">
                    <p>Deepanshu Singh</p>
                </div>

                <div className="nav-menu">
                    <button
                        type="button"
                        className="nav-item"
                        onClick={() => setIsFileMenuOpen(value => !value)}
                        aria-expanded={isFileMenuOpen}
                    >
                        File
                    </button>
                    {isFileMenuOpen && (
                        <div className="file-menu">
                            <button type="button" onClick={() => { openTerminal(); setIsFileMenuOpen(false) }}>New Window</button>
                            <button type="button" onClick={openResume}>Open...</button>
                            <div className="menu-divider"></div>
                            <button type="button" onClick={() => setIsFileMenuOpen(false)}>Close</button>
                        </div>
                    )}
                </div>
                <button type="button" className="nav-item" onClick={openTerminal}>Terminal</button>

            </div>
            <div className="right">
                <div className="nav-icon">
                    <img src={assetPath("wifi")} alt="" />
                </div>
                <div className="nav-item">
                    <DateTime />
                </div>

            </div>
        </nav>
    )
}

export default Nav