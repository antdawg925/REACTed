import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../CSS/style.css"
import LineChart from "../components/ValueCart";
import FloatChart from "../components/FloatChart";
import ProfitBar from "../components/ProfitBar";

const Main = () => {
    const navigate = useNavigate();
    const [trades, setTrades] = useState([]);


    useEffect(() => {
        axios.get("http://localhost:8000/api/getAll")
            .then(res => {
                // console.log(res.data);
                setTrades(res.data);
            })
            .catch(err => console.log("errr", err));
    }, [])

    return (
        <div className="form">
            <h1 style={{ textAlign: "center" }}>Main View Page</h1>
            <button className="button" onClick={() => (navigate("/post"))}>Post Trade</button>
            {
                trades.map((trade, idx) => {
                    return (
                        <div key={trade._id} style={{ textAlign: "center", textDecoration: "underline", cursor: "grab" }}>
                            <h2 onClick={() => navigate("/trade/" + trade._id)}>{trade.ticker} </h2>
                        </div>
                    )
                })
            }
            {
                trades ? (
                    <div style={{display:"flex",flexWrap:"wrap", justifyContent:"center"}}>
                        <div style={{width:"50vw"}}>
                            <LineChart />
                        </div>
                        <div style={{width:"50vw"}}>
                            <FloatChart />
                        </div>
                        <div style={{width:"50vw"}}>
                            <ProfitBar />
                        </div>
                    </div>

                ) : "NOPE"
            }

        </div>
    )
}
export default Main 