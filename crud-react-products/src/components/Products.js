import React, { useEffect, useState } from "react";
import ProductForm from '../components/ProductForm';
import {db} from '../firebase';
import {toast} from 'react-toastify';

const Products = () => {

    const [products, setProducts] = useState([]);
    const [currentId, setCurrentId] = useState("");
// se evalua si se  ingresa nuevos valores o, se editan, con ayuda de update actualizamos en la db
    const addOrEditProducts = async (ProductObj) => {
        try {
            if (currentId === "") {
              await db.collection("inks").doc().set(ProductObj);
              toast("New Product Added", {
                type: "success",
                autoClose: 1600,
              });
            } else {
              await db.collection("inks").doc(currentId).update(ProductObj);
              toast("Updated Product Successfully", {
                type: "info",
                autoClose: 1600,
              });
              setCurrentId("");
            }
          } catch (error) {
            console.error(error);
          }
    };
    const onDeleteProduct  = async (id) => {
        if (window.confirm("are you sure you want to delete this product?")) {
          await db.collection("inks").doc(id).delete();
          toast("Product Removed Successfully", {
            type: "error",
            autoClose: 1600
          });
        }
      };
    //funcion para obtener datos de firebase
    function getProducts() {
      //se llama los datos actualizados, y  se combinan en un arreglo, los datos con su id
      db.collection("inks").onSnapshot((querySnapshot) => {
          const docs = [];
            querySnapshot.forEach((doc) => {
                docs.push({ ...doc.data(), id: doc.id });
            });
            setProducts(docs);
        });
    }

    useEffect(() => {
        getProducts();
      },[]);

    return (
        <>
            <div className="col-md-8 p-2">
                <ProductForm {...{addOrEditProducts, currentId, products}} />
            </div>
        
        {/* ********************************** */}

            <div className="col-md-8 p-2">
                {products.map((product) =>(
                    <div className="card mb-1" key={product.id}>
                        <div className="card-body">
                            <h4>{product.name}</h4>
                            <p>{product.description}</p>
                            <h4>{product.stock}</h4>
                            <h4>{product.price}</h4>
                            <div className="d-flex justify-content-between">
                                <button type="button" className="btn btn-danger"
                                onClick={() => onDeleteProduct (product.id)}
                                >
                                    Delete
                                </button>
                                <button type="button" className="btn btn-secondary"
                                onClick={ () => setCurrentId(product.id)}
                                >
                                    Edit
                                </button>
                            </div>

                        </div>

                    </div>
                ))}
            </div>
        </>
    );
};

export default Products;