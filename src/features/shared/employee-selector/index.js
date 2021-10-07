import React from "react";
import { Select } from 'semantic-ui-react'
// import SelectionContext from '../../../context/selectionContext'
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    select: {
        border: `1px solid ${theme.palette.secondary.light} !important`,
        color: `${theme.palette.text.select} !important`,
        padding: "1.11rem 1.6rem !important",
        '&:hover, &:active, &:focus, &:focus-visible': {
            border: `1px solid ${theme.palette.secondary.main} !important`,
            color: `${theme.palette.text.primary} !important`,
            outline: 'none !important'
        }
    },
}));

const EmployeeSelector = ({ props }) => {
    // const selection = useContext(SelectionContext);
    const themeClasses = useStyles();

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

    function changeHandler(val) {
        console.log(props)
        props.updater(val);
    }

    return (<div className="mx-2">
        <Select placeholder='Select employee' onChange={e => {
            changeHandler(e.target.querySelector('span').innerHTML);
        }} options={employeeList} className={"rounded border-2 " + themeClasses.select} />
    </div>);
}

export default EmployeeSelector;