import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

const CarouselComponent = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };
    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <img

                    src="https://i.pinimg.com/originals/a8/b7/e5/a8b7e5777202854279879c62b35ce85b.jpg"
                    alt="First slide"
                    style={{ width: '100%', height: '500px' }}
                />
               
            </Carousel.Item>
            <Carousel.Item>
                <img

                    src="https://wallpaperaccess.com/full/462773.jpg"
                    alt="Second slide"
                    style={{ width: '100%', height: '500px' }}
                />
            </Carousel.Item>
            <Carousel.Item>
                <img

                    src="https://a-static.besthdwallpaper.com/flavors-of-pizza-wallpaper-2400x1350-43743_50.jpg"
                    alt="Third slide"
                    style={{ width: '100%', height: '500px' }}
                />
            </Carousel.Item>
        </Carousel>
    )
}

export default CarouselComponent 