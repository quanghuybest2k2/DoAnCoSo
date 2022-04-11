import Layout from "./components/Layout";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import TraiNghiemDichVu from './pages/trainghiemdichvu';
import HanhTrinhToaSang from "./pages/HanhTrinhToaSang";
import KhamPhaKieuToc from "./pages/KhamPhaKieuToc";
import ShineShop from "./pages/ShineShop";
import TuyenDung from './pages/TuyenDung'
import Login from "./pages/login";

function App() {
    return (
        <Layout>
            <Switch>
                <Route path="/" exact>
                    <Home />
                </Route>
                <Route path="/trai-nghiem-dich-vu">
                    <TraiNghiemDichVu />
                </Route>
                <Route path="/hanh-trinh-toa-sang">
                    <HanhTrinhToaSang />
                </Route>
                <Route path="/kham-pha-kieu-toc">
                    <KhamPhaKieuToc />
                </Route>
                <Route path="/shine-shop">
                    <ShineShop />
                </Route>
                <Route path="/tuyen-dung">
                    <TuyenDung />
                </Route>
                <Route path="/login">
                    <Login />
                </Route>
            </Switch>
        </Layout>
    );
}

export default App;
