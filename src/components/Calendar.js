import React, { Component } from 'react';
import Activity from './Activity';

import "../css/start.css";
import "../css/header.css";
import "../css/main.css";
import "../css/activities.css";
import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all.js';

class Calendar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            daysActivities: [],
            activities: [
                [
                    {
                        hour: "08:00-09:00",
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
                [
                    {
                        hour: "09:00-09:30",
                        txt: "1",
                        bgc: "var(--blueLight)",
                        like: true,
                    },
                    {
                        hour: "09:30-10:30",
                        txt: "2",
                        bgc: "var(--orange)",
                        unlike: true
                    },
                    {
                        hour: "10:45-11:00",
                        txt: "3",
                        bgc: "var(--blue)",
                    },
                    {
                        hour: "11:45-13:30",
                        txt: "4",
                        bgc: "var(--blue)",
                    }
                ],
                [
                    {
                        hour: "11:00-19:30",
                        txt: "1",
                        bgc: "var(--blueLight)",
                        unlike: true,
                    },
                    {
                        hour: "09:15-10:30",
                        txt: "2",
                        bgc: "var(--orange)",
                        like: true
                    }
                ],
                [],
                [],
                [],
                []
            ]
        };
        this.hours = [
            "08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00",
            "18:00", "19:00", "20:00", "21:00", "22:00", "23:00", "24:00"
        ];
        this.getDropSpot = (activityHours = this.state.activities[0][0].hour) => {
            const start = 8;

            const hours = activityHours.split("-");

            const startTime = hours[0].split(":");

            const startHour = Number(startTime[0]);
            const startMin = Number(startTime[1]);


            const topMin = startMin / 60 / .25;
            console.log(topMin);
            let dropSpotTime = String(startHour - start) + topMin;

            dropSpotTime = String(dropSpotTime);
            return dropSpotTime
        };
        this.getDropSpots = () => {
            this.state.activities.forEach((day, dayI) => {
                day.forEach(activity => {
                    if (!activity.dropSpot) {
                        activity.dropSpot = "id" + dayI + this.getDropSpot(activity.hour);
                    }
                });
            })

            this.setState({
                activities: this.state.activities
            });
        }

        this.createHours = (addTxt = false, propsHours = this.hours) => {
            const newHours = [];
            propsHours.forEach((hour, i) => {
                newHours.push(
                    <div key={i} className="main__element main__element--hour">{addTxt ? hour : null}</div>
                )
            });
            return newHours;
        };

        this.createDropElements = (propsHours = this.hours) => {
            this.getDropSpots();
            const newDrops = [];
            for (let dI = 0; dI < 7; dI++) {
                const newDropsDay = [];
                propsHours.forEach((hour, hI) => {
                    for (let nI = 0; nI < 4; nI++) {
                        const id = "id" + dI + hI + nI;
                        let suitableSpot = false;

                        this.state.activities[dI].forEach((dayActivity, aI) => {
                            if (dayActivity.dropSpot === id) {
                                suitableSpot = this.state.activities[dI][aI];

                            }
                        })

                        newDropsDay.push(
                            <div onDrop={this.handleDropActivity} onDragOver={this.handleDragOverActivity} className="main__drop" id={id} key={id}>
                                {suitableSpot
                                    ? <Activity handleDragStart={this.handleDragStartActivity} id={"acti" + id} key={"acti" + id} activity={suitableSpot}></Activity>
                                    : null}
                            </div>
                        )
                    }
                });
                newDrops.push(newDropsDay);
            }
            return newDrops
        };

        this.handleDropActivity = (e) => {
            e.preventDefault();
            var data = e.dataTransfer.getData("text");
            const draggedElement = document.getElementById(data);
            if (draggedElement) {
                draggedElement.style.top = "0px";
                e.target.appendChild(draggedElement);
            }
            document.querySelectorAll(".main__drop").forEach(drop => {
                drop.classList.remove("main__drop--active")
            })
        };
        this.handleDragOverActivity = (e) => {
            e.preventDefault();
        };
        this.handleDragStartActivity = (e) => {
            e.dataTransfer.setData("text", e.target.id);
            console.log(e.target.id, "ID");
            document.querySelectorAll(".main__drop").forEach(drop => {
                drop.classList.add("main__drop--active")
            })
        };
        this.handleBtnAddTask = () => {
            this.state.activities[3].push({
                hour: "08:00-09:00",
                txt: "Metzger",
                bgc: "var(--blueLight)",
                like: true,
            });
            const activities = this.state.activities;

            this.setState({
                activities: activities
            });
            this.dropElements = this.createDropElements();
        }
    }

    componentWillMount() {
        console.log("before mount calendar")
        this.hoursElements = this.createHours(false);
        this.dropElements = this.createDropElements();
        this.hoursElementsDescribed = this.createHours(true);
    }
    componentDidMount() {

    }
    componentDidUpdate() {
        console.log("update calendar");

    }


    render() {

        return (
            <div className="modal">
                <div className="calendar">
                    <section className="header flexRow">
                        <h4 className="header__h">Terminplaner</h4>
                        <div className="header__wrapper--date flexCol">
                            <button onClick={this.handleBtnAddTask} className="header__btn">Add task</button>
                            <span className="header__date">
                                <a href="/#" className="header__a">
                                    <i className="fas fa-chevron-left"></i>
                                </a>
                                6 - 12. Juli 2015
                            <a href="/#" className="header__a">
                                    <i className="fas fa-chevron-right"></i>
                                </a>
                            </span>
                        </div>
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
                            <div className="main__day ">
                                <div className="main__wrapper--activity">
                                </div>
                                {this.hoursElementsDescribed}
                            </div>
                            <div className="main__day ">
                                <div className="main__wrapper--activity">
                                    {this.dropElements[0]}
                                </div>
                                {this.hoursElements}
                            </div>
                            <div className="main__day ">
                                <div className="main__wrapper--activity">
                                    {this.dropElements[1]}

                                </div>
                                {this.hoursElements}
                            </div>
                            <div className="main__day ">
                                <div className="main__wrapper--activity">
                                    {this.dropElements[2]}
                                </div>
                                {this.hoursElements}
                            </div>
                            <div className="main__day ">
                                <div className="main__wrapper--activity">
                                    {this.dropElements[3]}
                                </div>
                                {this.hoursElements}
                            </div>
                            <div className="main__day ">
                                <div className="main__wrapper--activity">
                                    {this.dropElements[4]}
                                </div>
                                {this.hoursElements}
                            </div>
                            <div className="main__day ">
                                <div className="main__wrapper--activity">
                                    {this.dropElements[5]}
                                </div>
                                {this.hoursElements}
                            </div>
                            <div className="main__day ">
                                <div className="main__wrapper--activity">
                                    {this.dropElements[6]}
                                </div>
                                {this.hoursElements}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default Calendar;