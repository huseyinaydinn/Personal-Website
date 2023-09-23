import React, { useState } from 'react';
import data from './data.json';
import ProjectsCard from './ProjectsCard'
import ReactPaginate from 'react-paginate'

function Projects() {

    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage = 12

    const endOffset = itemOffset + itemsPerPage;
    const currentItems = data.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(data.length / itemsPerPage);

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % data.length;
        setItemOffset(newOffset);
    };


    return (
        <div>
            <section className="projects section" id="projects">
                <h3 className="section_subtitle">
                    <span>My Projets</span>
                </h3>

                <h2 className="section_title">Recent Projects</h2>

                <div className="projects_container container grid">
                    {
                        currentItems.map((item) => {
                            return (
                                <ProjectsCard key={item.id} cardData={item} />
                            )
                        })
                    }

                </div>
                <ReactPaginate
                    breakLabel="..."
                    nextLabel="next"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={5}
                    pageCount={pageCount}
                    previousLabel="previous"
                    renderOnZeroPageCount={null}
                    containerClassName="pagination"
                    pageLinkClassName="page-num"
                    previousLinkClassName="page-num"
                    nextLinkClassName="page-num"
                    activeClassName="active"
                />
            </section>
        </div>
    );
}

export default Projects;