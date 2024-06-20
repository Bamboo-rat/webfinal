import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../assets/css/carousel.css';
import scroll1 from "../assets/images/scroll1.jpg"
import scroll2 from "../assets/images/scroll2.jpg"
import scroll3 from "../assets/images/scroll3.jpg"
import scroll4 from "../assets/images/scroll4.jpg"
import scroll5 from "../assets/images/scroll5.jpg"
import scroll6 from "../assets/images/scroll6.jpg"
import scroll7 from "../assets/images/scroll7.jpg"
import scroll8 from "../assets/images/scroll8.jpg"
import scroll9 from "../assets/images/scroll9.jpg"

const Carousel = () => {

    const settings = {
        dots: false, // Ẩn các chấm điều hướng
        infinite: true, // Vô hạn lặp lại các hình ảnh
        speed: 2000, // Tốc độ chuyển ảnh (milliseconds)
        slidesToShow: 3, // Số lượng hình ảnh hiển thị trên mỗi lần trượt
        slidesToScroll: 1, // Số lượng hình ảnh trượt mỗi lần
        autoplay: true, // Tự động chạy carousel
        autoplaySpeed: 0, // Tốc độ chuyển động (milliseconds)
        cssEase: 'linear', // Hiệu ứng chuyển động tuyến tính
        pauseOnHover: false, // Tạm dừng khi di chuột lên
        arrows: false, // Ẩn các mũi tên điều hướng
        vertical: false, // Carousel di chuyển theo chiều dọc
        verticalSwiping: false, // Di chuyển theo chiều dọc khi vuốt
        draggable: false, // Không cho phép kéo thả
        touchMove: false, // Không cho phép chạm để di chuyển
      };

  const images = [
    scroll1,scroll2,scroll3,scroll4,scroll5,scroll6, scroll7, scroll8,scroll9
  ];

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`Image ${index + 1}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Carousel;
