import { useEffect, useState } from "react";
import Data from "./assets/data";
import CardItems from "./assets/CardItems";
import CardPannier from "./assets/CardPannier";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { createContext } from "react";
import Pannier from "./Pannier";
// import Routerlink from './Routerlink';
export const PannierContext = createContext(null);
function App() {
  const [Products, setProducts] = useState(Data);
  const [Trush, setTrush] = useState([]);
  const [PriceT, setPriceT] = useState(0);

  // const PannierProduct = createContext(null);
  useEffect(() => {
    ToalePrice();
  }, [Trush]);

  const value = { Trush };
  const handeladdpannier = (id) => {
    alert(id);
    // -------------checking ----------------------
    const checkingtrush = Trush.find((cart) => cart.id == id);
    if (checkingtrush) {
      alert("had lproduit deja kayn asahbi ser gheyrha");
      return;
    }
    // ----------------submiting in playlist -------------------
    const productItems = Products.find((pro) => pro.id == id);
    setTrush([...Trush, productItems]);
    console.log(Trush.length);
  };

  const removeitemspannier = (id) => {
    const removeitems = Trush.filter((items) => items.id !== id);
    setTrush(removeitems);
  };

  let totalePrice = 0;
  const ToalePrice = () => {
    totalePrice = Trush.reduce((accumulator, item) => {
      return accumulator + item.price * item.qte;
    }, 0);
    setPriceT(totalePrice);
  };
  // ToalePrice();

  const addcontité = (id) => {
    setTrush((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          return { ...item, qte: item.qte + 1 };
        }
        return item;
      })
    );
  };

  const moinscontité = (id) => {
    setTrush((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          return { ...item, qte: item.qte > 1 ? item.qte - 1 : 1 };
        }
        return item;
      })
    );
  };
  return (
    <>
      {/* <PannierProduct.Provider value={value}>
    <Routerlink/>
    </PannierProduct.Provider> */}

      <h1 className="text-5xl mt-14 mb-14 text-center">
        {" "}
        Best Store | Salah Store{" "}
      </h1>
      <BrowserRouter>
        <div className="flex space-x-6 bg-white p-4 shadow-md rounded-lg">
          <Link
            to="/"
            className="text-gray-800 font-medium hover:text-blue-600 transition duration-200"
          >
            Home
          </Link>
          <Link
            to="/Panier"
            className="text-gray-800 font-medium hover:text-blue-600 transition duration-200"
          >
            Pannier
          </Link>
        </div>

        <Routes>
          <Route
            path="/Panier"
            element={
              <PannierContext.Provider
                value={{
                  Trush,
                  setTrush,
                  removeitemspannier,
                  addcontité,
                  moinscontité,
                  PriceT,
                }}
              >
                <Pannier />
              </PannierContext.Provider>
            }
          />

          <Route
            path="/"
            element={
              <div className="container mx-auto p-4 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                {Products.map((product) => (
                  <CardItems
                    key={product.id}
                    product={product}
                    handeladdpannier={handeladdpannier}
                  />
                ))}
              </div>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
