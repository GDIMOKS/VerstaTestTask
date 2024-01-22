import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import StylesOLI from "./OrderListItem.module.scss";
import {getOrderNumber} from "../libraries/functions";

const OrdersListItem = ({order}, key) => {
    
    const getDate = (date) => {
        const _date = new Date(date)
        
        const day = (_date.getDay() < 10) ? '0' + _date.getDay() : _date.getDay();
        let month = _date.getMonth()+1
        month = (month < 10) ? '0'+month : month
        
        return day + '.' + month + '.' + _date.getFullYear()
    }
    
    
    return (
        <div className={StylesOLI.orderListItem}>
            <Link to={'/order?' + order.orderId} key={key}
                  value={order.orderId} >
                <h3>Заказ № {getOrderNumber(order)}</h3>
                <section className={StylesOLI.address}>
                    <div>
                        <strong>Город отправителя: </strong>
                        {order.sourceCity}
                    </div>

                    <div>
                        <strong>Адрес отправителя: </strong>
                        {order.sourceAddress}
                    </div>
                </section>

                <section className={StylesOLI.address}>
                    <div>
                        <strong>Город получателя: </strong>
                        {order.destinationCity}
                    </div>

                    <div>
                        <strong>Адрес отправителя: </strong>
                        {order.destinationAddress}
                    </div>

                </section>

                <section className={StylesOLI.address}>
                    <div>
                        <div>
                            <strong>Вес груза: </strong>
                            {order.cargoWeight}
                        </div>
                    </div>

                    <div>
                        <strong>Дата забора груза: </strong>
                        {
                            getDate(order.dateOfCollection)
                        }
                    </div>
                </section>

            </Link>
        </div>

    );
};

export default OrdersListItem;