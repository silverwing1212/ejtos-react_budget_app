import React, { useContext/*useState*/ } from 'react';
import { AppContext } from '../context/AppContext';
const MAX_BUDGET = 20000;
const Budget = () => {
    const { budget, expenses, currency, dispatch } = useContext(AppContext);
    const updateBudget = (newBudget) => {
        const totalExpenses = expenses.reduce((total, item) => {
            return (total = total + item.cost);
        }, 0);
        if (newBudget < totalExpenses) {
            alert(`Budget cannot be lower than spending ${totalExpenses}.  Requested: ${newBudget}`);
            return;
        }
        if (newBudget > MAX_BUDGET) {
            alert(`Budget cannot exceed maximum ${MAX_BUDGET}.  Requested: ${newBudget}`);
            return;
        }
        dispatch({ 
            type: "SET_BUDGET", 
            payload: newBudget
        })
    }
    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency}
                <input
                    required='required'
                    type='number'
                    id='entered-budget'
                    value={budget}
                    step={10}
                    style={{ marginLeft: '2rem' , size: 10}}
                    onChange={(event) => updateBudget(event.target.value)}>
                </input>
            </span>
        </div>
    );
};
export default Budget;