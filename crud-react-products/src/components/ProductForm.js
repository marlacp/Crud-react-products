import React, {useState, useEffect} from 'react';
import { db } from '../firebase';

export const ProductForm = (props) => {


    const initialStateValues = {
        name: "",
        description: "",
        stock: "",
        price: "" ,
    };
    const [values, setValues] = useState(initialStateValues);



    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setValues({...values, [name]: value})
        

    }
    const handleSubmit = e => {
        e.preventDefault();

        props.addOrEditProducts(values);
        // limpiar el form
        setValues({...initialStateValues})
    }

    const getProductkById = async(id) => {
        const doc = await db.collection('inks').doc(id).get();
        //insertar lo valores dentro del edit
        setValues({...doc.data()})
    }
//evaluamos con el id no tiene, y si tiene llamamos getliknbyid para insertar esos valores al estado de los valores
    useEffect(()=>{
        console.log(props.currentId)
        if(props.currentId === ""){
            setValues({...initialStateValues});
        } else{
            getProductkById(props.currentId);
        }
    },[props.currentId]);
   
    return (
        <form  className="card card-body" onSubmit={handleSubmit}>
            <h4>Name</h4>
            <div className="form-group input-group">
                <div className="input-group-text bg-light">
                <div className="edit icon"></div>
                </div>
                <input type="text" className="form-control" 
                placeholder="Name" name="name"
                onChange={handleInputChange}
                value={values.name}
                />
            </div>
            <h4>Description</h4>
            <div className="form-group input-group">
                <div className="input-group-text bg-light">
                     <div className="keyboard-solid icon"></div>
                
                </div>
                <textarea name="description"  rows="3" className="form-control" 
                placeholder="Write a description of the product"
                onChange={handleInputChange}
                value={values.description}
                >
                </textarea>
            </div>

            <h4>Stock</h4>
            <div className="form-group input-group">
                <div className="input-group-text bg-light">
                 <div className="check icon"></div>
                </div>
                <input type="number" className="form-control"
                name="stock"
                onChange={handleInputChange}
                value={values.stock}
                />
            </div>

            <h4>Price</h4>
            <div className="form-group input-group">
                <div className="input-group-text bg-light">
                <i className="fa fa-money"></i>
                </div>
                <input type="number" className="form-control"
                name="price"
                onChange={handleInputChange}
                value={values.price}
                />
            </div>
            <button className="btn btn-primary btn-block">
            {props.currentId === "" ? "Save" : "Update"}
            </button>
        </form>
    )
}

export default ProductForm;