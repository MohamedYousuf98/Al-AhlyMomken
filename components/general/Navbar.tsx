'use client';
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Offcanvas, Button, Accordion } from 'react-bootstrap';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faCaretRight } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';

// Styled components
const NavbarContainer = styled.nav`
  .navbar-nav .nav-link {
    color: #5D6160;
    font-weight: 500;
    align-items: center;
    justify-content: center;
    font-size: 17px;
  }

  .navbar-nav .nav-link.active {
    color: #171D1C;
    font-size: 17px;
    font-weight: 700;
  }

  .navbar-nav .nav-link:hover {
    color: #171D1C;
  }

  .dropdown-menu {
    background-color: transparent;
    border: none;
    box-shadow: none;
  }

  .dropdown-item {
    color: #171D1C;
    text-decoration: none;
    background-color: #ffffff;
    margin-top: 2px;
    font-weight: 500;
    font-size:13px;

  }

  .dropdown-item:hover {
    color: #5D6160;
  }

  .btn-link {
    color: #000;
    font-size: 15px;
  }

  .btn-link:hover {
    color: #000;
    background-color: transparent;
  }

  .btn-link:focus {
    color: #000;
    background-color: transparent;
    font-size: 15px;
  }

  .navbar-toggler {
    border: none;
    background: none;
    color: #000; /* Black text */
  }

  .search-input {
    font-size: 20px;
    cursor: pointer;
    transition: opacity 0.3s ease;
    margin-right: 15px;
  }

  .navbar-dropdown-items {
    color: #5D6160;
    text-decoration: none;
    font-weight: 500;
    background-color: transparent;
    font-size: 17px;
    border: none;
    margin-top: 1px;
  }

  .navbar-dropdown-items:hover {
    background-color: transparent;
    color: #171D1C;
  }

  .navbar-dropdown-items:focus {
    color: #000;
    background-color: transparent;
  }

  .contact-button {
    background-color: #00816D;
    border: #00816D;
    padding: 15px 25px;
    font-size: 15px;
    border-radius: 84px;
    color: #ffffff;
    font-weight: 500;
    display: inline-block;
    white-space: nowrap;
  }

  .contact-button:hover {
    color: #000000;
  }

  .contact-button:focus {
    background-color: #00816D;
  }

  .language-select {
    border: none;
    font-size: 16px;
    font-weight: 600;
  }

  .language-select:focus {
    border: none;
  }

  .p-100 {
    padding-left: 100px;
    padding-right: 100px;
  }

  .navbar {
    background-color: #ffffff;
    box-shadow: 8px 8px 8px rgba(186, 178, 178, 0.3);
    padding-top: 18px;
    padding-bottom: 18px;
  }

  .search-icon {
    background-color: transparent;
    color: #000;
    border: none;
    font-size: 18px;
    margin: 0 7px;
  }

  .search-icon:hover {
    background-color: transparent;
    color: #000;
    border: none;
    font-size: 17px;
  }

  .dropdown-menu {
    display: flex; 
    flex-direction: column; 
    background-color: #ffffff;
    padding: 10px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    margin-top:33px;
    border-radius:24px;
  }
   
  .dropdown-columns {
    display: flex; 
    justify-content: space-between; 
    flex-direction:row;
  }

  .dropdown-column {
    flex: 1;
    padding: 25px;
  }

  .dropdown-column-title {
    font-weight: 500;
    font-size: 12px;
    margin-bottom: 10px;
    color: #5D6160;
  }

  .dropdown-image {
    text-align: center;
    margin-top: 20px;
  }

  .dropdown-image img {
    width: 100%;
    height: 100px;
    width:94%;
    border-radius:10px;
  }

  .navbar-brand img {
    max-width: 100px; 
    height: 35px;
  }

  .dropdown-column-business {
    flex: 1;
    padding: 10px;
  }

  .dropdown-columns-business {
    display: flex; 
    justify-content: space-between; 
  
  }
`;

const Navbar: React.FC = () => {
  const [dropdown, setDropdown] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [showOffcanvas, setShowOffcanvas] = useState<boolean>(false);
  const searchInputRef = useRef<HTMLInputElement>(null);

  const handleDropdownToggle = (menu: string) => {
    setDropdown(dropdown === menu ? null : menu);
  };

  const toggleOffcanvas = () => setShowOffcanvas(!showOffcanvas);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Set initial state

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleDocumentClick = (event: MouseEvent) => {
      if (
        searchInputRef.current &&
        event.target !== searchInputRef.current &&
        !searchInputRef.current.contains(event.target as Node)
      ) {
        searchInputRef.current.style.display = 'none';
      }
    };

    document.addEventListener('click', handleDocumentClick);

    return () => document.removeEventListener('click', handleDocumentClick);
  }, []);

  useEffect(() => {
    const handleDocumentClick = (event: MouseEvent) => {
      const target = event.target as Element;
      if (!target.closest('.dropdown-menu') && !target.closest('.navbar-dropdown-items')) {
        setDropdown(null);
      }
    };

    document.addEventListener('click', handleDocumentClick);

    return () => document.removeEventListener('click', handleDocumentClick);
  }, []);

  const toggleSearch = () => {
    if (searchInputRef.current) {
      if (
        searchInputRef.current.style.display === 'none' ||
        searchInputRef.current.style.display === ''
      ) {
        searchInputRef.current.style.display = 'block';
        searchInputRef.current.focus();
      } else {
        searchInputRef.current.style.display = 'none';
      }
    }
  };

  const handleSearchKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && searchInputRef.current) {
      event.preventDefault();
    }
  };
  return (
    <NavbarContainer className="navbar navbar-expand-lg ">
      <div className="container-fluid navbar fixed-top p-100">
        <Link href="/" className="navbar-brand">
          <img src="/NavbarLogo.png" alt="Logo" />
        </Link>

        {/* Desktop Menu */}
        {!isMobile && (
          <div className="navbar-nav mx-auto">
            <Link href="/" className="nav-link active">Home</Link>
            <Link href="/consumer" className="nav-link">Consumer</Link>
            <div className="dropdown">
            <Button
  className="btn dropdown-toggle navbar-dropdown-items"
  type="button"
  id="dropdownCompany"
  aria-expanded={dropdown === 'company'}
  onClick={() => handleDropdownToggle('company')}
>
  Company
</Button>
{dropdown === 'company' && (
      <div className="dropdown-menu show">
        <div className="dropdown-columns">
          <div className="dropdown-column">
            <div className="dropdown-column-title">PAYMENT SOLUTION</div>
            <Link href="/momkenpay" className="dropdown-item"> <FontAwesomeIcon icon={faCaretRight} /> Momken Pay</Link>
            <Link href="/momkenapp" className="dropdown-item"> <FontAwesomeIcon icon={faCaretRight} /> Momken App</Link>
            <Link href="/pos" className="dropdown-item"> <FontAwesomeIcon icon={faCaretRight} /> Point of Sale</Link>
       
          </div>
          <div className="dropdown-column">
            <div className="dropdown-column-title">INDUSTRY</div>
            <Link href="/government" className="dropdown-item">Government</Link>
            <Link href="/utilities" className="dropdown-item">Utilities</Link>
            <Link href="/education" className="dropdown-item">Education</Link>
            <Link href="/charity" className="dropdown-item">Charity</Link>
            <Link href="/microfinance" className="dropdown-item">Microfinance</Link>
          </div>
          <div className="dropdown-column mt-4">
            <Link href="/businesscollection" className="dropdown-item">Business Collection</Link>
            <Link href="/clubs" className="dropdown-item">Clubs</Link>
            <Link href="/transportation" className="dropdown-item">Transportation</Link>
            <Link href="/banking" className="dropdown-item">Banking</Link>
          </div>
        </div>
        <div className="dropdown-image mt-1">
          <img src="/DropdownImg.jpeg" alt="Dropdown Image" />
        </div>
      </div>
    )}

            </div>
            <div className="dropdown">
              <Button
                className="btn dropdown-toggle navbar-dropdown-items"
                type="button"
                id="dropdownBusiness"
                aria-expanded={dropdown === 'business'}
                onClick={() => handleDropdownToggle('business')}
              >
                Business
              </Button>
              {dropdown === 'business' && (
                <div className="dropdown-menu show dropdown-columns">
                  <div className="dropdown-column-business">
                  <Link href="/" className="dropdown-item">
                      <FontAwesomeIcon icon={faCaretRight} />  Our Story
                    </Link>
                    
                  </div>
                  <div className="dropdown-column-business">
                    <Link href="/" className="dropdown-item"> Media & Press</Link>
                    <Link href="/" className="dropdown-item ">News</Link>
                    <Link href="/" className="dropdown-item">Podcasts & Magazines</Link>
                 
                  </div>
                  <div className="dropdown-column-business">
                    <Link href="/" className="dropdown-item">  <FontAwesomeIcon icon={faCaretRight} /> Careers</Link>
                 
                  </div>
                </div>
              )}
            </div>
            <Link href="/" className="nav-link">Store Locator</Link>
          </div>
        )}

        {/* Right Side (Desktop) */}
        {!isMobile && (
          <div className="navbar-nav ml-auto">
            <Link href="/contact">
              <Button className="contact-button">Contact Us</Button>
            </Link>
            <Button className="btn search-icon" onClick={toggleSearch}>
              <FontAwesomeIcon icon={faSearch} className="search-icon" />
            </Button>
            <form id="searchForm" onSubmit={(e) => e.preventDefault()}>
              <input
                type="text"
                className="search-input"
                placeholder="Search.."
                id="searchInput"
                ref={searchInputRef}
                onKeyPress={handleSearchKeyPress}
              />
            </form>
            <select className="language-select">
              <option>EN</option>
              <option>AR</option>
            </select>
          </div>
        )}

        {/* Mobile Navbar */}
        <nav className="navbar-mobile navbar-expand-md d-lg-none">
          <Button className="navbar-toggler" onClick={toggleOffcanvas}>
            <span className="navbar-toggler-icon"></span>
          </Button>

          <Offcanvas show={showOffcanvas} onHide={toggleOffcanvas}>
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>Menu</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Accordion>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Home</Accordion.Header>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>Consumer</Accordion.Header>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>Company</Accordion.Header>
                  <Accordion.Body>
                    <Link href="/" className="nav-link">Option 1</Link>
                    <Link href="/" className="nav-link">Option 2</Link>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header>Business</Accordion.Header>
                  <Accordion.Body>
                    <Link href="/" className="nav-link">Option 1</Link>
                    <Link href="/" className="nav-link">Option 2</Link>
                  </Accordion.Body>
                  <Accordion.Item eventKey="4">
                  <Accordion.Header>Map Locator</Accordion.Header>
                </Accordion.Item>
                </Accordion.Item>
              </Accordion>
            </Offcanvas.Body>
          </Offcanvas>
        </nav>
      </div>
    </NavbarContainer>
  );
};

export default Navbar;
