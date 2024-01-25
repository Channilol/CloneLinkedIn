import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import "./JobsHeader.css"

const JobsHeader = () => {
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const [isOtherDropdownOpen, setOtherDropdownOpen] = useState(false);
    const [isSearchVisible, setIsSearchVisible] = useState(false);

    const searchRef = useRef(null)
    const navigate = useNavigate()

    const toggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen);
    };

    const toggleOtherDropdown = () => {
        setOtherDropdownOpen(!isOtherDropdownOpen);
    };

    const handleSearchIconClick = () => {
        setIsSearchVisible(!isSearchVisible);
    };

    useEffect(() => {
        const handleOutsideClick = (event) => {

            if (searchRef.current && !searchRef.current.contains(event.target)) {
                setIsSearchVisible(false);
            }
        };

        document.addEventListener('click', handleOutsideClick);

        return () => {
            document.removeEventListener('click', handleOutsideClick);
        };
    }, []);

    const dropdownRef = useRef(null)
    const otherDropdownRef = useRef(null)

    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setDropdownOpen(false);
            }

            if (otherDropdownRef.current && !otherDropdownRef.current.contains(event.target)) {
                setOtherDropdownOpen(false);
            }
        };

        document.addEventListener('click', handleOutsideClick);

        return () => {
            document.removeEventListener('click', handleOutsideClick);
        };
    }, [isDropdownOpen, isOtherDropdownOpen]);

    return (
        <header id="jobsHeader">
            <svg xmlns="http://www.w3.org/2000/svg" id="logoNavJobs" width="37" height="37" fill="#0a66c2" className="bi bi-linkedin" viewBox="0 0 16 16" onClick={() => navigate('/')}>
                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
            </svg>

            <div id="boxSeachNavJobs" ref={searchRef}>
                <div id="mainIconSearchJobs" onClick={handleSearchIconClick}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="404040" className="bi bi-search svgPointer" viewBox="0 0 16 16">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                    </svg>
                </div>
                <div id="iconSearchNavJobs">
                    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="#404040" className="bi bi-search svgPointer" viewBox="0 0 16 16">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                    </svg>
                </div>
                <input type="text" className='inputSearchNavJobs' placeholder="Cerca offerte di lavoro /..." onClick={handleSearchIconClick} />
                <div id="iconLocationNavJobs">
                    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="#404040" className="bi bi-geo-alt-fill svgPointer" viewBox="0 0 16 16">
                        <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
                    </svg>
                </div>
                <input type="text" id='inputLocationNavJobs' placeholder="Città, stato o CAP" onClick={handleSearchIconClick} />

                {isSearchVisible && (
                    <div id="boxSearchMobileJobs">
                        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="#404040" className="bi bi-search svgPointer" viewBox="0 0 16 16" id="iconSearchMobileJobs">
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                        </svg>
                        <input type="text" className="inputSearchMobileJobs" placeholder="Cerca offerte di lavoro /..." />
                        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="#404040" className="bi bi-geo-alt-fill svgPointer" viewBox="0 0 16 16"
                            id="iconLocationMobileJobs">
                            <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
                        </svg>
                        <input type="text" className='inputSearchMobileJobs' placeholder="Città, stato o CAP" style={{ marginLeft: "20px" }} />
                    </div>
                )}
            </div>
            <button id="buttonNav">Cerca</button>


            <nav id="navbarJobs">
                <div className="divNavJobs">
                    <svg onClick={() => navigate('/')} xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="#404040" className="bi bi-house-door-fill svgPointer" viewBox="0 0 16 16">
                        <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5" />
                    </svg>
                </div>
                <div className="divNavJobs">
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="#404040" className="bi bi-people-fill svgPointer" viewBox="0 0 16 16">
                        <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5.784 6A2.24 2.24 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.3 6.3 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5" />
                    </svg>
                </div>
                <div className="divNavJobs" id="divIconJobsActive">
                    <svg onClick={() => navigate('/jobspage')} xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="#404040" className="bi bi-briefcase svgPointer activeSvg" viewBox="0 0 16 16" id="svgIconActiveJobs">
                        <path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v8A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-8A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5m1.886 6.914L15 7.151V12.5a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5V7.15l6.614 1.764a1.5 1.5 0 0 0 .772 0M1.5 4h13a.5.5 0 0 1 .5.5v1.616L8.129 7.948a.5.5 0 0 1-.258 0L1 6.116V4.5a.5.5 0 0 1 .5-.5" />
                    </svg>
                </div>
                <div className="divNavJobs">
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="#404040" className="bi bi-chat-dots-fill svgPointer" viewBox="0 0 16 16">
                        <path d="M16 8c0 3.866-3.582 7-8 7a9 9 0 0 1-2.347-.306c-.584.296-1.925.864-4.181 1.234-.2.032-.352-.176-.273-.362.354-.836.674-1.95.77-2.966C.744 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7M5 8a1 1 0 1 0-2 0 1 1 0 0 0 2 0m4 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0m3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
                    </svg>
                </div>
                <div className="divNavJobs">
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="#404040" className="bi bi-bell-fill svgPointer" viewBox="0 0 16 16">
                        <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2m.995-14.901a1 1 0 1 0-1.99 0A5 5 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901" />
                    </svg>
                </div>

                <div id="sectionMenuNavJobs">
                    <div className="divIconsMenuNav">

                        <div className='dropdown-icon' onClick={toggleDropdown} ref={dropdownRef}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-person-circle svgPointer" viewBox="0 0 16 16">
                                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                                <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1" />
                            </svg>
                        </div>
                        {isDropdownOpen && (
                            <div className="customNavDropdown dropdown-content">

                                <div>
                                    <div className='firstSectionDropdown'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-person-circle svgPointer" viewBox="0 0 16 16">
                                            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                                            <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1" />
                                        </svg>
                                        <div className='textFirstSection'>
                                            <p className="NomeSectionDropdown">Nome Utente</p>
                                            <p>Titolo</p>
                                        </div>
                                    </div>
                                    <button className="buttonDropdown" onClick={() => navigate('/profile/me')}>Visualizza profilo</button>
                                </div>

                                <hr />
                                <h6 className="titleDropdown">Account</h6>
                                <ul>
                                    <li><a href="#" className="linkDropdown">Impostazioni e Privacy</a></li>
                                    <li><a href="#" className="linkDropdown">Guida</a></li>
                                    <li><a href="#" className="linkDropdown">Lingua</a></li>
                                </ul>
                                <hr />
                                <h6 className="titleDropdown">Gestisci</h6>
                                <ul>
                                    <li><a href="#" className="linkDropdown">Post e attività</a></li>
                                    <li><a href="#" className="linkDropdown">Account per la pubblicazione</a></li>
                                </ul>
                                <hr />
                                <p><a href="#" className="linkDropdown">Esci</a></p>
                            </div>
                        )}
                    </div>


                    <div className="divIconsMenuNav" id="borderContainerIconsNav">
                        <div className="dropdown-icon" onClick={toggleOtherDropdown} ref={otherDropdownRef}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="#404040" className="bi bi-grid-3x3-gap-fill svgPointer" viewBox="0 0 16 16">
                                <path d="M1 2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1zM1 7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1zM1 12a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1z" />
                            </svg>
                        </div>
                        {isOtherDropdownOpen && (
                            <div className="customNavDropdown dropdown-content">
                                <p className='notAvaible'>Al momento non disponibile</p>
                            </div>
                        )}
                    </div>
                </div>

            </nav>




        </header>
    )
}

export default JobsHeader;