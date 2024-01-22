import React, {useState} from 'react';
import {apiUrl} from '../libraries/functions'

import StylesAOF from "./AddOrderForm.module.scss";
import OrderInput from "../UI/input/OrderInput";
const AddOrderForm = () => {
    const [order, setOrder] = useState({
        sourceCity: '',
        sourceAddress: '',
        destinationCity: '',
        destinationAddress: '',
        cargoWeight: '',
        dateOfCollection: ''
    })
    
    const [errorMessage, setErrorMessage] = useState({
        status: '',
        message: ''
    })
    const checkValues = (_order) => {
        return !(_order.sourceCity === '' 
            || _order.sourceAddress === '' 
            || _order.destinationCity === ''
            || _order.destinationAddress === ''
            || _order.cargoWeight === ''
            || _order.dateOfCollection === '');
    }
    
    const createOrder = async (e) => {
        e.preventDefault();
        setErrorMessage({status:"", message:""});
        if (!checkValues(order)) {
            setErrorMessage({status:"error", message:"Все поля должны быть заполнены!"})
            return errorMessage
        }
        console.log(order)
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(order)
        }

        const result = await fetch(apiUrl + "orders", options)
        
        if (result.ok) {
            const orderId = await result.json()
            setErrorMessage({status:"ok", message:"Заказ №" + orderId + " успешно создан!"})
            return orderId
        }
    }
    
    const getError = () => {
        if (errorMessage.status === 'ok') {
            return (
                <div className={StylesAOF.ok}>
                    {errorMessage.message}
                </div>
            );
        } else if (errorMessage.status === 'error') {
            return (
                <div className={StylesAOF.error}>
                    {errorMessage.message}
                </div>
            )
        }
    }
    

    return (
        <form className={StylesAOF.addOrderForm}>
            <section className={StylesAOF.address}>
                <label htmlFor={"sourceCity"}>Город отправителя</label>
                <OrderInput
                    id={"sourceCity"}
                    value={order.sourceCity}
                    onChange={e => setOrder({...order, sourceCity: e.target.value})}
                    placeholder={"Введите город отправителя"}/>

                <label htmlFor={"sourceAddress"}>Адрес отправителя</label>
                <OrderInput
                    id={"sourceAddress"}
                    value={order.sourceAddress}
                    onChange={e => setOrder({...order, sourceAddress: e.target.value})}
                    placeholder={"Введите адрес отправителя"}/>
            </section>

            <section className={StylesAOF.address}>
                <label htmlFor={"destCity"}>Город получателя</label>
                <OrderInput
                    id={"destCity"}
                    value={order.destinationCity}
                    onChange={e => setOrder({...order, destinationCity: e.target.value})}
                    placeholder={"Введите город получателя"}/>

                <label htmlFor={"destAddress"}>Адрес отправителя</label>
                <OrderInput
                    id={"destAddress"}
                    value={order.destinationAddress}
                    onChange={e => setOrder({...order, destinationAddress: e.target.value})}
                    placeholder={"Введите адрес получателя"}/>
            </section>

            <section className={StylesAOF.weightAndDate}>
                <div className={StylesAOF.halfForm}>
                    <label htmlFor={"cargoWeight"}>Вес груза</label>
                    <OrderInput
                        id={"cargoWeight"}
                        value={order.cargoWeight}
                        onChange={e => setOrder({...order, cargoWeight: e.target.value})}
                        type={"number"} step={"any"} placeholder={"Введите вес груза"}/>
                </div>

                <div className={StylesAOF.halfForm}>
                    <label htmlFor={"dateOfCollection"}>Дата забора груза</label>
                    <OrderInput
                        id={"dateOfCollection"}
                        value={order.dateOfCollection}
                        onChange={e => setOrder({...order, dateOfCollection: e.target.value})}
                        type={"date"} placeholder={"Выберите дату забора груза"}/>
                </div>
            </section>

            <button onClick={e => {
                createOrder(e)
            }}>
                Создать заказ
            </button>
            {getError()}


        </form>
    );
};

export default AddOrderForm;