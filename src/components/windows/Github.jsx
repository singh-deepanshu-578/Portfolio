import React from 'react'
import githubData from "../../assets/github.json"
import MacWindow from './MacWindow'
import "./github.scss"

const GitCard = ({ data = { id: 1, image: "", title: "", description: "", tags: [], repoLink: "", demoLink: "" } }) => {
    return <a className="card" href={data.demoLink} target="_blank" rel="noreferrer">
        <h1>{data.title}</h1>
        <p className='description' >{data.description}</p>

        <div className="tags">
            {
                data.tags.map(tag => <p className='tag' >{tag}</p>)
            }
        </div>

        <div className="urls">
            <span>Explore Live Demo →</span>
        </div>
    </a>
}


const Github = ({ windowName, setWindowsState, isActive, onFocus }) => {
    return (
        <MacWindow windowName={windowName} setWindowsState={setWindowsState} isActive={isActive} onFocus={onFocus} >
            <div className="github-content">
                <div className="github-profile">
                    <h1>Deepanshu Singh</h1>
                    <p>@singh-deepanshu-578</p>
                    <a href="https://github.com/singh-deepanshu-578">View GitHub profile</a>
                </div>
                <div className="cards">
                    {githubData.map(project => {
                        return <GitCard key={project.id} data={project} />
                    })}
                </div>
            </div>
        </MacWindow>
    )
}

export default Github