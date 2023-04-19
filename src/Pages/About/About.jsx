import React from 'react';
import "./About.css";
import OurLogo from "../../images/OurLogo.png"

const About = () => {
  return (
    <section className='about'>
      <div className='container'>
        <div className='section-title'>
          <h2>About Us</h2>
        </div>

        <div className='about-content grid'>
          <div className='about-img'>
            <img src = {OurLogo} alt = "" />
          </div>
          <div className='about-text'>
            <h2 className='about-title fs-26 ls-1'>The BigBookShelf</h2>
            <p className='fs-17'>Amidst the pages of books and prose, a world of knowledge, a story unfolds.
    From classic tales to modern lore, the library's treasures, an endless store.</p>
            <p className='fs-17'>Our book recommendation and online library website is a platform where you can discover, explore, and access a world of books. 
            Join us on a literary journey and unlock a world of knowledge and imagination through the pages of our online library!</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About