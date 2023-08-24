import "./App.css";
import AppHeader from "./components/AppHeader/AppHeader";
import ProductProvider from "./contexts/ProductContext";
import "bootstrap/dist/css/bootstrap.min.css";
import PageRoute from "./routes/PageRoute";
import AuthProvider from "./contexts/AuthContext";
import UserProvider from "./contexts/UserContext";

function App() {
  return (
    <>
      <AppHeader />
      <main>
        <ProductProvider>
          <AuthProvider>
            <UserProvider>
              <PageRoute />
            </UserProvider>
          </AuthProvider>
        </ProductProvider>
      </main>
    </>
  );
}

export default App;
