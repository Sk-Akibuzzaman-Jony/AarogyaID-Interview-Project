import React from 'react'

const Home = () => {
  return (
    <div className="bg-gradient-to-r from-blue-200 via-blue-300 to-blue-400 pb-12">
      <div className='w-11/12 mx-auto p-3'>
        <div className='text-5xl font-extrabold text-richblack-5 pt-12 pb-12'>
          National Healthcare Providers Registry
        </div>
        <div className='grid grid-cols-2 gap-12'>
          <div>
            <div className='text-richblack-5 text-xl'>
              Healthcare
            </div>
            <div className='text-richblack-5 text-3xl mb-8 font-bold'>
              Professionals Registry
            </div>
            <div className='text-richblack-25 pb-2'>
              Healthcare Professionals Registry (HPR) is a comprehensive repository
              of registered and verified different system of medicines (Modern
              medicine, Dentistry, Ayurveda, Unani. Siddha, Sowa-Rigpa, Homeopathy)
              and Nurses practitioners delivering healthcare services across India.
            </div>
            <button className='text-orange-300'>Read More</button>
          </div>
          <div className='relative'>
            <div className='text-richblack-5 text-xl'>
              Health
            </div>
            <div className='text-richblack-5 text-3xl mb-8 font-bold'>
              Facility Registry
            </div>
            <div className='text-richblack-25'>
              Health Facility Registry is a comprehensive repository of health facilities
              of the country across modern and traditional systems of medicine. It
              includes both public and private health facilities including hospitals,
              clinics, diagnostic
            </div>
            <button className='text-orange-300 absolute bottom-0'>Read More</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home