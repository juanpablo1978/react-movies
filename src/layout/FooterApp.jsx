import React from 'react'
import { BsGithub,BsLinkedin,BsInstagram,BsFacebook } from "react-icons/bs";


const FooterApp = () => {

  return (

    <section className=' bg-slate-800 h-[120px] w-full'>
      <article>
      <div className='flex items-center justify-center text-white font-semibold py-5'>
      Juan Pablo Andrujovich
      </div>
      <div className='flex items-center justify-center text-white gap-3 text-lg'>
        <button>
          <BsGithub/>
        </button>
        <button>
          <BsLinkedin/>
        </button>
        <button>
          <BsInstagram/>
        </button>
        <button>
          <BsFacebook/>
        </button>
        </div>
        </article>
      </section>
  )
}


export default FooterApp