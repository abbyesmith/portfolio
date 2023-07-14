import React from 'react'
import RecommedationsCarousel from './RecommedationsCarousel'


const Recommendations = () => {
    return (
        <div id = "references" className='testimonials'>
            <h1>References</h1>
            <div className='container'>
                <div className='testimonials-content'>
                    <RecommedationsCarousel/>
                </div>
            </div>
        
        </div>
    )
}

export default Recommendations
