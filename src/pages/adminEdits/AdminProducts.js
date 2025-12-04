import axios from "axios"
import { useEffect, useState } from "react"

export default function AdminProducts({ currentUser }) {
    const [ products, setProducts ] = useState([]);

    // useEffect(() => {
        
    //     const callProducts = async() => {
            
    //         const res = await axios.get("http://localhost:5000/product/get-basket-products");

    //         if(res.data) {
    //             setProducts(res.data.products)
    //         }

    //     };

    //     callProducts();

    // }, [currentUser]);
  
    return (
        <>
            <div className="w-full h-full flex p-2 flex-wrap 
            justify-center items-center gap-4">
                {
                    products?.map((item, i) => (
                        <div id={i} className="w-[20%] h-[20vw] flex flex-col 
                        bg-white rounded-md items-center">
                            
                            <img 
                                src={item.image_url} 
                                className="w-full h-[70%] 
                                rounded-md"/>

                            <h2 className="mt-2">
                                {item.title}
                            </h2>

                            <div className="w-full flex mt-8 justify-between px-5">
                                <button className=" 
                                    w-[30px] h-[30px] cursor-pointer 
                                    rounded-md text-white font-[600]">
                                        <img 
                                            src="https://static.thenounproject.com/png/687044-200.png"/>
                                </button>

                                <button className=" 
                                    w-[30px] h-[30px] cursor-pointer 
                                    rounded-md text-white font-[600]">
                                        <img 
                                            src="https://cdn-icons-png.flaticon.com/512/8102/8102171.png"/>
                                </button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    )
}