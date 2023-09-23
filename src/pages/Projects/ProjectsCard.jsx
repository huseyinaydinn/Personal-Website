import React from 'react'
import { BiLinkExternal } from 'react-icons/bi'
import { AiOutlineArrowUp } from 'react-icons/ai'

function ProjectsCard({ cardData }) {
    return (
        <>
            <div className="card-container">
                <span className="projects_subtitle">{cardData.subtitle}</span>
                <article className="projects_card">
                    <img src={cardData.image} alt="projects image" className="projects_img" />

                    <div className="projects_modal">
                        <span className="project_details">View Details <AiOutlineArrowUp /></span>

                        <a href={cardData.codeUrl} target="_blank" rel="noopener noreferrer"><h2 className="projects_title">View on GitHub <BiLinkExternal /></h2></a>
                        {
                            cardData.useOnline ? <>
                                <a href={cardData.useOnline} target="_blank" rel="noopener noreferrer"><h2 className="projects_title">Use it Online <BiLinkExternal /></h2></a>
                            </> : <></>
                        }
                    </div>
                </article>
            </div>

        </>
    )
}

export default ProjectsCard;