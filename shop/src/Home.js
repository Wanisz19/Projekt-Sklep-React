import React from 'react'
import './Home.css';
import tlo from './photos/tlo.jpg'
import telefon from './photos/telefon.jpg'
import telefon2 from './photos/telefon2.jpg'
import hulajnoga from './photos/hulajnoga.jpg'
import dron from './photos/dron.jpg'
import laptop from './photos/laptop.jpg'
import czytnik from './photos/czytnik.jpg'
import Product from './Product';


export default function Home() {
    
    return (
        <div className='home'>
            <div className='home_container'>
                <img
                 className="home_image"
                 src={tlo}
                 alt=''>
                 </img>

                 <div className="home_row">
                    <Product title='Iphone 13, 64g' price={5000} image ={telefon} rating={5.0} id={0}/>
                    <Product title= 'Samsung Galaxy x8, 64g' price={4000} image={telefon2} rating={4.85} id={1}/>
                 </div>

                 <div className="home_row">
                    <Product title= 'Huwawei mate book 14' price={3000} image={laptop} rating={4.5} id={2}/>
                    <Product title= 'E-Book reader' price={500} image={czytnik} rating={4,75} id={3}/>
                    
                 </div>

                 <div className="home_row">
                   <Product title= 'Huwawei scooter' price={100} image={hulajnoga} rating={4.0} id={4}/>
                    <Product title= 'Drone DJI mavic 3 fly' price={7000} image={dron} rating={5.0} id={5}/> 
                 </div>
                 
            </div>
        </div>
    )
}
