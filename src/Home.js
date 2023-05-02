import { useState } from "react";
import { useEffect } from "react";
import Product from "./Product";


function Home(){
    const [products, setproducts] = useState(null);
    useEffect(()=>{
        fetch('http://localhost:8088/getAllCategory').then(res => {return res.json();}).then(data =>{
            setproducts(data);
            console.log(data);
        });
    },[]);
    return (
        <>
        {products && <Product products={products.filter((product)=> product.category.cat_1==='MOBILE')} title="SmartPhones"/>}
        {products && <Product products={products.filter((product)=> product.category.cat_1==='VIDEO/AUDIO')} title="Television"/>}
        {products && <Product products={products.filter((product)=> product.category.cat_2==='TABLET')} title="Tablets"/>}
        </>
    );
}

export default Home;