import React, { useId } from 'react'

function InputBox({
    // variables for storing value
    label1,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectCurrency = 'usd',
    amountDisable = false,
    currencyDisable = false,
    className = "",
}) {
    const amountInputId = useId() //react hook for unique id 

    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
            {/* css is under backtiks because we are taking a css class from user also */}
            <div className={amountInputId}>
                <label htmlFor=""></label>
                <label className="text-black/40 mb-2 inline-block">
                    {label1}
                    {/* displaying label */}
                </label>
                <input

                    id={amountInputId} /* using the unique id which was generated by react hook*/
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    disabled={amountDisable} //getting the variable value
                    value={amount} //amount variable value
                    onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))// wrapping the value in number to prevent string type
                    } //firing and event and then calling the event onAmountChange and because of no default value use  && to check if amount available then only change.
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={selectCurrency} //deafult usd dollars
                    onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                    disabled={currencyDisable}

                >
                    {/* looping the currency  options field */}
                    {currencyOptions.map((currency) => (
                        <option value={currency}
                            //to avoid performance issues of react pass this key always need in loops
                            key={currency}
                        >
                            {currency}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
}

export default InputBox;
