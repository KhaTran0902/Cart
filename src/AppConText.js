import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const AppConText = createContext({});
export const AppProvider = ({ children }) => {
  const [productData, setProducData] = useState(null);
  const [cart, setCart] = useState([]);

  const getData = async () => {
    const url = `https://6468b37e60c8cb9a2cafc05c.mockapi.io/Products1`;
    axios
      .get(url)
      .then((res) => {
        setProducData(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getData();
  }, []);
  useEffect(() => {}, [cart]);
  const addToCart = async(id) => {
    let kq=productData.find((item)=>item.id==id)
        const index= cart.findIndex((item)=>item.id==id)
        if(index>=0){
          let newList=cart;
          newList[index]["qty"]++
         setCart(newList)
         localStorage.setItem ('cart_list', JSON.stringify(newList));
        }
        else{
         setCart([...cart,{...kq,qty:1}])
         localStorage.setItem ('cart_list', JSON.stringify([...cart,{...kq,qty:1}]));
        }
  };
  
  console.log(cart);
 
  return (
    <div>
      <AppConText.Provider value={{ productData, addToCart, cart }}>
        {children}
      </AppConText.Provider>
    </div>
  );
};
