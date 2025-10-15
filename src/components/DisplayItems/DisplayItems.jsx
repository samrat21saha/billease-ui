import { use, useContext } from 'react';
import './DisplayItems.css';

const DisplayItems = () => {  
    const {itemsData} = useContext(AppContext);
    return (
        <div className="row g-3">
            {itemsData.map((item, index) => (
                <div key={index} className=''> </div>

        </div>
    )
}

export default DisplayItems;