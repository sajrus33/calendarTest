import React from 'react';


const Day = props => {

    const hours = [];
    const acitivities = [];

    const createHours = (propsHours = props.hours) => {
        propsHours.forEach((hour, i) => {
            hours.push(
                <div key={i} className="main__element main__element--hour">{hour}</div>
            )
        });
        console.log("hours creating")
    };

    const createActivities = (propsAcitivities = props.activities) => {
        if (propsAcitivities) {
            propsAcitivities.forEach(activity => {
                // top: calc(130px * 0.5);
                // height: calc((-1px) + 130px * 0.75);
                acitivities.push(
                    <div className="main__activity main__activity--blueL" style={{}}>
                        <span className="activity__hour">{activity.hour}</span>
                        <p className="activity__p">{activity.txt}</p>
                        {activity.like ? (<i className="far fa-smile activity__ico"></i>) : null}
                        <i className="far fa-times-circle activity__ico activity__ico--delete"></i>
                    </div>
                )
            });
            console.log("activities creating")

        }
    };
    createHours();
    createActivities();

    return (
        <div className="main__day ">
            <div className="main__wrapper--activity">
                {acitivities}
            </div>
            {hours}
        </div>
    )
}
export default Day;