import './header.css'
const Header = () => {
    return ( 
        <>
        <header>
            <div className="brand">
                <h3>
                Site Name
                </h3>
                {/* optionally logo */}
            </div>
            <nav>
                <ul>
                    <li>My messages</li>
                    <li className='profile'>
                        <div className="img"></div>
                        Profile
                    </li>
                    <li className="special btn">Sell</li>
                </ul>
            </nav>
        </header>
        </>
     );
}
 
export default Header;