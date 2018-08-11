import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, } from "recharts";

export class Chart extends React.Component {
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
            <div><BarChart width={600} height={300} data={data}
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
