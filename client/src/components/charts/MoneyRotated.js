import React, { useState, useEffect } from "react";
import axios from "axios"
import { Line } from "react-chartjs-2"
import { Chart as ChartJS } from "chart.js/auto"

const MoneyRotated = () => {
    const [moneyRotated, setMoneyRotated] = useState()

    useEffect(() => {
        axios.get("http://localhost:8000/api/getAll")
            .then(res => {
                let moneyTot=[]
                const getMoneyTot = (data) => {
                    let value=0
                    for(let i = 0; i<data.length; i++){
                        value += (data[i].bought*data[i].size)
                        moneyTot.push(value)
                    }
                    return value  
                }
                getMoneyTot(res.data)
                setMoneyRotated({
                    labels: res.data.map((trade, idx) => (idx+1)),
                    datasets: [{
                        label: "Position value $",
                        data: moneyTot.map((value, idx) => ( value)),
                        backgroundColor: ["green"],
                        borderColor: "white",
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
                moneyRotated ? (
                    <div>
                        <Line data={moneyRotated} />
                    </div>
                ) : "Loading Money Data"
            }
        </div>
    )
}
export default MoneyRotated