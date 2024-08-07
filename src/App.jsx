import { useEffect, useState } from "react";
import "./App.css";
import { useDispatch } from "react-redux";
import authService from "./appwrite/auth";
import { login, logout } from "./store/authSlice";
import { Footer, Header } from "./components";

function App() {
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        authService
            .getCurrentUser()
            .then((userData) => {
                if (userData) {
                    dispatch(login({ userData }));
                } else {
                    dispatch(logout());
                }
            })
            .catch((error) => console.log(error))
            .finally(() => setLoading(false));
    }, []);

    return !loading ? (
        <div
            className="min-h-screen flex 
                        flex-wrap content-between 
                        bg-gray-400"
        >
            <div className="w-full block">
                <Header />
                <main>{/* {<Outlet />} */}</main>
                <Footer />
            </div>
        </div>
    ) : (
        <div>Loading</div>
    );
}

export default App;

