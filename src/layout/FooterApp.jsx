import React from 'react'
import { BsGithub,BsLinkedin,BsInstagram,BsFacebook } from "react-icons/bs";


const FooterApp = () => {

  return (

    <section className=' bg-slate-800 h-[120px] w-full'>
      <article>
      <div className='flex items-center justify-center text-white font-semibold py-5'>
      <p>Juan Pablo Andrujovich 2023</p>
      </div>
      <div className='flex items-center justify-center text-white gap-3 text-lg'>
        <a href="https://github.com/juanpablo1978" target="_blank">
        <button> 
          <BsGithub/>
        </button>
        </a>
        <a href="https://www.linkedin.com/in/juan-pablo-andrujovich-921386189/" target="_blank">
        <button>
          <BsLinkedin/>
        </button>
        </a>
        <a href="https://www.instagram.com/jp.andrujovich/" target="_blank">
        <button>
          <BsInstagram/>
        </button>
        </a>
        <a href="https://www.facebook.com/juanpablo.andrujovich" target="_blank">
        <button>
          <BsFacebook/>
        </button>
        </a>
        </div>
        </article>
      </section>
  )
}


export default FooterApp