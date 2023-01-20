import Footer from "../components/Footer";
import Header from "../components/Header";
import SearchBar from "../components/Searchbar";

export default function Home() {
  return (
    <div className="App">
      <Header />
      <h1 className="text-3xl font-bold mt-4">Estoy en la Home!!</h1>
      <SearchBar />
      <Footer />
    </div>
  );
}
