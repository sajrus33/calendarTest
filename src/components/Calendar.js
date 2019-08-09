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
        this.createActivities = () => {
            const daysActivities = [];
            this.state.activities.forEach((dayActivites, dI) => {
                const newDayActivities = [];
                dayActivites.forEach((activity, i) => {
                    if (activity) {
                        newDayActivities.push(
                            <Activity handleDragStart={this.handleDragActivity} id={"id" + dI + i} key={"id" + dI + i} activity={activity}></Activity>
                        )
                    }
                });

                daysActivities.push(newDayActivities)
            })
            this.setState({
                daysActivities: daysActivities
            })

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
            const newDrops = [];
            for (let i = 0; i < 7; i++) {
                const newDropsDay = [];
                propsHours.forEach((hour, hI) => {
                    for (let nI = 0; nI < 4; nI++) {
                        newDropsDay.push(
                            <div onDrop={this.handleDropActivity} onDragOver={this.handleDragOverActivity} className="main__drop" id={"id" + i + hI + nI} key={"id" + i + hI + nI}> </div>
                        )
                    }
                });
                newDrops.push(newDropsDay);
            }
            return newDrops
        };

        this.handleDropActivity = (e) => {
            let top = e.target.style.top;
            const pxIndex = top.indexOf("px");
            top = top.slice(0, pxIndex);
            // this.state.activities[0].forEach(activity => {
            //     console.log(activity.hour);
            // });
            e.preventDefault();
            var data = e.dataTransfer.getData("text");
            e.target.appendChild(document.getElementById(data));
        };
        this.handleDragOverActivity = (e) => {
            e.preventDefault();
        };
        this.handleDragActivity = (e) => {
            e.dataTransfer.setData("text", e.target.id);
            console.log(e.target.id, "ID");
        };
        this.handleBtnAddTask = () => {
            this.state.activities[3].push({
                hour: "08:00-09:00",
                txt: "Metzger",
                bgc: "var(--blueLight)",
                like: true,
            });
            const activities = this.state.activities;

            console.log(activities);
            this.setState({
                activities: activities
            });
            this.createActivities();

            // console.log(this.state.activities[3]);
            // console.log("btn");
        }
    }

    componentWillMount() {
        console.log("before mount calendar")
        this.createActivities();
        this.hoursElements = this.createHours(false);
        this.dropElements = this.createDropElements();
        console.log(this.dropElements);
        this.hoursElementsDescribed = this.createHours(true);
    }

    componentDidUpdate() {
        console.log("update calendar")
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
                                    {this.state.daysActivities[0] ? this.state.daysActivities[0] : null}
                                    {this.dropElements[0]}
                                </div>
                                {this.hoursElements}
                            </div>

                            <div className="main__day ">
                                <div className="main__wrapper--activity">
                                    {this.state.daysActivities[1] ? this.state.daysActivities[1] : null}
                                    {this.dropElements[1]}

                                </div>
                                {this.hoursElements}
                            </div>

                            <div className="main__day ">
                                <div className="main__wrapper--activity">
                                    {this.state.daysActivities[2] ? this.state.daysActivities[2] : null}
                                    {this.dropElements[2]}
                                </div>
                                {this.hoursElements}
                            </div>

                            <div className="main__day ">
                                <div className="main__wrapper--activity">
                                    {this.state.daysActivities[3] ? this.state.daysActivities[3] : null}
                                    {this.dropElements[3]}
                                </div>
                                {this.hoursElements}
                            </div>

                            <div className="main__day ">
                                <div className="main__wrapper--activity">
                                    {this.state.daysActivities[4] ? this.state.daysActivities[4] : null}
                                    {this.dropElements[4]}
                                </div>
                                {this.hoursElements}
                            </div>

                            <div className="main__day ">
                                <div className="main__wrapper--activity">
                                    {this.state.daysActivities[5] ? this.state.daysActivities[5] : null}
                                    {this.dropElements[5]}
                                </div>
                                {this.hoursElements}
                            </div>

                            <div className="main__day ">
                                <div className="main__wrapper--activity">
                                    {this.state.daysActivities[6] ? this.state.daysActivities[6] : null}
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