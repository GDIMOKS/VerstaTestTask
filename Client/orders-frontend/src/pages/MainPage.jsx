import React from 'react';
import {Link} from "react-router-dom";
import OrderList from "../components/ordersList/OrdersList";

import '../styles/style.scss'


const MainPage = () => {
  
    return (
        <div className={"MainPage"}>
            <div className="buttonsPanel">
                <Link to={{
                    pathname: "/addorder"
                }}>
                    <button>Создать заказ</button>
                </Link>

            </div>

            <h1>Список заказов</h1>
            <OrderList/>
        </div>
    );
};

export default MainPage;