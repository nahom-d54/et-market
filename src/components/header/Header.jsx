import './header.css'
const Header = () => {
    return ( 
        <>
        <header>
            <div className="brand">
                {/* optionally logo */}
                <h3>
                Site Name
                </h3>
            </div>
            <nav>
                <ul>
                    <li><p>My Messages</p></li>
                    <li className='profile'>
                        <div className="img"><span>N</span></div>
                        Profile
                    </li>
                    <li className="special"><a href="" className="btn">Sell</a></li>
                </ul>
            </nav>
        </header>
        </>
     );
}
 
export default Header;