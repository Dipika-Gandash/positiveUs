import React from 'react'
import CaseStudyCard from '../components/CaseStudyCard'

const CaseStudies = () => {
  const caseStudiesData = [
  {
    id: 1,
    description:
      "For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.",
  },
  {
    id: 2,
    description:
      "For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.",
  },
  {
    id: 3,
    description:
      "For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.",
  },
];

  return (
    <section className='p-5 flex justify-center overflow-hidden mt-11'>
      <div className="bg-white max-w-7xl mx-auto w-full">
        <div className='flex flex-col items-center gap-10 sm:flex-row mb-20'>
          <h1 className='bg-lime-300 text-center sm:text-left text-3xl sm:text-4xl'>Case Studies</h1>
          <p className='w-auto text-center sm:text-left sm:w-125'>Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies</p>
        </div>

       <div className="flex flex-col sm:flex-row bg-gray-900 items-stretch p-10 rounded-[45px]">
  {caseStudiesData.map((item, index) => (
    <>
      <CaseStudyCard
        key={item.id}
        description={item.description}
      />

      {index !== caseStudiesData.length - 1 && (
        <div className="bg-white
            h-px w-full my-6
            sm:h-auto sm:w-px sm:my-0 sm:mx-6" />
      )}
    </>
  ))}
</div>
      </div>
    </section>
  )
}

export default CaseStudies