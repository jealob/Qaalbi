import React from "react";

export const MonthMenu = props => (
        <select id="eventMonth" className="form-control" name="eventMonth" {...props}>
            <option defaultValue>Month</option>
            <option>January</option>
            <option>February</option>
            <option>March</option>
            <option>April</option>
            <option>May</option>
            <option>June</option>
            <option>July</option>
            <option>August</option>
            <option>September</option>
            <option>October</option>
            <option>November</option>
            <option>December</option>
        </select>
);

export const YearMenu = props => (
    <select id="eventYear" className="form-control" name="eventYear" {...props}>
        <option defaultValue>Year</option>
        <option>2018</option>
        <option>2019</option>
        <option>2020</option>
    </select>
);

export const Input = props => (
    <input type="text" className="form-control" name={props.name} title={props.placeholder} {...props} />
);

export const FormBtn = (props) => (
    <button {...props} style={{ marginBottom: 10 }} className="btn btn-success mb-0">
        {props.children}
    </button>
);

export const TextArea = props => (
    <textarea className="form-control" rows="20" {...props} />
);