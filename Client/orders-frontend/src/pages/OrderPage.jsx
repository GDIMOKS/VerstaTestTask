import React from 'react';
import ReadOrderForm from "../components/readOrderForm/ReadOrderForm";
import {Link} from "react-router-dom";

const OrderPage = () => {
    return (
        <div className={"AddOrderPage"}>
            <div className="buttonsPanel">
                <Link className="button" to={{
                    pathname: "/"
                }}>
                    <button>
                        На главную (список заказов)
                    </button>
                </Link>
            </div>
            
            <ReadOrderForm/>
        </div>
    );
};

export default OrderPage;