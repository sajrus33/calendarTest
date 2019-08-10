import React from 'react';


const Activity = props => {


    return (
        <div
            id={props.id}
            draggable="true"
            onDragStart={props.handleDragStart}
            className="main__activity" style={{ backgroundColor: props.activity.bgc, height: props.activity.height }}>
            <span className="activity__hour">{props.activity.hour}</span>
            <p className="activity__p">{props.activity.txt}</p>
            {props.activity.like ? (<i className="far fa-smile activity__ico"></i>) : null}
            {props.activity.unlike ? (<span className="activity__ico">! <i className="far fa-frown"></i></span>) : null}
            <i className="far fa-times-circle activity__ico activity__ico--delete"></i>
        </div>

    )

}
export default Activity;