import React from 'react';
import "../css/popup.css";

const Popup = props => {
    const handle = () => {
        console.log("up");
    };
    return (
        <div className="popup">
            <form action="#" className="popup__form flexCol">
                <div className="popup__wrapper--message">
                    <textarea onChange={props.handleTxt} id="message" placeholder="" className="popup__input popup__input--message" required></textarea>
                    <label htmlFor="message" className="popup__label">Task:</label>
                </div>
                <div className="popup__wrapper--input ">
                    <select onChange={(e) => { props.handleSelectD(e); handle() }} id="day" className="popup__input " required>
                        <option className="popup__option" value=""></option>
                        <option className="popup__option" value="0">Montag</option>
                        <option className="popup__option" value="1">Dienstag</option>
                        <option className="popup__option" value="2">Mittwoch</option>
                        <option className="popup__option" value="3">Donnerstag</option>
                        <option className="popup__option" value="4">Freitag</option>
                        <option className="popup__option" value="5">Samstag</option>
                        <option className="popup__option" value="6">Sonntag</option>
                    </select>
                    <label htmlFor="day" className="popup__label">Day</label>
                </div>
                <div className="flexRow popup__wrapper--time">
                    <span className="popup__span">Start</span>
                    <div className="popup__wrapper--input ">
                        <select onChange={props.handleSelectHS} id="hour" className="popup__input " required>
                            <option className="popup__option" value=""></option>
                            <option className="popup__option" value="08">08</option>
                            <option className="popup__option" value="09">09</option>
                            <option className="popup__option" value="10">10</option>
                            <option className="popup__option" value="11">11</option>
                            <option className="popup__option" value="12">12</option>
                            <option className="popup__option" value="13">13</option>
                            <option className="popup__option" value="14">14</option>
                            <option className="popup__option" value="15">15</option>
                            <option className="popup__option" value="16">16</option>
                            <option className="popup__option" value="17">17</option>
                            <option className="popup__option" value="18">18</option>
                            <option className="popup__option" value="19">19</option>
                            <option className="popup__option" value="20">20</option>
                            <option className="popup__option" value="21">21</option>
                            <option className="popup__option" value="22">22</option>
                            <option className="popup__option" value="23">23</option>
                        </select>
                        <label htmlFor="hour" className="popup__label">Hour</label>
                    </div>
                    <span className="popup__colon">:</span>
                    <div className="popup__wrapper--input ">
                        <select onChange={props.handleSelectMS} id="min" className="popup__input " required>
                            <option className="popup__option" value=""></option>
                            <option className="popup__option" value="00">00</option>
                            <option className="popup__option" value="15">15</option>
                            <option className="popup__option" value="30">30</option>
                            <option className="popup__option" value="45">45</option>
                        </select>
                        <label htmlFor="min" className="popup__label">Minutes</label>
                    </div>
                </div>
                <div className="flexRow popup__wrapper--time">
                    <span className="popup__span">End</span>
                    <div className="popup__wrapper--input ">
                        <select onChange={props.handleSelectHE} id="hour" className="popup__input " required>
                            <option className="popup__option" value=""></option>
                            <option className="popup__option" value="08">08</option>
                            <option className="popup__option" value="09">09</option>
                            <option className="popup__option" value="10">10</option>
                            <option className="popup__option" value="11">11</option>
                            <option className="popup__option" value="12">12</option>
                            <option className="popup__option" value="13">13</option>
                            <option className="popup__option" value="14">14</option>
                            <option className="popup__option" value="15">15</option>
                            <option className="popup__option" value="16">16</option>
                            <option className="popup__option" value="17">17</option>
                            <option className="popup__option" value="18">18</option>
                            <option className="popup__option" value="19">19</option>
                            <option className="popup__option" value="20">20</option>
                            <option className="popup__option" value="21">21</option>
                            <option className="popup__option" value="22">22</option>
                            <option className="popup__option" value="23">23</option>
                        </select>
                        <label htmlFor="hour" className="popup__label">Hour</label>
                    </div>
                    <span className="popup__colon">:</span>
                    <div className="popup__wrapper--input ">
                        <select onChange={props.handleSelectME} id="min" className="popup__input " required>
                            <option className="popup__option" value=""></option>
                            <option className="popup__option" value="00">00</option>
                            <option className="popup__option" value="15">15</option>
                            <option className="popup__option" value="30">30</option>
                            <option className="popup__option" value="45">45</option>
                        </select>
                        <label htmlFor="min" className="popup__label">Minutes</label>
                    </div>
                </div>
                <input onClick={props.handleSubmit} type="submit" value="Add Task" className="popup__input popup__input--submit"></input>
            </form>
        </div>
    )

};
export default Popup;