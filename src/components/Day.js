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
    const getTopHeight = (activityHours) => {
        console.log(activityHours)
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

        const topMin = startMin / 60 * activityHeight;

        const top = String((Math.abs(start - startHour) * activityHeight) + topMin) + "px";

        const heightMin = durationMin / 60 * activityHeight;

        const height = String((durationHour * activityHeight) + heightMin) + "px";
        return [top, height]
    };
    const createActivities = (propsAcitivities = props.activities) => {
        if (propsAcitivities) {

            propsAcitivities.forEach((activity, i) => {
                const topHeight = getTopHeight(activity.hour);
                const top = topHeight[0];
                const height = topHeight[1];
                acitivities.push(
                    <div key={i} className="main__activity" style={{ backgroundColor: activity.bgc, top: top, height: height }}>
                        <span className="activity__hour">{activity.hour}</span>
                        <p className="activity__p">{activity.txt}</p>
                        {activity.like ? (<i className="far fa-smile activity__ico"></i>) : null}
                        {activity.unlike ? (<span className="activity__ico">! <i className="far fa-frown"></i></span>) : null}
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