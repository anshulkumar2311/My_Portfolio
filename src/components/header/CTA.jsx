import React from 'react'
// import CV from "../../assets/Anshul_Kumar_Resume.pdf"

const CTA = () => {
  return (
    <div className='cta'>
      {/* <a href={CV} download className='btn'>Download CV</a> */}
      <a href="https://drive.google.com/file/d/1FoO1ftF-XPEu61L2ldsjyKCj2MgxcDWT/view?usp=sharing" target='_blank' className='btn'>Download CV</a>
      <a href="#Contact" className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default CTA
