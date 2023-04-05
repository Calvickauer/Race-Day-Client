import React from 'react';
import Inquiry from './Inquiry';

const Welcome = ({refreshNavbar}) => {
    return (
        <div>
        <div className='Home__page'>
            <h1>WRS Garage / Home / Spa Rental</h1>
        </div>
        <div className='Main__features'>
        <div className='Shop__container'>
            <h1>The Shop</h1>
            <div className='Shop__grid'>
            <div className='Shop__home'></div>
            <div className='Shop__info'>
                <p>C&C Auto Repair is a reputable auto repair shop in Monterey, California, specializing in European
                     makes and models like BMW, Mercedes-Benz, Audi, and Porsche. If you rent the property
                      in front, you’ll have access to an outdoor lift, which can be used to work on cars
                       or prep them for Laguna Seca Raceway events. With their experienced technicians,
                        state-of-the-art equipment, and commitment to customer satisfaction,
                         C&C Auto Repair is a top choice for high-quality auto repair and maintenance
                          services in Monterey.</p>
            </div>
            </div>
        </div>
        <div className='Home__container'>
            <h1>The Home</h1>
            <div className='Home__home'></div>
        </div>
        <div className='Spa__container'>
            <a href='/about'><h1>The Spa</h1></a>
            <div className='Spa__grid'>
            <div className='Spa__home'></div>
            <div className='Spa__info'>
                <p>This rental house boasts a luxurious spa that is connected to the property, providing guests with a relaxing and rejuvenating experience. The spa features a Hottub for soaking and unwinding, as well as an outdoor shower for rinsing off after a dip. Electric outdoor heating ensures that guests stay warm and comfortable even on chilly evenings, while refrigeration keeps drinks and snacks cool and refreshing. For added ambiance and warmth, there is an outdoor gas fire pit that is perfect for gathering around with loved ones. The high walls surrounding the spa provide a sense of privacy, creating a peaceful and intimate atmosphere that is ideal for rest and relaxation. Overall, this spa is the perfect addition to any vacation rental, offering guests a luxurious and serene experience in the comfort of their own home away from home.</p>
            </div>
            </div>
        </div>
        </div>
        <div className='Inquiry__home'>
            <Inquiry refreshNavbar={refreshNavbar} />
        </div>
        </div>
    )
}

export default Welcome;
