import React, { useState, useEffect } from "react";
import axios from "axios"
import { Line } from "react-chartjs-2"
import { Chart as ChartJS } from "chart.js/auto"

const FloatChart = () => {

    const [floatData, setFloatData] = useState()

    useEffect(() => {
        axios.get("http://localhost:8000/api/getAll")
            .then(res => {
                // console.log(res.data);
                let arrAvg=[]
                const getArrAvg = (data) => {
                    let value=0
                    for(let i = 0; i<data.length; i++){
                        value += (data[i].float)
                        arrAvg.push(value)
                    }
                    return value  
                }
                getArrAvg(res.data)
                setFloatData({
                    labels: res.data.map((trade, idx) => trade.ticker),
                    datasets: [{
                        label: "Position Float",
                        data: res.data.map((trade, idx) => ( trade.float)),
                        backgroundColor: ["yellow"],
                        borderColor: "white",
                        borderWidth: 2
                    }, {
                        label: "Average Float",
                        data: arrAvg.map((float, idx) => ( float)/(idx+1)),
                        backgroundColor: ["blue"],
                        borderColor: "grey",
                        borderWidth: 2
                    }]

                })
            })
            .catch(err => console.log("errr", err));
    }, [])



    return (
        <div>
            <h1 style={{textAlign:"center", textDecoration:"underline"}}>Float Chart</h1>
            {
                floatData ? (
                    <div>
                        <Line data={floatData} />
                    </div>
                ) : "Loading trade data"
            }

        </div>
    )
}
export default FloatChart