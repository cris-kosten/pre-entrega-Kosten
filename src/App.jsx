// import BurguerButton from "./components/layout/navbar/BurguerButton";
import Navbar from "./components/layout/navbar/Navbar";
import ItemListContainer from "./components/pages/itemListContainer/ItemListContainer";

function App() {
  return (
    <>
      <Navbar />
      {/* <BurguerButton /> */}
      <ItemListContainer
        gretting={"Bienvenido a la Pagina Oficial de Volkswagen"}
      />
    </>
  );
}

export default App;
