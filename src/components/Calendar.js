import React from 'react';
import Day from "./Day";

import "../css/start.css";
import "../css/header.css";
import "../css/main.css";
import "../css/activities.css";
import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all.js';

const Calendar = props => {


    const hours = [
        "08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00",
        "18:00", "19:00", "20:00", "21:00", "22:00", "23:00", "24:00"
    ];
    const activities = [
        [
            {
                hour: "08:45-09:00",
                txt: "Metzger",
                bgc: "var(--blueLight)",
                like: true,
            },
            {
                hour: "09:15-10:30",
                txt: "Metzger",
                bgc: "var(--orange)",
                unlike: true
            },
            {
                hour: "10:45-11:00",
                txt: "Mittermeier",
                bgc: "var(--blue)",
            },
            {
                hour: "11:45-13:30",
                txt: "Mittermeier",
                bgc: "var(--blue)",
            }
        ],



    ];
    const days = [];
    const createDays = (hoursAmount = hours.length) => {
        for (let i = 0; i < 7; i++) {
            const day = [];
            for (let y = 0; y < hoursAmount; y++) {
                day.push("");
            }
            console.log(activities[0]);

            days.push(<Day key={i} hours={day} activities={activities[0]}></Day>);
        }
    }
    createDays();
    console.log(days);
    return (
        <div className="modal">
            <div className="calendar">
                <section className="header flexRow">
                    <h4 className="header__h">Terminplaner</h4>
                    <span className="header__date">
                        <a href="/#" className="header__a">
                            <i className="fas fa-chevron-left"></i>
                        </a>
                        6 - 12. Juli 2015
                    <a href="/#" className="header__a">
                            <i className="fas fa-chevron-right"></i>
                        </a>
                    </span>
                    <div className="header__tools flexCol">
                        <a href="/#" className="header__tool">
                            <i className="fas fa-text-width"></i>
                        </a>
                        <a href="/#" className="header__tool">
                            <i className="fas fa-calendar-alt"></i>
                        </a>
                    </div>
                </section>
                <div className="main">
                    <div className=" main__header">
                        <div className="main__element main__element--header flexCol">Urzheit</div>
                        <div className="main__element main__element--header flexCol">Mo 06.07.</div>
                        <div className="main__element main__element--header flexCol">Di 07.07.</div>
                        <div className="main__element main__element--header flexCol">Mi 08.07.</div>
                        <div className="main__element main__element--header flexCol">Do 09.07.</div>
                        <div className="main__element main__element--header flexCol">Fr 10.07.</div>
                        <div className="main__element main__element--header flexCol">Sa 11.07.</div>
                        <div className="main__element main__element--header flexCol">So 12.07.</div>
                    </div>
                    <div className="main__main">
                        <div className="main__bookmark"></div>
                        <Day hours={hours}></Day>
                        {days}

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Calendar;