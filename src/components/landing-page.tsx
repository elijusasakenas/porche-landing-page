import React from 'react'
import CarAnimation from './car-animation'

export default function LandingPage (): any {
  return (
    <>
        <header>
            <div className='absolute top-[21%] right-[43%]'>
                <h1>
                    <img src="../../src/assets/911.png" alt="911 Logo" />
                </h1>
            </div>
        </header>
        <main className='absolute top-1/4 right-2/4 translate-x-2/4' >
            <CarAnimation></CarAnimation>
        </main>
        <footer>
            <section className='flex gap-52 bottom-12 absolute w-screen justify-center'>
                <div>
                    <h2 className='text-lightblue text-2xl not-italic font-normal py-2'>TOP SPEED</h2>
                    <p className='text-drblue text-3xl'>192 MPH</p>
                </div>
                <div>
                    <h2 className='text-lightblue text-2xl not-italic font-normal py-2'>POWER(PS)</h2>
                    <p className='text-drblue text-3xl'>385 PS</p>
                </div>
                <div>
                    <h2 className='text-lightblue text-2xl not-italic font-normal py-2'>MAX.TORQUE(MANUAL)</h2>
                    <p className='text-drblue text-3xl'>450NM</p>
                </div>
                <div>
                    <h2 className='text-lightblue text-2xl not-italic font-normal py-2'>DISPLACEMENT</h2>
                    <p className='text-drblue text-3xl'>2,981 CM</p>
                </div>
            </section>
        </footer>
    </>
  )
}
