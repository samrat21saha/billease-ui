import './Category.css';

const Category = ({CategoryName, imgUrl, numberOfItems, bgColor}) => {
    return (
        <div className="d-flex align-items-center p-3 rounded gap-1 position-relative category-andraover"
             style={{backgroundColor: bgColor, height: '100px', cursor: 'pointer'}}>
            
            <div style={{position: 'relative', marginRight: '15px'}}>
                <img src="imgUrl" alt={CategoryName} className="category-image" />
            </div>
            <div>
                <h6 className="text-white mb-0">{CategoryName}</h6>
                <p className="text-white mb-0" style={{fontSize: '12px'}}>{numberOfItems} Items</p>
            </div>
        </div>
    )
}

export default Category;