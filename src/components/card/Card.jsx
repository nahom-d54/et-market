import phone from '/phone.jpg'
import './card.css'
import { FaLocationArrow, FaMap, FaMapMarker, FaMapMarkerAlt} from 'react-icons/fa'
const Card = () => {
    return (
    <>
        <div className="card">
            <div className="img-container">
                <img src = {phone} alt="" />
            </div>
            <div className="card-items">
                <p className='price'>ETB 9000</p>
                <p className="name">I-phone 7</p>
                <p className="discription">I phone 7 slightly used almost new</p>
                <div className='location'><FaMapMarkerAlt/> Addis Ababa</div>
                <ul className="tags">
                    <li className='tag'>Brand new</li>
                    <li className='tag'>6.1 {'>'} inches</li>
                </ul>
            </div>
        </div>
    </> 
    );
}
 
export default Card;