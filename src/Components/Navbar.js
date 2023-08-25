import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Textform from './Textform'

export default function Navbar(props) {
    const [darkMode, setDarkMode]                         = useState(false);
    const [darkModeAlert, setDarkModeAlert]               = useState(false);
    const [darkModeAlertMessage, setDarkModeAlertMessage] = useState('Light Mode Activated!');

    const darkModeToggle = (event) => {
        setDarkMode(event.target.checked);
        props.toggleMode(event.target.checked);
        if(event.target.checked) {
            setDarkModeAlertMessage('Dark Mode Activated!');
        } else {
            setDarkModeAlertMessage('Light Mode Activated!');
        }
        setDarkModeAlert(true);
        setTimeout(() => {
            setDarkModeAlert(false);
        }, 3000);
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
                    <input className={darkMode ? "bg-secondary border-0 form-check-input" : "border-0 form-check-input"} onClick={darkModeToggle} type="checkbox" role="switch" id="flexSwitchCheckChecked"/>
                    <label className="form-check-label text-light" htmlFor="flexSwitchCheckChecked"><b>Dark Mode</b></label>
                </div>
                </div>
            </div>
        </nav>
        <div className={darkMode ? "container" : "container bg-white" }>
            <Textform heading="Enter the text to analyze below" darkMode={darkMode} darkModeAlert={darkModeAlert} darkModeAlertMessage={darkModeAlertMessage}/>
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
