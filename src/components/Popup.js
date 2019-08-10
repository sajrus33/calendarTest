import React from 'react';

const Popup = props => {
    return (
        <div className="popup">
            <form action="#" className="popup__form flexCol">
                <div className="popup__wrapper--message">
                    <textarea id="message" placeholder="" className="popup__input popup__input--message" required></textarea>
                    <label for="message" className="popup__label">Task:</label>
                </div>
                <div className="popup__wrapper--input ">
                    <select type="text" id="day" className="popup__input popup__input--email" required>
                        <option value="0">Montag</option>
                        <option value="1">Dienstag</option>
                        <option value="2">Mittwoch</option>
                        <option value="3">Donnerstag</option>
                        <option value="4">Freitag</option>
                        <option value="5">Samstag</option>
                        <option value="6">Sonntag</option>
                    </select>
                    <label for="day" className="popup__label">Day</label>
                </div>
                <div className="popup__wrapper--input ">
                    <select type="text" id="hour" className="popup__input popup__input--email" required>
                        <option value="">08:00</option>
                        <option value="">08:15</option>
                        <option value="">08:30</option>
                    </select>
                    <label for="hour" className="popup__label">Hour</label>
                </div>
                <input type="submit" value="Add Task" className="popup__input popup__input--submit">
            </form>
            
        </div>
            )
                
    };
export default Popup