import Clients from "./components/Clients";
import Main from "./components/Main";
import Services from "./components/Services";
import TopSongs from "./components/TopSongs";


export default function Home() {
  return (
    <main className='w-screen'>
      <Main />
      <Services />
      <TopSongs />
      <Clients />
    </main>
  )
}
