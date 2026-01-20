import { useState } from "react"
import "./InputField.css"

export default function InputField({label, initValue = "", onButtonClick})
{
    const [value, setValue] = useState(initValue);
    return(
        <div className="input-field">
            <label htmlFor="inputEl">{label}</label>
            <input id="inputEl" type="text" onChange={e => setValue(e.target.value)} value={value} />
            <button onClick={() => onButtonClick(value)} >Искать</button>
        </div>
    )
}