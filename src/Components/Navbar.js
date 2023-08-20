import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Textform from './Textform'

export default function Navbar(props) {
    const [darkMode, setDarkMode] = useState(false);
    const darkModeToggle = (event) => {
        setDarkMode(event.target.checked);
        props.toggleMode(event.target.checked);
    }
    return (
        <>
        <nav className={darkMode ? "navbar navbar-expand-lg navbar-dark bg-dark" : "navbar navbar-expand-lg navbar-light bg-secondary"}>
            <div className="container-fluid">
                <a className="navbar-brand" href="/"><b className="text-light">{props.title}</b></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <a className="nav-link active text-light" aria-current="page" href="/">Home</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link text-light" href="/">{props.about}</a>
                    </li>
                </ul>
                <div className="form-check form-switch">
                    <input className="form-check-input darkModeClass" onClick={darkModeToggle} type="checkbox" role="switch" id="flexSwitchCheckChecked"/>
                    <label className="form-check-label text-light" htmlFor="flexSwitchCheckChecked">Dark Mode</label>
                </div>
                <form className="d-flex mx-3">
                    <input className="form-control me-2" type="search" placeholder="Type here..." style={{backgroundColor: darkMode ? '#6c757d' : 'white'}} aria-label="Search"/>
                    <button className="btn btn-outline-light" type="submit">Search</button>
                </form>
                </div>
            </div>
        </nav>
        <div className={darkMode ? "container" : "container bg-white" }>
            <Textform heading="Enter the text to analyze below" darkMode = {darkMode}/>
        </div>
        </>
    )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    about: PropTypes.string
}
Navbar.defaultProps = {
    title: 'TextUtils',
    about: 'About'
}
