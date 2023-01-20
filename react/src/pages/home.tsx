import Footer from '../components/footer'
import Header from '../components/header'
import SearchBar from '../components/searchbar'

export default function Home () {
  return (
    <div className='App'>
      <Header />
      <h1 className='text-3xl font-bold mt-4'>Estoy en la Home!!</h1>
      <SearchBar />
      <Footer />
    </div>
  )
}
