import { Helmet } from "react-helmet";
import Card from "../components/Card.jsx";
import { useState, useEffect } from 'react';
import axios from 'axios';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import '../css/ideas.css';

export default function Ideas() {
  const [ideas, setIdeas] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [totalIdeas, setTotalIdeas] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(10);
  const [sortBy, setSortBy] = useState('-published_at');

  useEffect(() => {
    axios.get('https://suitmedia-backend.suitdev.com/api/ideas', {
      params: {
        'page[number]': currentPage,
        'page[size]': perPage,
        'sort': sortBy
      }
    })
    .then(res => {
      setIdeas(res.data.data);
      setTotalPages(res.data.meta.last_page);
      setTotalIdeas(res.data.meta.total)
    })
    .catch(error => {
      console.error('Error fetching ideas:', error);
    });
  }, [perPage, sortBy, currentPage]);

  const pageNumbers = [];
  for (let i = currentPage - 2; i <= currentPage + 2; i++) {
    if (i > 0 && i <= totalPages) {
      pageNumbers.push(i);
    }
  }
  const handlePageChange = (pageValue) => {
    setCurrentPage(pageValue);
  }
  const handlePerPageChange = (perPageValue) => {
    setPerPage(perPageValue);
    setCurrentPage(1);
  };
  const handleSortByChange = (sortOption) => {
    setSortBy(sortOption);
  };
  
  return (
    <main id="ideas">
      <Helmet>
        <title>List of Ideas</title>
      </Helmet>
      <div className="container pt-5 pb-5">
        <div className="row mb-3 justify-content-end align-items-center">
          <div className="col">Showing {(currentPage-1) * perPage + 1}-{Math.min((currentPage * perPage),totalIdeas)} of {totalIdeas}</div>
          <div className="col-lg-auto">Show per page</div>
          <div className="col-lg-auto">
            <DropdownButton id="dropdown-basic-button" title={perPage}>
              <Dropdown.Item onClick={() => handlePerPageChange(10)}>10</Dropdown.Item>
              <Dropdown.Item onClick={() => handlePerPageChange(20)}>20</Dropdown.Item>
              <Dropdown.Item onClick={() => handlePerPageChange(50)}>50</Dropdown.Item>
            </DropdownButton>
          </div>
          <div className="col-lg-auto">Sort by</div>
          <div className="col-lg-auto">
            <DropdownButton id="dropdown-basic-button" title={sortBy === "published_at" ? "Oldest" : "Newest"}>
              <Dropdown.Item onClick={() => handleSortByChange('-published_at')}>Newest</Dropdown.Item>
              <Dropdown.Item onClick={() => handleSortByChange('published_at')}>Oldest</Dropdown.Item>
            </DropdownButton>
          </div>
        </div>
        <div className="row justify-content-center">
          {ideas.map((idea, index) => (
            <div className="col-lg-3 col-md-6 mb-4" key={idea.id}>
              <Card
                id={idea.id}
                title={idea.title}
                text={idea.published_at}
                image={index % 2 === 0 ? "asset/gambar1.jpg" : "asset/gambar2.jpg"}
              />
            </div>
          ))}
        </div>
        <div className="row">
          <div className="col-12">
            <nav aria-label="Page navigation">
              <ul className="pagination justify-content-center">
                <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                  <button className="page-link" onClick={() => handlePageChange(currentPage - 1)}>Previous</button>
                </li>
                {pageNumbers.map((page) => (
                  <li className={`page-item ${currentPage === page ? 'active' : ''}`} key={page}>
                    <button className="page-link" onClick={() => handlePageChange(page)}>{page}</button>
                  </li>
                ))}
                <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                  <button className="page-link" onClick={() => handlePageChange(currentPage + 1)}>Next</button>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </main>
  );
}
