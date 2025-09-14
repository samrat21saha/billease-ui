import CategoryForm from '../../components/CategoryForm/CategoryForm';
import './ManageCategories.css';

const ManageCategories = () => {

    return (
        <div className="categories-container text-light">

            <div className="left-column">
                <CategoryForm />
            </div>
            <div className="right-column">
                <CategoryList/>
            </div>
        </div>
    )
}   

export default ManageCategories;