import Banner from "../components/Banner"



export default function page() {

  const imageSrc = "banner2.jpg"

  return (
    <main className='w-full mx-auto p-4 lg:w-[1240px] lg:[p0]'>
      <Banner bannerTitle="" imgSrc={`/${imageSrc}`}/>
        <h1 className='text-4xl text-red-500 font-medium'>About page</h1>
    </main>
  )
}