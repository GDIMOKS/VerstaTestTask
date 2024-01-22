import React, {useEffect, useState} from 'react';
import {apiUrl, getObjects, getOrderNumber} from "../libraries/functions";
import {useLocation} from "react-router";
import StylesROF from "./ReadOrderForm.module.scss";
import OrderInput from "../UI/input/OrderInput";

const ReadOrderForm = () => {
    const [order, setOrder] = useState({
        orderId: '',
        sourceCity: '',
        sourceAddress: '',
        destinationCity: '',
        destinationAddress: '',
        cargoWeight: '',
        dateOfCollection: ''
    })

    const state = useLocation()
    const orderId = state.search.substring(1)

    useEffect(() => {
        getObjects("orders\\" + orderId).then(async r => setOrder(r))
    }, []);
    
    const getDate = () => {
        const newDate = new Date(order.dateOfCollection)
        const date = newDate.toLocaleDateString().split('.')

        return date[2]+'-'+date[1]+'-'+date[0]
    }
    
    return (
        <form className={StylesROF.readOrderForm}>
            <h3>Заказ № {getOrderNumber(order)}</h3>
            <section className={StylesROF.address}>
                <label htmlFor={"sourceCity"}>Город отправителя</label>
                <OrderInput
                    disabled
                    id={"sourceCity"}
                    value={order.sourceCity}
                    placeholder={"Введите город отправителя"}/>

                <label htmlFor={"sourceAddress"}>Адрес отправителя</label>
                <OrderInput
                    disabled
                    id={"sourceAddress"}
                    value={order.sourceAddress}
                    placeholder={"Введите адрес отправителя"}/>
            </section>

            <section className={StylesROF.address}>
                <label htmlFor={"destCity"}>Город получателя</label>
                <OrderInput
                    disabled
                    id={"destCity"}
                    value={order.destinationCity}
                    placeholder={"Введите город получателя"}/>

                <label htmlFor={"destAddress"}>Адрес отправителя</label>
                <OrderInput
                    disabled
                    id={"destAddress"}
                    value={order.destinationAddress}
                    placeholder={"Введите адрес получателя"}/>
            </section>

            <section className={StylesROF.weightAndDate}>
                <div className={StylesROF.halfForm}>
                    <label htmlFor={"cargoWeight"}>Вес груза</label>
                    <OrderInput
                        disabled
                        id={"cargoWeight"}
                        value={order.cargoWeight}
                        type={"number"} step={"any"} placeholder={"Введите вес груза"}/>
                </div>

                <div className={StylesROF.halfForm}>
                    <label htmlFor={"dateOfCollection"}>Дата забора груза</label>
                    <OrderInput
                        disabled
                        id={"dateOfCollection"}
                        value={getDate()}
                        type={"date"} placeholder={"Выберите дату забора груза"}/>
                </div>
            </section>

        </form>
    );
};

export default ReadOrderForm;