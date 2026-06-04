
//declare a function to define a component
export function Footer(props) {


    //this function returns the elements (JSX)
    //that make up the component
    return (
        <footer>
            <nav className="navbar navbar-expand">
                <div className="container-fluid">
                    <div className="collapse navbar-collapse">
                        <ul className="nav navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" href="student-home.html">
                                    <p>Home</p>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="student-search.html">
                                    <p>Search Programs</p>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="student-saved.html">
                                    <p>Saved Programs</p>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="login.html">
                                    <p>Log In</p>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </footer>
    );
}


