import { useState } from "react"
import "./InputField.css"

export default function InputField({label, onButtonClick})
{
    const [value, setValue] = useState("");
    return(
        <div className="input-field">
            <label htmlFor="inputEl">{label}</label>
            <input id="inputEl" type="text" onChange={e => setValue(e.target.value)} value={value} />
            <button onClick={onButtonClick} >Искать</button>
        </div>
    )
}