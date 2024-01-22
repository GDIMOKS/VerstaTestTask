import React from 'react';
import AddOrderForm from "../components/addOrderForm/AddOrderForm";
import {Link} from "react-router-dom";

import '../styles/style.scss'

const AddOrderPage = () => {
    return (
        <div className="AddOrderPage">
            <div className="buttonsPanel">
                <Link className="button" to={{
                    pathname: "/"
                }}><button>
                    На главную (список заказов)
                </button>
                    </Link>
            </div>
                <h1>Создать заказ</h1>
                <AddOrderForm/>

        </div>

    );
};

export default AddOrderPage;