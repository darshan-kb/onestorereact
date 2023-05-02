import { useState } from "react";
import { useEffect } from "react";
import Product from "./Product";


function Home(){
    const [products, setproducts] = useState(null);
    const [pending, setPending] = useState(true);
    const [error, setError] = useState(null)
    useEffect(()=>{
        fetch('http://localhost:8088/getAllCategory').then(res => {
            if(!res.ok){
                throw Error("The resource you are trying to fetch is not available");
            }
            return res.json();}).then(data =>{
            setproducts(data);
            setPending(false);
            setError(null)
        }).catch(err=>{
            setPending(false);
            setError(err.message);
        });
    },[]);
    return (
        <>
        {error && <div>{error}</div>}
        {pending && <div>Loading...</div>}
        {products && <Product products={products.filter((product)=> product.category.cat_1==='MOBILE')} title="SmartPhones"/>}
        {products && <Product products={products.filter((product)=> product.category.cat_1==='VIDEO/AUDIO')} title="Television"/>}
        {products && <Product products={products.filter((product)=> product.category.cat_2==='TABLET')} title="Tablets"/>}
        </>
    );
}

export default Home;