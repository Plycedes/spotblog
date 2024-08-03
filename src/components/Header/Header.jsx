import React from "react";
import { LogoutBtn, Container, Logo } from "../index";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function Header() {
    const authStatus = useSelector((state) => state.auth.status);

    const navigate = useNavigate();

    const navItems = [
        {
            name: "Home",
            url: "/",
            active: true,
        },
        {
            name: "Log In",
            url: "/login",
            active: !authStatus,
        },
        {
            name: "Sign Up",
            url: "/signup",
            active: !authStatus,
        },
        {
            name: "All Posts",
            url: "/all-posts",
            active: authStatus,
        },
        {
            name: "Add Posts",
            url: "/add-post",
            active: authStatus,
        },
    ];
    return (
        <header className="py-3 bg-gray-500">
            <Container>
                <nav className="flex">
                    <div className="mr-4">
                        <Link to="/">
                            <Logo width="7-px" />
                        </Link>
                    </div>
                    <ul className="flex ml-auto">
                        {navItems.map((item) =>
                            item.active ? (
                                <li key={item.name}>
                                    <button
                                        onClick={() => navigate(item.url)}
                                        className="inline-block px-6 py-2 duratio-200 hover:bg-blue-100 rounded full"
                                    >
                                        {item.name}
                                    </button>
                                </li>
                            ) : null
                        )}
                        {authStatus && (
                            <l1>
                                <LogoutBtn />
                            </l1>
                        )}
                    </ul>
                </nav>
            </Container>
        </header>
    );
}

export default Header;
