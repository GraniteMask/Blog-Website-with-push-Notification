import React from 'react'
import moment from 'moment'

const Notifications=(props)=>{
    const {notifications} = props;
    return(
        <div className="section">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Notifications</span>
                    <ul className="notifications">
                        {notifications && notifications.map(item=>{
                            return(
                                <li key={item.id}>
                                    <span className="pink-text">
                                        {item.user} 
                                    </span>
                                    <span> {item.content}</span>
                                    <div className="grey-text note-date">
                                        {moment(item.time.toDate()).fromNow()}
                                    </div>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Notifications


//{notifications && notifications.map()} is used so that if first notification exists then it will execute map function

//npm install moment

//Don't forget to change rules for notifications