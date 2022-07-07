import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../CSS/style.css"
import LineChart from "../components/charts/ValueChart";
import FloatChart from "../components/charts/FloatChart";
import ProfitBar from "../components/charts/ProfitBar";
import ValueChart from "../components/charts/ValueChart";
import SectorChart from "../components/charts/SectorChart";
import MoneyRotated from "../components/charts/MoneyRotated";
import ListOfTrades from "../components/ListOfTrades";
import VolumeChart from "../components/charts/VolumeChart";

const Main = () => {
    const navigate = useNavigate();
    const [trades, setTrades] = useState([]);
    const [valueChart, setValueChart] = useState(false)
    const [floatChart, setFloatChart] = useState(false)
    const [tradeChart, setTradeChart] = useState(false)
    const [sectorChart, setSectorChart] = useState(false)
    const [moneyChart, setMoneyChart] = useState(false)
    const [volumeChart, setVolumeChart] = useState(false)


    const renderValueChart = () => {
        if (valueChart === false) setValueChart(true)
        else setValueChart(false)
    }
    const renderFloatChart = () => {
        if (floatChart === false) setFloatChart(true)
        else setFloatChart(false)
    }
    const renderTradeChart = () => {
        if (tradeChart === false) setTradeChart(true)
        else setTradeChart(false)
    }
    const renderSectorChart = () => {
        if (sectorChart === false) setSectorChart(true)
        else setSectorChart(false)
    }
    const renderMoneyChart = () => {
        if (moneyChart === false) setMoneyChart(true)
        else setMoneyChart(false)
    }
    const renderVolumeChart = () => {
        if (volumeChart === false) setVolumeChart(true)
        else setVolumeChart(false)
    }

    return (
        <div className="form">
            <h1 className="header">Main View Page</h1>
            <button className="button" onClick={() => (navigate("/post"))}>Post Trade</button>

            <ListOfTrades />
            {
                trades ? (
                    <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
                        <div style={{ width: "50vw" }}>
                            <h1 style={{ textAlign: "center", textDecoration: "underline", cursor: "grab" }} onClick={() => (renderValueChart())}>Trade Value Chart</h1>
                            {
                                valueChart ? (
                                    <ValueChart />
                                ) : null
                            }
                        </div>
                        <div style={{ width: "50vw" }}>
                            <h1 style={{ textAlign: "center", textDecoration: "underline", cursor: "grab" }} onClick={() => (renderTradeChart())}>Profit Chart</h1>
                            {
                                tradeChart ? (
                                    <ProfitBar />
                                ) : null
                            }
                        </div>
                        <div style={{ width: "50vw" }}>
                            <h1 style={{ textAlign: "center", textDecoration: "underline", cursor: "grab" }} onClick={() => (renderFloatChart())}>Stock Float Chart</h1>
                            {
                                floatChart ? (
                                    <FloatChart />
                                ) : null
                            }
                        </div>
                        <div style={{ width: "50vw" }}>
                            <h1 style={{ textAlign: "center", textDecoration: "underline", cursor: "grab" }} onClick={() => (renderVolumeChart())}>Volume Chart</h1>
                            {
                                volumeChart ? (
                                    <VolumeChart />
                                ) : null
                            }
                        </div>
                        <div style={{ width: "50vw" }}>
                            <h1 style={{ textAlign: "center", textDecoration: "underline", cursor: "grab" }} onClick={() => (renderSectorChart())}>Sector Chart</h1>
                            {
                                sectorChart ? (
                                    <SectorChart />
                                ) : null
                            }
                        </div>
                        <div style={{ width: "50vw" }}>
                            <h1 style={{ textAlign: "center", textDecoration: "underline", cursor: "grab" }} onClick={() => (renderMoneyChart())}>Money Rotated Chart</h1>
                            {
                                moneyChart ? (
                                    <MoneyRotated />
                                ) : null
                            }
                        </div>
                    </div>
                ) : null
            }
        </div>
    )
}
export default Main 