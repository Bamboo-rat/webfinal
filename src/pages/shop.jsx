import React from 'react';
import '../assets/css/shop.css'
import anh1 from '../assets/images/anh1.jpg';
import anh2 from '../assets/images/anh2.jpg';
import anh3 from '../assets/images/anh3.jpg';
import anh4 from '../assets/images/anh4.jpg';
import anh5 from '../assets/images/anh5.jpg';
import anh6 from '../assets/images/anh6.jpg';
import anh7 from '../assets/images/anh7.jpg';

const services = [
  { img: anh1, title: 'Hair Cut', price: '$10.00' },
  { img: anh2, title: 'Hair Wash', price: '$10.00' },
  { img: anh3, title: 'Hair Color', price: '$10.00' },
  { img: anh4, title: 'Hair Shave', price: '$10.00' },
  { img: anh5, title: 'Hair Straight', price: '$10.00' },
  { img: anh6, title: "Men's Facial", price: '$10.00' },
  { img: anh7, title: 'Shampoo', price: '$10.00' },
  { img: anh7, title: 'Wedding Style', price: '$10.00' }
];

function Shop() {
  return (
    <div className="ctn11">
      <div className="ctn1 container">
        {services.map((service, index) => (
          <div className="row" key={index}>
            <div className="col">
              <div className="anh1">
                <img src={service.img} alt="" className="shop" />
                <div className="haircut">
                  <h1>
                    <div className="haircut2">
                      {service.title}
                      <div className="anh1-chu">........................................................</div>
                      <div className={`anh1-chu${index + 1}`}>{service.price}</div>
                    </div>
                    <p>Their days lesser and every firmament</p>
                  </h1>
                </div>
              </div>
            </div>
            {index % 2 === 1 && <div className="cot"></div>}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Shop;
