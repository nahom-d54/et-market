import './hero.css'
import Search from '../../components/search/Search'
import Products from '../../components/Products'
const Hero = () => {
    return ( 
    <>
        {/* <img className='hero-img' src={marketBg} alt="" /> */}
        <div className="hero-img" style={{height: '80vh',width: '100%',display:"grid",placeItems:"center"}}>

        <Search style={{position:'absolute',top:'40%',width: '70vw'}}/>
        </div>
        <h1 style={{margin:'30px'}}>Latest Ads</h1>
        <Products/>
    </> 
    );
}
 
export default Hero;