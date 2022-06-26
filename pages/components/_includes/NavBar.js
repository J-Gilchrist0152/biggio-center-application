const NavBar = () => {
    return ( 
        <nav role="navigation" aria-label="Page and section navigation" className="sec-nav navbar navbar-expand-xl navbar-light" name="Section navigation">
        <div className="image-brand"></div>	
        <div className="container-fluid">
            <div className="navbar-brand">
                <span className="d-block d-xl-none">Menu</span>
                <span className="d-none d-sm-block"></span>
            </div>  
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle page / section navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav justify-content-start flex-grow-1 pe-3">   
                <li className="nav-item">
                <a className="nav-link" href="" role="button" aria-expanded="false">
                    Home
                </a>
                </li>   
                <li className="nav-item">
                <a className="nav-link" href="" role="button" aria-expanded="false">Who We Are</a>
                </li>  
                <li className="nav-item ">
                <a className="nav-link" href="" role="button"  aria-expanded="false">
                    What We Offer
                </a>
                </li> 
            </ul>
            </div>
        </div>
        </nav>
     );
}
 
export default NavBar;