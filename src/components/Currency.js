import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const ExpenseTotal = () => {
    const { dispatch } = useContext(AppContext);
    const updateCurrency = (newCurrency) => {
        dispatch({
            type: "CHG_CURRENCY",
            payload: newCurrency
        });
    }
    return (
        <div className='alert alert-secondary'>
            <select className="custom-select" id="currencySelect" onChange={(event) => updateCurrency(event.target.value)}>
                <option defaultValue value="$" name="$ Dollar">$ Dollar</option>
                <option value="£" name="£ Pound">£ Pound</option>
                <option value="€" name="€ Euro">€ Euro</option>
                <option value="₹" name="₹ Rupee">₹ Rupee</option>
            </select>
        </div>
    );
};
export default ExpenseTotal;