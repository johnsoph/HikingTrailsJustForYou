import React from "react"



export default function Toggle(props) {
    const {label, onChange} = props;
    // const [toggled, setToggled] = useState(false)


    return(
        <div>
            {label}
            <label className="switch" >
                <input type="checkbox" onChange={(e) => onChange(e.target.checked)}/>
                <span className="slider round"/>
            </label>
        </div>
    )
}
