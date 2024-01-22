import React, {useEffect, useState} from "react";
import {getObjects} from "../libraries/functions";
import OrdersListItem from "../ordersListItem/OrdersListItem";

import StylesOL from "./OrdersList.module.scss"
const OrdersList = () => {
    const [orders, setOrders] = useState([]);

    useEffect( () => {
        getObjects('orders').then(r => setOrders(r))
    }, []);

    if (orders != null) {
        return (
            <div className={StylesOL.orderList}>
                    {orders.map(order =>
                            <OrdersListItem order={order} key={order.orderId}/>
                    )}
            </div>

        );
    }
};

export default OrdersList;