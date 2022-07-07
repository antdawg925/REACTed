import React, { useState, useEffect } from "react";
import axios from "axios"
import { Bar } from "react-chartjs-2"
import { Chart as ChartJS } from "chart.js/auto"

const SectorChart = () => {
    const [sectorData, setSectorData] = useState()


    useEffect(() => {
        axios.get("http://localhost:8000/api/getAll")
            .then(res => {
                // console.log(res.data);
                let arrAvg = []
                const getArrAvg = (data) => {
                    let value = 0
                    for (let i = 0; i < data.length; i++) {
                        value += ((data[i].sold - data[i].bought) * data[i].size)
                        arrAvg.push(value)
                    }
                    return value
                }
                let sectorScore = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                const tallyScore = (data) => {
                    for (let i = 0; i < data.length; i++) {
                        if (data[i].sector === "Energy") {
                            sectorScore[0] += 1
                        } else if (data[i].sector === "Materials") {
                            sectorScore[1] += 1
                        } else if (data[i].sector === "Industries") {
                            sectorScore[2] += 1
                        } else if (data[i].sector === "Utilities") {
                            sectorScore[3] += 1
                        } else if (data[i].sector === "Healthcare") {
                            sectorScore[4] += 1
                        } else if (data[i].sector === "Financial") {
                            sectorScore[5] += 1
                        } else if (data[i].sector === "Consumer Disrecreation") {
                            sectorScore[6] += 1
                        } else if (data[i].sector === "Consumer Staples") {
                            sectorScore[7] += 1
                        } else if (data[i].sector === "Information Technology") {
                            sectorScore[8] += 1
                        } else if (data[i].sector === "Communication") {
                            sectorScore[9] += 1
                        } else if (data[i].sector === "Real Estate") {
                            sectorScore[10] += 1
                        }
                    }
                    return sectorScore
                };
                tallyScore(res.data);

                getArrAvg(res.data)
                setSectorData({
                    labels: ["Energy", "Materials", "Industries", "Utilities", "Healthcare", "Financial", "Consumer Disrecreation", "Consumer Staples", "Information Technology", "Communication", "Real Estate"],
                    datasets: [{
                        label: "Sector",
                        data: sectorScore.map((sector, idx) => (sector)),
                        backgroundColor: ["forestGreen"],
                        borderColor: "limeGreen",
                        borderWidth: 2,
                        hoverBackgroundColor: "lightGrey"
                    }]

                })
            })
            .catch(err => console.log("errr", err));
    }, [])



    return (
        <div>
            {/* <h1 style={{textAlign:"center", textDecoration:"underline"}}>Profit Chart</h1> */}
            {
                sectorData ? (
                    <div>
                        <Bar data={sectorData} />
                    </div>
                ) : "Loading sector data"
            }

        </div>
    )
}
export default SectorChart