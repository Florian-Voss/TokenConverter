import React, { useState } from "react";
 
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
            <textarea autoFocus className="input" value={input} style={{}} onChange={(e) => setInput(e.target.value)} cols={93} rows={2}></textarea>
            <button style={{marginBottom : "0px", marginTop : "20px"}} onClick={handleClick}>convert</button>
            <h3 style={{margin : "5px"}}>MIFARE Token</h3>
            <label className="longtoken">{longToken}</label>
            <h3 style={{margin : "5px"}}>EM4 Token</h3>
            <label className="shorttoken">{shortToken}</label>
        </div>
    );
}