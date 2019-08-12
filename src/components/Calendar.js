import React, { Component } from 'react';
import "../css/start.css";
import "../css/header.css";
import "../css/main.css";
import Activity from './Activity';
import Popup from './Popup';




import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all.js';

class Calendar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            daysActivities: [],
            showPopup: false
        };
        this.hours = [
            "08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00",
            "18:00", "19:00", "20:00", "21:00", "22:00", "23:00", "24:00"
        ];
        this.activities = [
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
        this.getDropSpot = (activityHours) => {
            const start = 8;
            const activityHeight = 130;
            const hours = activityHours.split("-");
            const startTime = hours[0].split(":");
            const endTime = hours[1].split(":");
            const startHour = Number(startTime[0]);
            const endHour = Number(endTime[0]);
            const startMin = Number(startTime[1]);
            const endMin = Number(endTime[1]);
            let durationHour = Math.abs(startHour - endHour);
            let durationMin = Math.abs(startMin - endMin);
            if (endMin - startMin) {
                durationHour--;
                durationMin = (60 - startMin) + endMin;
            }
            const heightMin = durationMin / 60 * activityHeight;
            const height = String((durationHour * activityHeight) + heightMin - 1) + "px";
            const topMin = startMin / 60 / .25;
            let dropSpotTime = String(startHour - start) + topMin;
            dropSpotTime = String(dropSpotTime);
            return [dropSpotTime, height]
        };

        this.getDropSpots = () => {
            this.activities.forEach((day, dayI) => {
                day.forEach(activity => {
                    const dropSpot = this.getDropSpot(activity.hour);
                    activity.dropSpot = "id" + dayI + dropSpot[0];
                    activity.height = dropSpot[1];
                });
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
            this.getDropSpots();
            const newDrops = [];
            for (let dI = 0; dI < 7; dI++) {
                const newDropsDay = [];
                propsHours.forEach((hour, hI) => {
                    for (let qI = 0; qI < 4; qI++) {
                        const id = "id" + dI + hI + qI;
                        let suitableSpot = false;

                        this.activities[dI].forEach((dayActivity, aI) => {
                            if (dayActivity.dropSpot === id) {
                                suitableSpot = this.activities[dI][aI];
                            }
                        })
                        const dropHour = hour.slice(0, 3);
                        const dropMin = qI ? qI * 15 : (String(qI) + 0)
                        const dropTime = `${dropHour}${dropMin}`;

                        newDropsDay.push(
                            <div onDrop={this.handleDropActivity} onDragOver={this.handleDragOverActivity} className="main__drop" id={id} key={id}>
                                {dropTime}
                                {suitableSpot ?
                                    <Activity handleDragStart={this.handleDragStartActivity} id={"acti" + id} key={"acti" + id} activity={suitableSpot}></Activity>
                                    : null}
                            </div>
                        )
                    }
                });
                newDrops.push(newDropsDay);
            }
            return newDrops
        };


        /* 
            HANDLERS
        */

        this.handleDropActivity = (e) => {
            e.preventDefault();
            var data = e.dataTransfer.getData("text");
            const draggedElement = document.getElementById(data);
            const parent = e.target;

            if (draggedElement && !(parent.childNodes.length > 1) && parent.id) {
                const draggedElementDropSpot = draggedElement.id.slice(4);
                this.activities.forEach((day, dI) => {
                    day.forEach((activity, aI) => {
                        if (activity.dropSpot === draggedElementDropSpot) {
                            const activityStartTime = parent.childNodes[0].textContent;

                            const pxI = activity.height.indexOf("px");
                            const height = activity.height.slice(0, pxI);
                            let hoursEnd = ((Number(height) + 1) / 32.5) / 4;
                            let minsEnd = hoursEnd % 1;
                            hoursEnd = hoursEnd - minsEnd;
                            minsEnd *= 60;
                            const hoursStart = Number(activityStartTime.slice(0, 2));
                            const minsStart = Number(activityStartTime.slice(3));

                            minsEnd += minsStart;
                            if (minsEnd >= 60) {
                                hoursEnd += hoursStart + 1;
                                minsEnd = minsEnd % 60;
                                if (minsEnd === 0)
                                    minsEnd = String(minsEnd) + 0;
                            } else {
                                hoursEnd += hoursStart;
                            }
                            const activityEndTime = `${hoursEnd}:${minsEnd}`;
                            activity.hour = activityStartTime + "-" + activityEndTime;

                            const parentDay = Number(parent.id.slice(2, 3))
                            if (parentDay !== dI) {
                                const transferActivity = activity;
                                this.activities[dI].splice(aI, 1)
                                this.activities[parentDay].push(transferActivity);
                            }

                            this.setState({
                                dropElements: this.createDropElements()
                            });

                        }
                    });
                });
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
            document.querySelectorAll(".main__drop").forEach(drop => {
                drop.classList.add("main__drop--active")
            })
        };

        this.handleBtnAddTask = () => {
            this.setState({
                showPopup: true,
            });
        };

        this.handleSave = () => {
            this.setState({
                dropElements: this.createDropElements()
            });
        }

        this.handlePopupSubmit = (e) => {
            if (this.selectedHourS && this.selectedMinuteS && this.selectedHourE && this.selectedMinuteE) {
                e.preventDefault();

                this.activities[this.selectedDay].push({
                    hour: `${this.selectedHourS}:${this.selectedMinuteS}-${this.selectedHourE}:${this.selectedMinuteE}`,
                    txt: this.writtenTask,
                    bgc: "var(--blueLight)",
                    like: true,
                });
                this.selectedHourS = null;
                this.selectedMinuteS = null;
                this.selectedHourE = null;
                this.selectedMinuteE = null;

                this.setState({
                    dropElements: this.createDropElements(),
                    showPopup: false
                });
            }

        };
        this.handlePopupTxt = (e) => {
            const task = e.target.value;
            this.writtenTask = task;
        }
        this.handlePopupSelectD = (e) => {
            const day = e.target.value;
            this.selectedDay = day;
        }

        this.handlePopupSelectHS = (e) => {
            const hour = e.target.value;
            this.selectedHourS = hour;
        }
        this.handlePopupSelectMS = (e) => {
            const minute = e.target.value;
            this.selectedMinuteS = minute;
        }
        this.handlePopupSelectHE = (e) => {
            const hour = e.target.value;
            this.selectedHourE = hour;
        }
        this.handlePopupSelectME = (e) => {
            const minute = e.target.value;
            this.selectedMinuteE = minute;
        }
    }

    componentWillMount() {
        this.hoursElements = this.createHours(false);
        this.setState({
            dropElements: this.createDropElements()
        });
        this.hoursElementsDescribed = this.createHours(true);
    }


    render() {
        console.log("render calendar");
        return (
            <div className="modal">
                {this.state.showPopup
                    ? <Popup
                        handleTxt={this.handlePopupTxt.bind(this)}
                        handleSelectD={this.handlePopupSelectD.bind(this)}
                        handleSelectHS={this.handlePopupSelectHS.bind(this)}
                        handleSelectMS={this.handlePopupSelectMS.bind(this)}
                        handleSelectHE={this.handlePopupSelectHE.bind(this)}
                        handleSelectME={this.handlePopupSelectME.bind(this)}
                        handleSubmit={this.handlePopupSubmit.bind(this)} >
                    </Popup> : null}
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
                            <a onClick={this.handleSave} href="/#" className="header__tool">
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
                                    {this.state.dropElements[0]}
                                </div>
                                {this.hoursElements}
                            </div>
                            <div className="main__day ">
                                <div className="main__wrapper--activity">
                                    {this.state.dropElements[1]}

                                </div>
                                {this.hoursElements}
                            </div>
                            <div className="main__day ">
                                <div className="main__wrapper--activity">
                                    {this.state.dropElements[2]}
                                </div>
                                {this.hoursElements}
                            </div>
                            <div className="main__day ">
                                <div className="main__wrapper--activity">
                                    {this.state.dropElements[3]}
                                </div>
                                {this.hoursElements}
                            </div>
                            <div className="main__day ">
                                <div className="main__wrapper--activity">
                                    {this.state.dropElements[4]}
                                </div>
                                {this.hoursElements}
                            </div>
                            <div className="main__day ">
                                <div className="main__wrapper--activity">
                                    {this.state.dropElements[5]}
                                </div>
                                {this.hoursElements}
                            </div>
                            <div className="main__day ">
                                <div className="main__wrapper--activity">
                                    {this.state.dropElements[6]}
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