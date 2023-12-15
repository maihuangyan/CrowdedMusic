import { useEffect, useMemo, useState, useRef } from "react";
import routes from "../routes/routes";
import { Route, Routes, useNavigate, useLocation, Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
    Box,
} from "@mui/material"
import Header from "./Header";
import Footer from "./Footer";
import NavMenu from './navMenu';
import ToTop from "./toTop";
import RootPlayer from "ui-component/rootPlayer";

const Layout = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const dispatch = useDispatch();
    const token = useSelector(state => state.users.user.token)
    const playList = useSelector((state) => state.playList.playList)

    const pathArr = ["/login", "/reset", "/forget", "/signUp"]

    useEffect(() => {
        // const login = routes.filter(ele => !ele.hidden).some(item => item.path === location.pathname)
        // console.log(login)
        // if (!token && login) {
        //     navigate("/login")
        // } else if (location.pathname === "/login" && token) {
        //     navigate('/home')
        // }
        console.log(playList)

        if (location.pathname === "/") {
            navigate('/homepage')
        }
    }, [location.pathname,playList])

    const isLogin = useMemo(() => {
        return pathArr.some((item) => item == location.pathname)
    }, [location.pathname])

    const mainNode = useRef()

    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleScroll = () => {
        if (window.scrollY > 100) {
            setShowButton(true);
        } else {
            setShowButton(false);
        }
    };

    const handleClick = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    const isChangeNav = useMemo(() => {
        return ["/", "/homepage", "/trendings/trending", "/login", "/reset", "/signUp", "/forget"].some((item) => item == location.pathname)
    }, [location.pathname])

    return (
        <>
            <ToTop handleClick={handleClick} showButton={showButton} />
            {/* {
                isLogin && <Box sx={{ overflowY: "auto", overflowX: "hidden" }}>
                    <Routes>
                        {
                            routes.filter(ele => ele.hidden).map((item) => <Route key={item.path} path={item.path} element={<item.element></item.element>}></Route>)
                        }
                    </Routes>
                </Box>
            } */}
            <Box sx={{ overflow: "hidden", position: "relative", pb: playList.length && !isLogin ? {xs:"240px",md:"80px"} : 0, pt: isLogin ? "0" : (isChangeNav ? {xs:"120px",md:"80px"} : {xs:"210px",md:"195px"}) }}>
                {!isLogin && <Header />}
                {!isLogin && <NavMenu showButton={showButton} />}
                <main>
                    <Box ref={mainNode} sx={{ overflowY: "auto", overflowX: "hidden" }}>
                        <Routes>
                            {
                                routes.map((item) => <Route key={item.path} path={item.path} element={<item.element></item.element>}>
                                    {
                                        item.children && item.children.map(ele => <Route key={ele.path} path={ele.path} element={<ele.element></ele.element>}>
                                        </Route>)
                                    }
                                </Route>)
                            }
                        </Routes>
                        <Outlet />
                    </Box>
                </main>
                <Footer />
                <Box sx={{ position: "fixed", left: 0, bottom: playList.length && !isLogin? 0 : {xs:"-240px",md:"-80px"}, zIndex: 99, width: "100%", height: {xs:"240px",md:"80px"}, }}>
                    <RootPlayer musicInfoList={playList} />
                </Box>
            </Box>
        </>
    );
};

export default Layout;