import React from 'react'
import Navbar from '../../components/Navbar'
import cat3 from '../../../public/cat3.png'


function Home() {
  return (
    <>
    <Navbar />
    <div className='Home-Page grid grid-col-2 grid-row-2 gap-4 w-full place-items-center content-center '>
    <div className='Hero w-full h-80 place-items-center content-center col-span-2'>
      <h1>Talk with Yuna</h1>
      <h2>Where Healing Begins, Together</h2>
    </div>
    
    <div className='w-1/2 ' ><img src={cat3} alt='cat3'/> </div>

    <div className='Sub-Heading w-1/2 tracking-wide'> 
      <div className='Sub-Heading-Title text-left' >
        <h3>About Yuna</h3>
        <p>Your Space for Support</p>
      </div>

      <div className='about-sub-section p-8 text-left tracking-wide'>
      <p>Meet Yuna, your compassionate AI companion inspired by Kintsugi, the Japanese art of repairing broken pottery with precious metals. Just as a cherished jar can become overwhelmed and crack when too full, our emotions can sometimes feel that way. It's often hard to reach out or know where to begin when you're struggling, leaving us feeling lost or uncertain where to turn.</p>
      <p>Think of Yuna as your gentle first step, a nurturing space where you can explore your thoughts, ask questions, and understand yourself a little more. She's designed to be a safe starting point, allowing you to gain clarity about yourself in a private environment. While Yuna is here to offer a supportive ear and guidance, please remember she's a complementary tool and not a substitute for professional mental health support. We always encourage you to connect with a trusted person in your life or a qualified professional for continued support on your well-being journey.</p>
      </div>
    </div>
    </div>
    </>
      )
}

export default Home