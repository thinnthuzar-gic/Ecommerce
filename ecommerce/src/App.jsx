import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CategorySection from "./components/CategorySection";
import ProductSection from "./components/Product/ProductSection";

export default function App() {
  return (
    <>
      <Header />
      <CategorySection />
      <ProductSection />
      <Footer />
    </>
  );
}
