import phone from '/phone.jpg'
import './card.css'
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
                <div>Addis Ababa</div>
                <ul className="tags">
                    <li>Brand new</li>
                    <li>6.1 {'>'} inches</li>
                </ul>
            </div>
        </div>
    </> 
    );
}
 
export default Card;