import React from 'react'
import moment from 'moment'

const ProjectSummary =({project})=>{
    return(
        <div className="card z-depth-0 project-summary">
            <div className="card-content grey-text text-darken-3">
                <span className="card-title">{project.title}</span>
                <p>Posted By {project.authorFirstName} {project.authorLastName}</p>
                <p className="grey-text">{moment(project.createdAt.toDate().toString()).calendar()}</p>
            </div>
        </div>
    )
}
export default ProjectSummary

//toString() is used because toDate can't be shown directly in app

//npm install moment : this will help us to give a short date format...not like FRI Date time indian standard time long format

//for more formats of moment we can visit momentjs.com