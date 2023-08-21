import "./App.css";
import AppHeader from "./components/AppHeader/AppHeader";
import ProductProvider from "./contexts/ProductContext";
import "bootstrap/dist/css/bootstrap.min.css";
import PageRoute from "./routes/PageRoute";

function App() {
  return (
    <>
      <AppHeader />
      <main>
        <ProductProvider>
          <PageRoute />
        </ProductProvider>
      </main>
    </>
  );
}

export default App;
