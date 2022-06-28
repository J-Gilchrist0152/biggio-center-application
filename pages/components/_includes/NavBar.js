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
                <a className="nav-link" href="./index.js" role="button" aria-expanded="false">
                    Home
                </a>
                </li>   
                <li className="nav-item">
                <a id="whoDropdown" className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Who We Are</a>
                <ul className="dropdown-menu" aria-labelledby="whoDropdown">
                    <li><a className="dropdown-item" href="#">Mission Statement</a></li>
                    <li><a className="dropdown-item" href="#">Auburn Online</a></li>
                    <li><a className="dropdown-item" href="#">Biggio Tech</a></li>
                    <li><a classname="dropdown-item" href="#">Teaching Services</a></li>
                    <li><a classname="dropdown-item" href="#">Testing Services</a></li>
                </ul>
                </li>  
                <li className="nav-item ">
                <a id="programDropdown" className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    What We Offer
                </a>
                <ul className="dropdown-menu" aria-labelledby="programDropdown">
                    <li><a className="dropdown-item" href="./programs/professional-development-program.js">Professional Development Programs</a></li>
                    <li><a className="dropdown-item" href="#">Educational Development Programs</a></li>
                    <li><a className="dropdown-item" href="#">Grant & Funding Opportunities</a></li>
                    <li><a classname="dropdown-item" href="#">Testing Services</a></li>
                    <li><a classname="dropdown-item" href="#">Instructional Technology</a></li>
                    <li><a classname="dropdown-item" href="#">Learning Experience & Design</a></li>
                </ul>
                </li> 
            </ul>
            </div>
        </div>
        </nav>
     );
}
 
export default NavBar;