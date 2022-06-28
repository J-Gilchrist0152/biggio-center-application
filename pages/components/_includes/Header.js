import Image from "next/dist/client/image";

const Header = () => {
    return ( 
        <div className="col-12 header-container">
                <div id="gdpr">
                    <div className="alert row align-items-center" role="contentinfo">
                        <div className="col gdpr-content">
                            <h1 className="gdpr-title">Cookie Acknowledgement</h1>
                            <p className="gdpr-info">This website uses cookies to collect information to improve your browsing experience. Please review our 
                                <a href="//www.auburn.edu/privacy">Privacy Statement</a> for more information.
                            </p>
                        </div>
                        <div className="col-sm-4 gdpr-button">
                            <button aria-label="Close" className="close" data-dismiss="alert" id="cookieAcknowledge" type="button">
                                <span aria-hidden="true">I Understand</span>
                            </button>
                        </div>	
                    </div>
                </div>
                <div id="top" role="navigation" aria-label="Main navigation shortcuts">
                    <a href="#" data-bs-toggle="modal" data-bs-target="#au_navigation" className="skipto btn">Skip to Navigation</a>
                    <a href="#page_content" className="skipto btn">Skip to Content</a>
                </div> 
                <div className="site-header" role="banner" aria-label="Site header">
                    <div className="row align-items-center">
                        <div className="col-9 col-sm-4 col-md-5 col-xl-4 image header-logo">
                            <div className="header-logo">
                                <a href="">
                                    <img src="/_assets/logos/bc_informal_h_fullcolor.png" className="d-print-none" alt="Biggio Center Informal Logo"/> 
				                    <img src="/_assets/logos/bc_informal_H_onecolor_black.png" alt="Biggio Center Informal Logo Black" className="d-none d-print-block"/>	
                                </a>
                            </div>
                        </div>	
                        <div className="col-sm-3"></div>
                        <div className="row col-12 col-sm-5 links align-items-center d-print-none">
                            <a className="col" href="https://auburn.edu/academic/provost">Provost Office</a>
                            <a className="col" href="https://auaccess.auburn.edu/">AU Access</a>
                            <a id="search_btn1" href="#" className="col" data-bs-toggle="modal" data-bs-target="#au_search">Search</a>
                            <a id="search_btn2" href="#" className="col visually-hidden" data-bs-toggle="collapse" data-bs-target="#au_search2">Search</a>
                        </div>
                    </div>
                </div>
                <div className="modal fade au-search d-print-none" id="au_search" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-hidden="true">
                    <div className="modal-dialog modal-fullscreen">
                        <div className="modal-content">
                            <div className="modal-header">
                                <div className="image col-8 col-sm-4">
                                    <a href="https://www.auburn.edu">
                                        <img src="https://www.auburn.edu/template/2022/_assets/images/logos/auburn/formal_horiz/onecolor_white/auburn_formal_h_onecolor_white_web.png" alt="Auburn University logo"/> 
                                    </a>
                                </div>
                                <button type="button" className="nav-close" data-bs-dismiss="modal" aria-label="Close">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-x-circle-fill" viewBox="0 0 16 16"><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"/></svg>    
                                </button>
                            </div>
                            <div className="modal-body row align-items-center justify-content-center">
                                <div className="col-md-5">
                                    <div className="col-sm-12 row au-search-links" role="navigation" aria-label="Search links">                                    
                                        <div className="col"><a href="">Campus Map</a></div>
                                        <div className="col"><a href="">A-Z Index</a></div>
                                        <div className="col"><a href="">People Finder</a></div>                                    
                                    </div>                                    
                                    <div className="col-sm-12">                                   
                                        <form action="https://search.auburn.edu" className="" method="get">
                                            <input className="form-control form-control-lg searchfield" type="text" name="q" aria-label="Auburn University Search" role="search" placeholder="Search Auburn.edu"/>
                                            <input type="hidden" name="cx" value="006456623919840955604:pinevfah6qm"/>
                                            <input type="hidden" name="ie" value="utf-8"/>
                                            <input type="submit" className="visually-hidden-focusable" value="Search"/>
                                        </form>
                                    </div>	                                       
                                </div> 
                            </div>     
                        </div>
                    </div>
                </div>
        </div>
     );
}
 
export default Header ;