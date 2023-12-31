import React, {useState} from 'react'
import PropTypes from 'prop-types'

export default function Textform(props) {
    const [text, setText]                           = useState('');
    const [alertState, setAlertState]               = useState(false);
    const [countOfCharacters, setCountOfCharacters] = useState(0);
    const [countOfWords , setCountOfWords]          = useState(0);
    const [countOfSentences , setCountOfSentences]  = useState(0);
    const [alertMessage, setAlertMessage]           = useState("Enter the text first!");

    const convertToUpperCase = () => {
        if(text) {
            setText(text.toUpperCase());
            setAlertState(false);
        } else {
            setAlertState(true);
            setTimeout(() => {
                setAlertState(false);
            }, 3000);
            setAlertMessage("Enter text to convert it into UPPERCASE!");
        }
    }
    const convertToLowerCase = () => {
        if(text) {
            setText(text.toLowerCase());
            setAlertState(false);
        } else {
            setAlertState(true);
            setTimeout(() => {
                setAlertState(false);
            }, 3000);
            setAlertMessage("Enter text to convert it into lowercase!");
        }
    }
    const removeExtraSpaces = () => {
        if(text) {
            let newText = text.split(/[  ]+/);
            setText(newText.join(' '));
            getAndSetCountOfCharacters(newText.join(' '));
            getAndSetCountOfWords(newText.join(' '));
            getAndSetCountOfSentences(newText.join(' '));
            setAlertState(false);
        } else {
            setAlertState(true);
            setTimeout(() => {
                setAlertState(false);
            }, 3000);
            setAlertMessage("Enter text to Remove Extra Spaces!");
        }
    }
    const getAndSetCountOfCharacters = (text) => {
        if(text) {
            setCountOfCharacters(text.length);
            return text.length;
        } else {
            return 0;
        }
    }
    const getAndSetCountOfWords = (text) => {
        if (text) {
            const wordsArray = text.trim().split(' ');
            setCountOfWords(wordsArray.length);
            return wordsArray.length;
        } else {
            return 0;
        }
    }
    const getAndSetCountOfSentences = (text) => {
        if (text) {
            const sentenceRegex = /[.!?](?:\s|$)/g;
            const sentenceArray = text.match(sentenceRegex);
            if(Array.isArray(sentenceArray)) {
                setCountOfSentences(sentenceArray.length);
                return sentenceArray.length;
            } else {
                setCountOfSentences(0);
            }
        } else {
            return 0;
        }
    }
    const textOnChangeHandle = (event) => {
        if(event.target.value) {
            setText(event.target.value);
            if(event.target.value) {
                getAndSetCountOfCharacters(event.target.value);
                getAndSetCountOfWords(event.target.value);
                getAndSetCountOfSentences(event.target.value);
            }
            setAlertState(false);
        } else {
            setText();
            setCountOfWords(0);
            setCountOfCharacters(0);
            setCountOfSentences(0);
        }
    }
    return (
        <>
        <div className={props.darkMode ? '' : 'bg-white' }>
            <h1 className={ props.darkMode ? 'text-light' : 'text-secondary' }>{props.heading}</h1>
            <div className={alertState ? "alert alert-danger customAlter"  : "alert alert-danger customAlter d-none"} role="alert">
                {alertMessage}
            </div>
            <div className={ props.darkModeAlert ? "alert alert-success d-flex align-items-center" : "alert alert-success d-flex align-items-center d-none"} role="alert">
                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-check" viewBox="0 0 16 16">
                    <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/>
                </svg>
                <div>
                    {props.darkModeAlertMessage}
                </div>
            </div>
            <div className="mb-3">
                <textarea placeholder={props.textAreaPlaceholder} value={text} onChange={textOnChangeHandle} className={props.darkMode ? "form-control text-white" : "form-control text-dark"} style={{backgroundColor: props.darkMode ? '#6c757d' : 'white'}} id="myBox" rows="8"></textarea>
            </div>
            <div className="container">
                <button className="btn btn-secondary my-1 mx-1 button-shadow" onClick={convertToUpperCase}>
                    Convert text into <b>UPPERCASE</b>
                </button>
                <button className="btn btn-secondary my-1 mx-1 button-shadow" onClick={convertToLowerCase}>
                    Convert text into <b>lowercase</b>
                </button>
                <button className="btn btn-secondary my-1 mx-1 button-shadow" onClick={removeExtraSpaces}>
                    <b>Remove Extra Spaces</b>
                </button>
            </div>
        </div>
        <div className={props.darkMode ? "container my-5" : "container my-5 bg-white" }>
            <h2 className={props.darkMode ? "text-light" : "bg-white text-secondary" }>Your text summary</h2>
            <ul className="list-group">
                <li className={props.darkMode ? "list-group-item d-flex justify-content-between align-items-center bg-secondary" : "list-group-item d-flex justify-content-between align-items-center bg-light" }>
                    <b className={props.darkMode ? "text-light" : "text-secondary" }>Number of characters in your text</b>
                    <span className={props.darkMode ? "badge bg-light text-secondary rounded-pill" : "badge bg-secondary text-light rounded-pill" }>{countOfCharacters}</span>
                </li>
                <li className={props.darkMode ? "list-group-item d-flex justify-content-between align-items-center bg-secondary" : "list-group-item d-flex justify-content-between align-items-center bg-light" }>
                    <b className={props.darkMode ? "text-light" : "text-secondary" }>Number of words in your text</b>
                    <span className={props.darkMode ? "badge bg-light text-secondary rounded-pill" : "badge bg-secondary text-light rounded-pill" }>{countOfWords}</span>
                </li>
                <li className={props.darkMode ? "list-group-item d-flex justify-content-between align-items-center bg-secondary" : "list-group-item d-flex justify-content-between align-items-center bg-light" }>
                    <b className={props.darkMode ? "text-light" : "text-secondary" }>Number of sentences in your text</b>
                    <span className={props.darkMode ? "badge bg-light text-secondary rounded-pill" : "badge bg-secondary text-light rounded-pill" }>{countOfSentences}</span>
                </li>
            </ul>
        </div>
        <div className={props.darkMode ? "container my-5" : "container my-5 bg-white"}>
            <h2 className={props.darkMode ? "text-light" : "bg-white text-secondary" }>Preview</h2>
            <pre className={!text ? 'text-utils-preview overflow-auto text-break text-danger' : props.darkMode ? 'text-utils-preview overflow-auto text-break text-white' : 'text-utils-preview overflow-auto text-break text-dark'}>{text ? text : 'Enter the text in text area to get preview here!'}</pre>
        </div>
        </>
    )
}

Textform.propTypes = {
    heading: PropTypes.string,
    textAreaPlaceholder: PropTypes.string,
}
Textform.defaultProps = {
    heading: "Enter the text and analyze it",
    textAreaPlaceholder: "Enter your text here..."
}
