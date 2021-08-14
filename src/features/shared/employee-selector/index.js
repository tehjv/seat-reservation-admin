import React from "react";
import { Select } from 'semantic-ui-react'
// import SelectionContext from '../../../context/selectionContext'

const EmployeeSelector = ({ props }) => {
    // const selection = useContext(SelectionContext);

    let employeeList = [
        { key: '1', value: '1', text: 'John' },
        { key: '2', value: '2', text: 'Juan' },
        { key: '3', value: '3', text: 'Maria' },
    ]

    if (props && props.exemptions) {
        props.exemptions.forEach(exemption => {
            employeeList = employeeList.filter(employee => employee.key === exemption);
        });
    }

    return (<div className="mx-2">
        <Select placeholder='Select employee' onChange={e => {
            console.log(e.target)
            console.log(e)
            console.log(e.target.value)
            // selection.setLocation(e.target.value)
        }} options={employeeList} />
    </div>);
}

export default EmployeeSelector;