import Navbar from "../../components/navbar/navbar";
import ProdutoVitrine from "../../produto-vitrine/produto-vitrine";

function Home() {
  return (
    <>
      <Navbar />
      <br />
      <div className="container">
        <div className="titulo text-center">
          <h1>Nosso Cardápio</h1>
          <p className="subtitulo">
            Clique em adicionar para colocar os produtos na sacola de compras.
            Se preferir, você pode pedir pelo WhatsApp: (51) 99999-9999
          </p>
        </div>
      </div>
      <ProdutoVitrine />
      <ProdutoVitrine />
      <ProdutoVitrine />
      <ProdutoVitrine />
    </>
  );
}

export default Home;
