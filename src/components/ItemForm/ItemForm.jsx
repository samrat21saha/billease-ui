import React, { useState } from "react";

const ItemForm = () => {
    const [image, setImage] = useState(false);
    const [loading , setLoading] = useState(false);
    const [data, setData] = useState( {
        name: "",
        category: "",
        price: "",
        description: ""
    });

    

    const onChangeHandler = (e) => {

    }

    const onSubmitHandler = (e) => {
        e.preventDefault();
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
                                        <img src="https://placehold.co/48x48" alt="" width={48} />
                                    </label>
                                    <input type="file" name="image" id="image" className="form-control" hidden onChange={onChangeHandler}/>
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
                                    <select name="category" id="category" className="form-control" onChange={onChangeHandler} value={data.category}>
                                        <option value="">--SELECT CATEGORY--</option>
                                        <option value="Category 1">Category 1</option>
                                        <option value="Category 2">Category 2</option>
                                        <option value="Category 3">Category 3</option>
                                        <option value="Category 4">Category 4</option>
                                        <option value="Category 5">Category 5</option>
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