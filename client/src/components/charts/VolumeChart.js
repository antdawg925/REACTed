import React, { useState, useEffect } from "react";
import axios from "axios"
import { Line } from "react-chartjs-2"
import { Chart as ChartJS } from "chart.js/auto"

const VolumeChart = () => {
    const [volumeData, setVolumeData] = useState()

    useEffect(() => {
        axios.get("http://localhost:8000/api/getAll")
            .then(res => {
                let arrAvg=[]
                const getArrAvg = (data) => {
                    let value=0
                    for(let i = 0; i<data.length; i++){
                        value += (data[i].volume)
                        arrAvg.push(value)
                    }
                    return value  
                }
                getArrAvg(res.data)
                setVolumeData({
                    labels: res.data.map((ticker, idx) => ticker.ticker),
                    datasets: [{
                        label: "Volume",
                        data: res.data.map((ticker, idx) => ( ticker.volume)),
                        backgroundColor: ["green"],
                        borderColor: "white",
                        borderWidth: 2
                    }, {
                        label: "Average Volume",
                        data: arrAvg.map((vol, idx) => ( vol)/(idx+1)),
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
                volumeData ? (
                    <div>
                        <Line data={volumeData} />
                    </div>
                ) : "Loading trade data"
            }
        </div>
    )
}
export default VolumeChart