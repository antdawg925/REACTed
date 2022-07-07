import React, { useState, useEffect } from "react";
import axios from "axios"
import { Line } from "react-chartjs-2"
import { Chart as ChartJS } from "chart.js/auto"

const ValueChart = () => {
    const [tradeValueData, setTradeValueData] = useState()

    useEffect(() => {
        axios.get("http://localhost:8000/api/getAll")
            .then(res => {
                let arrAvg=[]
                const getArrAvg = (data) => {
                    let value=0
                    for(let i = 0; i<data.length; i++){
                        value += (data[i].bought*data[i].size)
                        arrAvg.push(value)
                    }
                    return value  
                }
                getArrAvg(res.data)
                setTradeValueData({
                    labels: res.data.map((trade, idx) => trade.ticker),
                    datasets: [{
                        label: "Position value $",
                        data: res.data.map((trade, idx) => ( trade.size * trade.bought)),
                        backgroundColor: ["green"],
                        borderColor: "white",
                        borderWidth: 2
                    }, {
                        label: "Average value $",
                        data: arrAvg.map((trade, idx) => ( trade)/(idx+1)),
                        backgroundColor: ["maroon"],
                        borderColor: "grey",
                        borderWidth: 2
                    }]

                })
            })
            .catch(err => console.log("errr", err));
    }, [])

    return (
        <div>
            {/* <h1 style={{textAlign:"center", textDecoration:"underline"}}>Trade Value Chart</h1> */}
            {
                tradeValueData ? (
                    <div>
                        <Line data={tradeValueData} />
                    </div>
                ) : "Loading trade data"
            }
        </div>
    )
}
export default ValueChart