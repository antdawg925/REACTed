import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../CSS/style.css"
import axios from "axios";

const ViewOne = () => {
    const [trade, setTrade] = useState([])

    const navigate = useNavigate();

    const { id } = useParams();
    // console.log("THE ID-", id);

    useEffect(() => {
        axios.get("http://localhost:8000/api/getOne/" + id)
            .then(res => {
                // console.log(res.data, "VIEW ONE AXIOS");
                setTrade(res.data)
            })
            .catch(err => console.log(err))
    }, [id])

    return(
        <div className="form">
            {/* {JSON.stringify(trade)} */}      
            <h1> Ticker: {trade.ticker} </h1><br/>
            <h1> Size: {trade.size} </h1>
            <h1> Bought: {trade.bought} </h1>
            <h1> Sold: {trade.sold} </h1>
            <h1> Float: {trade.float} </h1>
            <h3>profit = {(trade.sold - trade.bought)* trade.size}</h3>
            <button className="button"onClick={() => navigate(-1)}>Back</button>
        </div>
    )

}
export default ViewOne