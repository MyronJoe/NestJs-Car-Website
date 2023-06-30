import Hero from '@/components/Hero'
import Image from 'next/image'
import SearchBar from '@/components/SearchBar'
import CustomFilter from '@/components/CustomFilter'
import { getCars } from '@/utils'

export default async function Home() {

  const allCars = await getCars()

  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;

  return (
    <main className="overflow-hidden">


      <Hero />

      <div className=' mt-12 padding-x padding-y max-width' id='discover'>

        <div className='home__text-container'>
          <h1 className='text-4xl font-extrabold'>
            Car Catalogue
          </h1>
          <p>
            Explore the cars you might like
          </p>
        </div>

        <div className='home__filters'>

          <SearchBar />

          <div className='home__filter-container'>

            <CustomFilter title='fuel' />
            <CustomFilter title='year' />

          </div>

        </div>

        <div className=''>

          {!isDataEmpty ? (
            <section>
              we have cars
            </section>
          ):(
            <section className='home__error-container'>
              <h2 className='text-black text-xl font-bold'>Ooops, no result</h2>
              <p>{allCars?.message}</p>
            </section>
          )}

        </div>

      </div>

    </main>
  )
}
