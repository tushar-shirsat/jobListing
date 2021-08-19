import React from 'react'
import MoreVertIcon from '@material-ui/icons/MoreVert';

const JobCard = ({companyLogo,jobTitle,shortDesc,companyName,location,estimatedSalary,postedDate}) => {
    return (
        <div className="job-card">
            <div className="job-card__left">
                <div className="job-card__left__img-container">
                    <img className="img-container__image" src={companyLogo} alt={companyName} />
                </div>
            </div>
            <div className="job-card__right">
                <div className="job-card__right-top">
                    <h2 className="job-card__right-title">{jobTitle}</h2>
                    <MoreVertIcon style={{fontSize: '20px', color: "lightgray"}}/>
                </div>
                <div className="job-card__right-company-detail">
                    <p className="job-card__right-company-name">{companyName}</p>
                    <p className="job-card__right-company-location">{location}</p>
                </div>
                <div className="job-card__right-company-desc">{shortDesc}</div>
                <div className="job-card__right-bottom">
                    <p className="job-card__right-salary">{estimatedSalary}</p>
                    <div className="job-card__right-post-container">
                        {
                            +postedDate.split('d')[0] <= 7 && <p className="new-job">new</p>
                        }
                        <p className="job-post-date">{postedDate}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default JobCard
