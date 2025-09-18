import { useState } from "react";
import { assets } from "../../assets/assets";

const CategoryForm = () => {

    const [loading, setLoading] = useState(false);
    const [image, setImage] = useState(false);
    const [data, setData] = useState({
        name: '',
        description: '',
        bgColor: '#ffffff'
    });


    const onChangeHandler = (e) => {
        const value = e.target.value;
        const name = e.target.name;
        setData((data) => ({
            ...data,
            [name]: value
        }));
    }


    return (
        <div className="mx-2 mt-2">
            <div className="row">
                <div className="card col-md-12 form-container">
                    <div className="card-body">
                        <form>
                            <div className="mb-3">
                                <label htmlFor="image" className="form-label">
                                    <img src={image ? URL.createObjectURL(image) : assets.upload} alt="" width={48} />
                                </label>
                                <input type="file" name="image" id="image" className="form-control" hidden onChange={() => setImage(e.target.files[0])}/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Name</label>
                                <input  type="text"
                                    name="name"
                                    id="name"
                                    className="form-control"
                                    placeholder="Category Name" 

                                    onChange={onChangeHandler}
                                    value={data.name}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="description" className="form-label">Description</label>
                                <textarea  
                                        rows="5"
                                        name="name"
                                        id="description"
                                        className="form-control"
                                        placeholder="Category Description"
                                        
                                        onChange={onChangeHandler}
                                        value={data.description}
                                ></textarea>
                                
                            </div>

                            <div className="mb-b">
                                <label htmlFor="bgcolor" className="form-label">Background Color</label>
                                <br/>
                                <input  type="color"
                                        name="bgcolor"
                                        id="bgcolor"
                                        onChange={onChangeHandler}
                                        value={data.bgColor}
                                        placeholder="#ffffff"
                                />
                            </div>
                            <button type="submit" className="btn btn-warning w-100" >Save</button>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CategoryForm;