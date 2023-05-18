import Carousel from "./components/Carousel";
import Info from "./components/Info";
import Ranking from "./components/Ranking";

export default function page() {
  return (
    <main className='w-full mx-auto p-4 lg:w-[1240px] lg:[p0]'>
      <Carousel />
      <Info />
      <Ranking />
    </main>
  )
}
