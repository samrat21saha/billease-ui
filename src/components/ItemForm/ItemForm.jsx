import React, { useState } from "react";
import toast from "react-hot-toast";
import { Form } from "react-router-dom";

const ItemForm = () => {
    const {categories, setItemsData, itemsData, setCategories} = useContext(AppContext);
    const [image, setImage] = useState(false);
    const [loading , setLoading] = useState(false);
    const [data, setData] = useState( {
        name: "",
        categoryId: "",
        price: "",
        description: ""
    });

    

    const onChangeHandler = (e) => {
        const value = e.target.value;
        const name = e.target.name;
        setData((data) => ({
            ...prevData,
            [name]: value
        }));
    }

    const onSubmitHandler = async (e) => {
        e.preventDefault();
        setLoading(true);
        const formData = new FormData();
        formData.append("item", JSON.stringify(data));
        formData.append("file", image);
        try{
            if(!image){
                toast.error("Select image");
                return
            }
            const response = await addItem(formData);
            if(response.status === 201){
                // handle success
                setItemsData([...itemsData, response.data]);
                
                setCategories((prevCategories) =>  prevCategories.map((category) => 
                    category.categoryId === data.categoryId ? {...category, items: category.items + 1} : category));

                toast.success("Item added");
                setData({
                    name: "",
                    categoryId: "",
                    price: "",
                    description: ""
                })
                setImage(false);
            } else {
                toast.error("Failed to add item");
            }
        } catch (error) {
            toast.error("Failed to add item");
            console.error(error);
        }finally{
            setLoading(false);
        }
    }

    return (
        <div className="item-form-container" style={{ height: '100%vh', overflowY: 'auto', overflowX: 'hidden' }}>
            <div className="mx-2 mt-2">
                <div className="row">
                    <div className="card col-md-8 form-container">
                        <div className="card-body">
                            <form onSubmit={onSubmitHandler}>
                                <div className="mb-3">
                                    <label htmlFor="image" className="form-label">
                                        <img src={image ? URL.createObjectURL(image): assets.upload} alt="" width={48} />
                                    </label>
                                    <input type="file" name="image" id="image" className="form-control" hidden onChange={(e) =>setImage(e.target.files[0])}/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label">Name</label>
                                    <input type="text"
                                        name="name"
                                        id="name"
                                        className="form-control"
                                        placeholder="Item Name"
                                        onChange={onChangeHandler}
                                        value={data.name}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="category" className="form-label">
                                        Category
                                    </label>
                                    <select name="categorId" id="category" className="form-control" onChange={onChangeHandler} value={data.categoryId}>
                                        <option value="">--SELECT CATEGORY--</option>
                                        {categories.map((category, index) => (
                                            <option key={index} value={category.categoryId}>{category.name}</option>
                                        ))}
                                    </select>
                                </div>
                                <div className="mb-3">
                                    <input type="number" name="Price" id="price" className="form-control" placeholder="&#8377;200.00" onChange = {onChangeHandler} value={data.price}/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="description" className="form-label">Description</label>
                                    <textarea
                                        rows="5"
                                        name="name"
                                        id="description"
                                        className="form-control"
                                        placeholder="Category Description" onChange={onChangeHandler} value={data.description}></textarea>

                                </div>

                                <button type="submit" className="btn btn-warning w-100" disabled={loading}>{loading ? "Loading...": "Save"}</button>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ItemForm;