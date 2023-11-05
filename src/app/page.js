import Booking from "./components/Booking";
import Clients from "./components/Clients";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Services from "./components/Services";
import TopSongs from "./components/TopSongs";


export default function Home() {
  return (
    <main className='w-screen'>
      <Main />
      <Services />
      <Clients />
      <TopSongs />
      <Booking />
      <Footer />
    </main>
  )
}
