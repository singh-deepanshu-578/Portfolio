import MacWindow from './MacWindow'
import Terminal from 'react-console-emulator'
import "./cli.scss"

const Cli = ({ windowName, setWindowsState, isActive, onFocus }) => {
    const commands = {
        about: {
            description: 'About me',
            usage: 'about',
            fn: () => `I am Deepanshu Singh, a Computer Science undergraduate specializing in Artificial Intelligence and Machine Learning.
I build full-stack web applications and deep learning solutions with ReactJS, Django, Python, TensorFlow, and cloud platforms.
I am currently pursuing my B.Tech in Computer Science and Engineering (AI & ML) at Inderprastha Engineering College (2023 - 2027).`
        },
        education: {
            description: 'Show education details',
            usage: 'education',
            fn: () => `B.Tech, Computer Science and Engineering (AI & ML)
Inderprastha Engineering College, Ghaziabad
2023 - 2027`
        },
        skills: {
            description: 'List technical skills',
            usage: 'skills',
            fn: () => `Web Development: HTML, CSS, JavaScript, ReactJS, Django
Languages: Python, Java, C, MySQL
AI/ML: TensorFlow, CNN, Computer Vision
Cloud & DevOps: Google Cloud Platform, AWS, Docker
Developer Tools: Git, GitHub`
        },
        projects: {
            description: 'View my projects',
            usage: 'projects',
            fn: () => (
                <div className="cli-projects">
                    <div>
                        1. Project Management Dashboard - ReactJS, SASS, Material Design, Chart.js
                        <a href="https://project-management-dashboard-seven-gamma.vercel.app" target="_blank" rel="noreferrer">
                            https://project-management-dashboard-seven-gamma.vercel.app
                        </a>
                    </div>
                    <div>
                        2. SmartCare Hospital Management System - Django, SQLite, HTML, CSS, JavaScript
                        <a href="https://smartcare-hms-production.up.railway.app" target="_blank" rel="noreferrer">
                            https://smartcare-hms-production.up.railway.app
                        </a>
                    </div>
                    <div>
                        3. Diabetic Retinopathy Severity Classification - TensorFlow, CNNs, Transfer Learning, TFLite
                        <a href="https://diabetic-retinopathy-severity-class.vercel.app" target="_blank" rel="noreferrer">
                            https://diabetic-retinopathy-severity-class.vercel.app
                        </a>
                    </div>
                </div>
            )
        },
        experience: {
            description: 'Display work experience',
            usage: 'experience',
            fn: () => `Open Source Contributor, Social Summer of Code (SSOC) - Remote
May 2026 - July 2026
  - Contributed to open-source projects across multiple repositories
  - Implemented features and bug fixes with a focus on quality and documentation

Front-End Developer, Truwix Tech Solutions Pvt. Ltd. - Remote
December 2025 - March 2026
  - Built UI components for a SaaS platform reaching 10,000+ daily active users
  - Reduced page load time by 40% and maintained 90%+ test coverage`
        },
        goals: {
            description: 'Show career goals',
            usage: 'goals',
            fn: () => `I am working toward a Front-End Developer or Software Developer role.
I want to build reliable, polished products and contribute to cloud-based applications using
containerization, serverless services, and DevOps practices.`
        },
        contact: {
            description: 'Get contact information',
            usage: 'contact',
            fn: () => `Email: singhdeepanshu578@gmail.com
Phone: +91 8595231746
Location: Ghaziabad, Uttar Pradesh, India`
        },
        github: {
            description: 'Open GitHub profile window',
            usage: 'github',
            fn: () => {
                setWindowsState(state => ({ ...state, github: true }))
                return 'Opening GitHub profile window...'
            }
        },
        resume: {
            description: 'Open resume',
            usage: 'resume',
            fn: () => {
                setWindowsState(state => ({ ...state, resume: true }))
                return 'Opening resume window...'
            }
        },
        social: {
            description: 'View social media links',
            usage: 'social',
            fn: () => `LinkedIn: https://www.linkedin.com/in/singhdeepanshu578/
GitHub: https://github.com/singh-deepanshu-578`
        },
        echo: {
            description: 'Echo a passed string',
            usage: 'echo <string>',
            fn: (...args) => args.join(' ')
        }
    }

    const welcomeMessage = `
╔════════════════════════════════════════╗
║     Welcome to My Portfolio CLI!       ║
╚════════════════════════════════════════╝

Hello! 👋 I am Deepanshu Singh, a Computer Science undergraduate specializing in AI & ML.
Explore my education, skills, projects, experience, and career goals using terminal commands.

Type 'help' to see all available commands, or try:
  • about     - Learn about me
  • education - View my education
  • skills    - View my technical skills
  • projects  - Check out my deployed work
  • experience - See my experience
  • goals     - See my career goals
  • contact   - Get in touch

Happy exploring! 🚀
`

    return (
        <MacWindow windowName={windowName} setWindowsState={setWindowsState} isActive={isActive} onFocus={onFocus} >
            <div className="cli-window">
                <Terminal
                    commands={commands}
                    welcomeMessage={welcomeMessage}
                    promptLabel={'deepanshusingh:~$'}
                    promptLabelStyle={{ color: '#00ff00' }}
                    styleEchoBack="labelOnly"
                />
            </div>
        </MacWindow>
    )
}

export default Cli
