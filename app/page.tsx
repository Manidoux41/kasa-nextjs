import Banner from "./components/Banner"
import Card from "./components/Card"

export default function Home() {

  const apparts = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
  
  const imageSrc = "banner1.jpg"
  return (    

      <main className='w-full mx-auto p-4 lg:w-[1240px] lg:[p0]'>
        <Banner bannerTitle="Chez vous, partout et ailleurs" imgSrc={`/${imageSrc}`}/>
        <div className='w-full mx-auto mt-5 md:mt-10 bg-transparent flex flex-col gap-5 md:flex-row md:flex-wrap sm:justify-between md:py-14 md:px-12 md:rounded-3xl md:bg-[#F7F7F7]'>        
          {
            apparts.map((appart, index) => (
              <Card key={index} />
            ))
          }
        </div>
      </main>
    
  )
}
