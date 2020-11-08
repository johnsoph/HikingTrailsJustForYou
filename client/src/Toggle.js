import React from "react"


export default function Toggle(props) {
    const {label, onChange} = props;
    // const [toggled, setToggled] = useState(false)
    

    return(
        <div>
            <input 
                type="text" 
                placeholder="Zip Code"
            />
            <label className="switch" >
                {label}
                <input type="checkbox" onChange={(e) => onChange(e.target.checked)}/>
                <div className="slider round"/>
            </label>
        </div>
    )
}


