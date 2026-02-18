import React from 'react'

const Companies = () => {
    const companies = [
  "/companies/amazonLogo.svg",
  "/companies/dribbleLogo.svg",
  "/companies/hubspotLogo.svg",
  "/companies/netflixLogo.svg",
  "/companies/notionLogo.svg",
  "/companies/zoomLogo.svg",
];
  return (
    <section className='bg-white py-12 px-4 mt-4'>
        <div className='max-w-7xl mx-auto'>
        <div className='grid grid-cols-2 gap-1 md:gap-6 justify-items-center items-center lg:grid-cols-6'>
            {companies.map((logo, index) => (
              <div className='p-4 grayscale transition duration-200 hover:grayscale-0'>
                <img 
                key={index}
                src={logo}
                alt={`Company ${index}`}
                 className="object-contain"
                />
                </div>
            ))}
            </div>
        </div>
    </section>
  )
}

export default Companies