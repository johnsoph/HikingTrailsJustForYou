import React from "react"


export default function Toggle(props) {
    const {label, onChange} = props;
    // const [toggled, setToggled] = useState(false)
    

    return(
        <div>
<<<<<<< HEAD
=======
            <input 
                type="text" 
                placeholder="Zip Code"
            />
>>>>>>> 3fcf0870fb541e7f72f628a31b897c2b11177a84
            <label className="switch" >
                {label}
                <input type="checkbox" onChange={(e) => onChange(e.target.checked)}/>
                <div className="slider round"/>
            </label>
        </div>
    )
}


