import { useContext, useState } from 'react'
import {PannierContext} from './App'
import CardPannier from './assets/CardPannier';
function Pannier() {
    const PannierProduct=useContext(PannierContext);
    const {Trush}=PannierProduct;
    const{removeitemspannier}=PannierProduct;
    const {addcontité}=PannierProduct;
    const {moinscontité}=PannierProduct;
    const {PriceT}=PannierProduct;
    console.log(Trush)

    const handelremoveitemspannier=(id)=>{
        removeitemspannier(id);
    }

    const handeladditemspannier=(id)=>{
        addcontité(id);
    }

    const handelmoinitemspannier=(id)=>{
        moinscontité(id);
    }
    
  return (


<div className="container mx-auto mt-10 p-6 bg-gray-50 shadow-md rounded-lg">
  <h1 className="text-3xl text-center font-extrabold text-gray-800 mb-8">
    Your Pannier
  </h1>
  {Trush.length ? (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {Trush.map((item, index) => (
        <CardPannier 
          key={index} 
          product={item} 
          handelremoveitemspannier={handelremoveitemspannier} 
          handeladditemspannier={handeladditemspannier} 
          handelmoinitemspannier={handelmoinitemspannier} 
        />
      ))}
    </div>
  ) : (
    <p className="text-center text-gray-500 text-lg">
      Please choose a product 😊
    </p>
  )}

  <div className="mt-8 p-4 border-t border-gray-300 flex justify-between items-center">
    <span className="text-lg font-semibold text-gray-800">Total Price:</span>
    <span className="text-2xl font-bold text-blue-600">${PriceT.toFixed(2)}</span>
  </div>
</div>

  );
}

export default Pannier