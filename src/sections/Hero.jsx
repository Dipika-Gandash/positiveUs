import React from 'react'

const Hero = () => {
  return (
    <section className='bg-white pt-24' >
      <div className='max-w-7xl mx-auto p-4 flex flex-col-reverse lg:flex-row items-center gap-10'>

        <div className='flex-1 flex flex-col lg:items-start text-center lg:text-left'>
          <h1 className="text-4xl md:text-6xl font-display font-medium w-full lg:w-auto" >
            Navigating the <br /> digital landscape <br /> for success
          </h1>
           <p className="text-zinc-900 text-lg leading-7 mt-6 mb-8">
            Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.
          </p>
           <button className="bg-zinc-900 text-white text-xl px-8 py-5 border border-black rounded-xl hover:bg-white hover:text-black transition font-medium leading-7">
            Book a consultation
          </button>
        </div>

          <div className="flex-1 flex justify-center lg:justify-end">
          <img
            src="/images/heroImage.svg"
            alt="Hero"
            className="w-full h-auto "
          />
        </div>


      </div>

    </section>
  )
}

export default Hero