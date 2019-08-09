import React, { Component } from 'react';


class Activity extends Component {
    constructor(props) {
        super(props);
        this.state = {
            top: null,
            height: null
        }

        this.getTopHeight = (activityHours) => {
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

            const top = String((Math.abs(start - startHour) * activityHeight) + topMin - 1) + "px";

            const heightMin = durationMin / 60 * activityHeight;

            const height = String((durationHour * activityHeight) + heightMin - 1) + "px";
            return [top, height]
        };
        this.handleDragStart = this.props.handleDragStart;
        this.id = this.props.id;
    }





    componentWillMount() {
        const activity = this.props.activity;

        const topHeight = this.getTopHeight(activity.hour);
        const top = topHeight[0];
        const height = topHeight[1];

        this.setState({
            top: top,
            height: height
        })
    }
    render() {

        return (
            <div
                id={this.id}
                draggable="true"
                onDragStart={this.handleDragStart}
                className="main__activity" style={{ backgroundColor: this.props.activity.bgc, top: this.state.top, height: this.state.height }}>
                <span className="activity__hour">{this.props.activity.hour}</span>
                <p className="activity__p">{this.props.activity.txt}</p>
                {this.props.activity.like ? (<i className="far fa-smile activity__ico"></i>) : null}
                {this.props.activity.unlike ? (<span className="activity__ico">! <i className="far fa-frown"></i></span>) : null}
                <i className="far fa-times-circle activity__ico activity__ico--delete"></i>
            </div>

        )
    }

}
export default Activity;