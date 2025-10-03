import { useContext, useState } from "react";
import { toast } from "react-hot-toast";
import { deleteItem } from "../../Service/ItemService.jsx";     
import { AppContext } from "../../context/AppContext.jsx";
import "./ItemList.css";

const ItemList = () => {
    const { itemData, setItemsData } = useContext(AppContext);
    const [searchTerm, setSearchTerm] = useState("");

    const filteredItems = itemData.filter((item) => {
        return item.name.toLowerCase().includes(searchTerm.toLowerCase());
    });

    const deleteItem = async (itemId) => {
        try {
            const response = await deleteItem(itemId);
            if (response.status === 204) {
                const updatedItems = itemData.filter(item => item.itemId !== itemId);
                setItemsData(updatedItems);
                toast.success("Item deleted successfully");
            } else {
                toast.error("Failed to delete item");
            }
        } catch (error) {
            toast.error("Error occurred while deleting the item!!!");
        }
    };

    return (
        <div className="category-list-container" style={{ height: '100vh', overflowY: 'auto', overflowX: 'hidden' }}>
            <div className="row pe-2">
                <div className="input-group mb-3">
                    <input
                        type="text"
                        name="keyword"
                        id="keyword"
                        placeholder="Search by keyword"
                        className="form-control"
                        onChange={(e) => setSearchTerm(e.target.value)}
                        value={searchTerm}
                    />
                    <span className="input-group-text bg-warning">
                        <i className="bi bi-search"></i>
                    </span>
                </div>
            </div>
            <div className="row g-3 pe-2">
                {filteredItems.map((item, index) => (
                    <div key={index} className="col-12">
                        <div className="card p-3 bg-dark">
                            <div className="d-flex align-items-center">
                                <div className="item-image">
                                    <img src={item.imgUrl} alt={item.name} className="category-image" />
                                </div>
                                <div className="flex-grow-1">
                                    <h6 className="mb-1 text-white">{item.name}</h6>
                                    <p className="mb-0 text-white">
                                        Category: {item.categoryName}
                                    </p>
                                    <span className="mb-0 text-block badge rounded-pill text-bg-warning"> &#8377;{item.price}</span>
                                </div>
                                <button className="btn btn-danger btn-sm" onClick={() => deleteItem(item.itemId)}>
                                    <i className="bi bi-trash"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ItemList;