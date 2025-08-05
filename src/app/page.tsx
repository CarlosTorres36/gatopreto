import Header from "./components/header/header";
import Carrossel from "./components/carrossel/carrossel";
import Product from "./components/productitem/productitem";
import ProductGrid from "./components/productgrid/productgrid";
import Footer from "./components/footer/footer";

export default function Home() {
  return (
    <>
      <div className="hidden xl:block">
        <Header />
      </div>
      <Carrossel />
      <Product />
      <ProductGrid />
      <Product />
      <Footer />
    </>
  );
}
