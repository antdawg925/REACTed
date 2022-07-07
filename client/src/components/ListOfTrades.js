import React, {useState, useEffect} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ListOfTrades = () => {

    const navigate = useNavigate();
    const [trades, setTrades] = useState();

    useEffect(() => {
        axios.get("http://localhost:8000/api/getAll")
            .then(res => {
                // console.log(res.data);
                setTrades(res.data);
            })
            .catch(err => console.log("errr", err));
    }, [])

    return(
        <div>
            {
                trades? (
                    trades.map((trade, idx) => {
                        return (
                            <div key={trade._id} style={{ textAlign: "center", textDecoration: "underline", cursor: "grab" }}>
                                <h2 onClick={() => navigate("/trade/" + trade._id)}>{trade.ticker} </h2>
                            </div>
                        )
                    })
                ): null
            }
        </div>
    )
}
export default ListOfTrades