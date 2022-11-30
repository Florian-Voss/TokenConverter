import matchers from "@testing-library/jest-dom/matchers";
import React, { useState } from "react";
import { arrayBuffer } from "stream/consumers";
 
export const TokenConverter = () => {
    const [input, setInput] = useState("");
    const [longToken, setLongToken] = useState("");
    const [shortToken, setShortToken] = useState("");
    function hexTo10DigitDecimal(hex : any){
        const number = parseInt(hex, 16);
        let result = number.toString();
        while(result.length < 10){
            result = "0" + result;
        }
        return result;
    }
    
    function handleClick(event : any){
        const shortTokenPattern = /UID Length 40 Bits ' UID HEX .*(.{8})$/gm;
        const longTokenPattern = /(?<=UID Length 56 Bits ' UID HEX ).{14}$/gm
        const longTokenMatches = input.matchAll(longTokenPattern)
        const longTokenArray = [...longTokenMatches]
        setLongToken(longTokenArray.join("\n"));
        const shortTokenMatches = input.matchAll(shortTokenPattern)
        const shortTokenArray = [...shortTokenMatches]
        const convertedShortTokens = shortTokenArray.map(x => hexTo10DigitDecimal([x[1]]))
        setShortToken(convertedShortTokens.join("\n"))
    }

    return(
        <div className="TokenConverter" style={{display: "flex", flexDirection: "column", justifyContent: "space-between", alignItems: "center", marginBottom: "auto"}}>
            <h3 style={{margin : "5px"}}>Input</h3>
            <textarea className="input" value={input} onChange={(e) => setInput(e.target.value)} cols={93} rows={8}></textarea>
            <button style={{marginBottom : "0px", marginTop : "20px"}} onClick={handleClick}>Umwandeln</button>
            <h3 style={{margin : "5px"}}>Long Tokens</h3>
            <textarea className="longtoken" value={longToken} cols={93} rows={8}></textarea>
            <h3 style={{margin : "5px"}}>Short Tokens</h3>
            <textarea className="shorttoken" value={shortToken} cols={93} rows={8}></textarea>
        </div>
    );
}