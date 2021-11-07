import React from 'react'
import './Home.css';
import tlo from './photos/tlo.jpg'
import buty from './photos/buty.jpg'
import jamnik from './photos/jamnik.jpg'
import toyota from './photos/toyota.jpg'
import krzeslo from './photos/krzeslo.jpg'
import kebab from './photos/kebab.jpg'
import telewizor from './photos/telewizor.jpg'
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
                    <Product title='buty na podeszfiee z keczupu' price={29.99} image ={buty} rating={5.0} id={0}/>
                    <Product title= 'toyota fajna tylko troche droga' price={5000} image={toyota} rating={5.0} id={1}/>
                 </div>

                 <div className="home_row">
                    <Product title= 'telewizor na nudne wieczory z piwkiem' price={500} image={telewizor} rating={2.0} id={2}/>
                    <Product title= 'zjedz se kebsa jak glod wali w drzwi' price={10.0} image={kebab} rating={1.0} id={3}/>
                    <Product title= 'krzeslo fajne i wygodne' price={100} image={krzeslo} rating={4.0} id={4}/>
                 </div>

                 <div className="home_row">
                    <Product title= 'Jamniczek do przytulania' price='bezcenny' image={jamnik} rating={5.0} id={5}/> 
                 </div>
                 
            </div>
        </div>
    )
}
