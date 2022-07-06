import React, { useState, useEffect } from "react";
import axios from "axios"
import { Bar } from "react-chartjs-2"
import { Chart as ChartJS } from "chart.js/auto"

const ProfitBar = () => {
    const [profitData, setProfitData] = useState()

    useEffect(() => {
        axios.get("http://localhost:8000/api/getAll")
            .then(res => {
                // console.log(res.data);
                let arrAvg=[]
                const getArrAvg = (data) => {
                    let value=0
                    for(let i = 0; i<data.length; i++){
                        value += ((data[i].sold-data[i].bought)*data[i].size)
                        arrAvg.push(value)
                    }
                    return value  
                }
                getArrAvg(res.data)
                setProfitData({
                    labels: res.data.map((trade, idx) => trade.ticker),
                    datasets: [{
                        type:"bar",
                        label: "Profit $",
                        data: res.data.map((trade, idx) => ( trade.size * (trade.sold-trade.bought))),
                        backgroundColor: ["skyBlue"],
                        borderColor: "black",
                        borderWidth: 2,
                        order:2,
                        hoverBackgroundColor:"lightGrey"
                    }, {
                        type:"line",
                        label: "Average Profit $",
                        data: arrAvg.map((profit, idx) => ( profit)/(idx+1)),
                        backgroundColor: ["grey"],
                        borderColor: "orange",
                        borderWidth: 2,
                        order:1
                    }]

                })
            })
            .catch(err => console.log("errr", err));
    }, [])



    return (
        <div>
            <h1 style={{textAlign:"center", textDecoration:"underline"}}>Trade Value Chart</h1>
            {
                profitData ? (
                    <div>
                        <Bar data={profitData} />
                    </div>
                ) : "Loading trade data"
            }

        </div>
    )
}
export default ProfitBar