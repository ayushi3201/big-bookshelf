import React from 'react'
import "./College.css";

const College = () => {
  return (
    <section className='college'>
      <div className='container'>
        <div className='section-title'>
          <h2>College</h2>
        </div>

        <div className='college-content grid'>
          <div className='college-img'>
            <img src = "https://images.shiksha.com/mediadata/images/1623317518phpjVsAy4.jpeg" alt = "clg img" />
          </div>
          <div className='college-text'>
            <h2 className='college-title fs-26 ls-1'>SRM University</h2>
            <p className='fs-17'>We plan to incorporate the university's e-library onto our platform by integrating 
            its database with our website's search functionality. This will allow students to easily browse through 
            the books available in the university's e-library directly from our platform. </p>
            <p className='fs-17'>Coming Soon!</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default College

