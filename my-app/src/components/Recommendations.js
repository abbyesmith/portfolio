import React from 'react'
import RecommedationsCarousel from './RecommedationsCarousel'


const Recommendations = () => {
    return (
        <div className='testimonials'>
            <h1>Recommendations</h1>
            <div className='container'>
                <div className='testimonials-content'>
                    <RecommedationsCarousel/>
                </div>
            </div>
        
        </div>
    )
}

export default Recommendations
