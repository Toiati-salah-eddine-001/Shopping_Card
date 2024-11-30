// import { BrowserRouter, Routes, Route, Link} from 'react-router-dom';

import Pannier from '../Pannier';
function CardItems(props) {
    const {id,name,description,price,img}=props.product;

    return (
        // <div className="p-6 bg-gray-200 rounded-lg shadow-md w-80 max-w-full">
        //   <div className="img h-48 w-full overflow-hidden rounded-t-lg">
        //     <img
        //       src={img}
        //       alt={name}
        //       className="h-full w-full object-cover object-center"
        //     />
        //   </div>
        //   <h2 className="text-2xl mb-2 mt-4 font-bold text-gray-800">{name}</h2>
        //   <p className="mb-2 text-gray-600">{description}</p>
        //   <p className="mb-2 font-semibold text-lg text-gray-900">${price}</p>

        //   <button className="rounded-lg bg-sky-500 text-white px-6 py-2 hover:bg-sky-600 transition duration-200" onClick={()=>props.handeladdpannier(id)}>
        //      Add Bascket
        //   </button>
        // </div>


        <div className="p-6 bg-white rounded-lg shadow-lg w-80 max-w-full border border-gray-300">
  <div className="img h-48 w-full overflow-hidden rounded-lg mb-4">
    <img
      src={img}
      alt={name}
      className="h-full w-full object-cover object-center"
    />
  </div>
  <h2 className="text-xl mb-2 font-bold text-gray-800">{name}</h2>
  <p className="mb-2 text-sm text-gray-600">{description}</p>
  <p className="mb-4 font-semibold text-lg text-blue-600">${price}</p>
  <button
    className="w-full rounded-lg bg-blue-600 text-white px-4 py-2 font-medium hover:bg-blue-700 transition duration-200"
    onClick={() => props.handeladdpannier(id)}
  >
    Add to Basket
  </button>
</div>

      );
    }
    

export default CardItems
