function CardPannier({
  product,
  handelremoveitemspannier,
  handeladditemspannier,
  handelmoinitemspannier,
}) {
  console.log(product);
  return (
    //     <>
    //     <div className="p-6 bg-gray-200 rounded-lg shadow-md w-80 max-w-full">
    //   <div className="img h-48 w-full overflow-hidden rounded-t-lg">
    //     <img
    //       src={product.img}
    //       alt="lmmm"
    //       className="h-full w-full object-cover object-center"
    //     />
    //   </div>
    //   <h2 className="text-2xl mb-2 mt-4 font-bold text-gray-800">{product.name}</h2>
    //   <p className="mb-2 text-gray-600">{product.description}</p>
    //   <p className="mb-2 font-semibold text-lg text-gray-900">${product.price}</p>
    //   <h3 className="text-lg mb-4 mt-2 font-bold text-gray-800 ">Quantitée : {product.qte}</h3>
    //   <div className="flex items-center gap-2">
    //     <button
    //       className="rounded-lg bg-sky-500 text-white px-4 py-2 hover:bg-sky-600 transition duration-200"
    //       onClick={()=>handeladditemspannier(product.id)}
    //     >
    //       +
    //     </button>
    //     <button
    //       className="rounded-lg bg-sky-500 text-white px-4 py-2 hover:bg-sky-600 transition duration-200"
    //       onClick={()=>handelmoinitemspannier(product.id)}
    //       >
    //       -
    //     </button>
    //     <button
    //       className="rounded-lg bg-red-500 text-white px-6 py-2 hover:bg-red-600 transition duration-200"
    //     onClick={()=>handelremoveitemspannier(product.id)} >
    //       Remove
    //     </button>
    //   </div>
    // </div>

    // </>

    <>
      <div className="p-4 bg-white rounded-lg shadow-lg  max-w-full border border-gray-200 w-96">
        <div className="img h-48 w-full overflow-hidden rounded-lg mb-4">
          <img
            src={product.img}
            alt={product.name}
            className="h-full w-full object-cover object-center"
          />
        </div>
        <h2 className="text-xl font-bold text-gray-800 mb-2">{product.name}</h2>
        <p className="text-sm text-gray-600 mb-2">{product.description}</p>
        <p className="text-lg font-semibold text-blue-600 mb-2">
          ${product.price}
        </p>
        <h3 className="text-md font-bold text-gray-700 mb-4">
          Quantity: {product.qte}
        </h3>
        <div className="flex items-center gap-3">
          <button
            className="rounded-lg bg-blue-500 text-white px-4 py-2 font-medium hover:bg-blue-600 transition-all duration-200"
            onClick={() => handeladditemspannier(product.id)}
          >
            +
          </button>
          <button
            className="rounded-lg bg-blue-500 text-white px-4 py-2 font-medium hover:bg-blue-600 transition-all duration-200"
            onClick={() => handelmoinitemspannier(product.id)}
          >
            -
          </button>
          <button
            className="rounded-lg bg-red-500 text-white px-6 py-2 font-medium hover:bg-red-600 transition-all duration-200"
            onClick={() => handelremoveitemspannier(product.id)}
          >
            Remove
          </button>
        </div>
      </div>
    </>
  );
}

export default CardPannier;
