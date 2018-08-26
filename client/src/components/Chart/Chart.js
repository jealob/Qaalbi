import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, } from "recharts";
import Select from "react-select";

const options = [
    { value: 'Birthday', label: 'Birthday' },
    { value: 'Anniversary', label: 'Anniversary' },
    { value: 'Bridal Shower', label: 'Bridal Shower' },
    { value: 'Wedding', label: 'Wedding' },
    { value: 'Other', label: 'Other' },
]

export default class Chart extends React.Component {
    componentDidMount() {

    }
    render() {
        const data = [
            { name: "Beauty", amt: 400 },
            { name: "Transportation", amt: 600 },
            { name: "Entertainment", amt: 1000 },
            { name: "Photography", amt: 1000 },
            { name: "Event Planner", amt: 1500 },
            { name: "Rentals", amt: 1500 },
            { name: "Catering", amt: 2000 },
            { name: "Decor", amt: 4000 },
            { name: "Venue", amt: 5000 },


        ];
        return (
            <div>
                <Select options={options} />
                <BarChart width={1200} height={800} data={data}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="amt" fill="#8884d8" />
                </BarChart></div>
        );
    }
}
