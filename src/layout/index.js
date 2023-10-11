import { useEffect, useMemo } from "react";
import routes from "../routes/routes";
import { Route, Routes, useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
    Box,
} from "@mui/material"
import Header from "./Header";

const Layout = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const dispatch = useDispatch();
    const token = useSelector(state => state.users.user.token)
    useEffect(() => {
        if (!token) {
            navigate("/login")
        } else if (location.pathname === "/login" && token) {
            navigate('/home')
        }

        if (location.pathname === "/") {
            navigate('/home')
        }
    }, [token, location.pathname])

    const isLogin = useMemo(() => {
        return location.pathname == "/login"
    }, [location.pathname])
    return (
        <>
            <Box sx={{ overflow: "hidden" }}>
                {
                    !isLogin && <Header></Header>
                }
                <main>
                    <Box sx={{ overflowY: "auto", overflowX: "hidden", mt: -1 }}>
                        <Routes>
                            {
                                routes.map((item) => <Route key={item.path} path={item.path} element={<item.element></item.element>}></Route>)
                            }
                        </Routes>
                    </Box>
                </main>
            </Box>
        </>
    );
};

export default Layout;