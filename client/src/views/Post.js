import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../CSS/style.css"

const Post = () => {

    const [ticker, setTicker] = useState("")
    const [bought, setBought] = useState(0)
    const [sold, setSold] = useState(0)
    const [market, setMarket] = useState("")
    const [size, setSize] = useState(0)
    const [float, setFloat] = useState(0)
    const [volume, setVolume] = useState(0)
    const [sector, setSector] = useState("")
    const [date, setDate] = useState("")

    const navigate = useNavigate();
    const postTrade = (e) => {
        e.preventDefault()
        axios.post("http://localhost:8000/api/post", {
            ticker,
            bought,
            sold,
            date,
            market,
            float,
            size,
            volume,
            sector
        })
            .then(res => {
                console.log(res);
                navigate("/")
            })
            .catch(err => {
                console.log(err);
            })
    }
    return (
        <div style={{}}>
            <form className="form" onSubmit={(e) => postTrade(e)}>
                <h1 className="header">Lets post a trade now!</h1>

                <div className="flex">
                    <div className="input">
                        <h4>Ticker:</h4>
                        <input type="text" onChange={(e) => setTicker(e.target.value)} value={ticker} />
                    </div>

                    <div className="input">
                        <h4>Day Volume:</h4>
                        <input type="number" onChange={(e) => setVolume(e.target.value)} value={volume} />
                    </div>
                </div>

                <div className="flex">
                    <div className="input">
                        <h4>Buy Price:</h4>
                        <input type="number" onChange={(e) => setBought(e.target.value)} value={bought} />
                    </div>
                    <div className="input">
                        <h4>Sell Price:</h4>
                        <input type="number" onChange={(e) => setSold(e.target.value)} value={sold} />
                    </div>
                </div>
                <div className="flex">

                    <div className="input">
                        <h4 >Position Size:</h4>
                        <input type="number" onChange={(e) => setSize(e.target.value)} value={size} /> <br />
                    </div>

                    <div className="input">
                        <h4 >Float:</h4>
                        <input type="number" onChange={(e) => setFloat(e.target.value)} value={float} /> <br />
                    </div>
                </div>
                <div className="flex">
                    <div className="input">
                        <h4>Market</h4>
                        <select onChange={(e) => setMarket(e.target.value)} value={market} >
                            <option >-------------------------</option>
                            <option value='NASDAQ'>NASDAQ</option>
                            <option value='NYSE'>NYSE</option>
                            <option value='OTC'>OTC</option>
                        </select>

                    </div>

                    <div className="input">
                        <h4 >Sector:</h4>
                        <select type="number" onChange={(e) => setSector(e.target.value)} value={sector} > <br />
                            <option >-------------------------</option>
                            <option value='Energy'>Energy</option>
                            <option value='Materials'>Materials</option>
                            <option value='Industries'>Industries</option>
                            <option value='Utilities'>Utilities</option>
                            <option value='Healthcare'>Healthcare</option>
                            <option value='Financial'>Financial</option>
                            <option value='Consumer Disrecreation'>Consumer Disrecreation</option>
                            <option value='Consumer Staples'>Consumer Staples</option>
                            <option value='Information Technology'>Information Technology</option>
                            <option value='Communication '>Communication </option>
                            <option value='Real Estate '>Real Estate </option>
                        </select>

                    </div>
                </div>

                <div className="flex">
                    <div className="input">
                        <h4 >Date:</h4>
                        <input type="date" onChange={(e) => setDate(e.target.value)} value={date} /> <br />
                    </div>
                </div>

                <button className="button">    Submit!    </button>
                <button onClick={() => navigate("/")} className="button">   Cancel     </button>
            </form>

        </div>
    )
}
export default Post 