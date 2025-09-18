import Menubar from "./components/Menubar/Menubar";
import Dashboard from "./pages/Dashboard/Dashboard";
import Explore from "./pages/Explore/Explore";
import ManageCategories from "./pages/ManageCategories/ManageCategories";
import ManageItems from "./pages/ManageItems/ManageItems";
import ManageUsers from "./pages/ManageUsers/ManageUsers";

const App = () => {
    return (
        <div>
            <Menubar />
            <Toaster />
            <Routes>
                <Route path="/dashboard" element={<Dashboard />}/>
                <Route path="/category" element={<ManageCategories />}/>
                <Route path="/users" element={<ManageUsers />}/>
                <Route path="/items" element={<ManageItems />}/>
                <Route path="/explore" element={<Explore />}/>
                <Route path="/" element={<Dashboard />}/>
            </Routes>
        </div>
        );
    }
export default App; 