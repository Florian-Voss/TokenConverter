import React, { useState } from "react";
 
export const TokenConverter = () => {
    const [input, setInput] = useState("");
    const [longTokens, setLongTokens] = useState<string[]>([]);
    const [shortTokens, setShortTokens] = useState<string[]>([]);
    function hexTo10DigitDecimal(hex : any){
        const number = parseInt(hex, 16);
        let result = number.toString();
        while(result.length < 10){
            result = "0" + result;
        }
        return result;
    }
    
    function handleClick(event : any){
        setLongTokens([]);
        const shortTokenPattern = /UID Length 40 Bits ' UID HEX .*(.{8})$/gm;
        const longTokenPattern = /(?<=UID Length 56 Bits ' UID HEX ).{14}$/gm
        const longTokenMatches = input.matchAll(longTokenPattern)
        const longTokenArray = [...longTokenMatches]
        const longTokenStringArray = longTokenArray.map(x => x.toString())
        setLongTokens([...longTokenStringArray]);
        const shortTokenMatches = input.matchAll(shortTokenPattern)
        const shortTokenArray = [...shortTokenMatches]
        const convertedShortTokens = shortTokenArray.map(x => hexTo10DigitDecimal([x[1]]))
        setShortTokens([...convertedShortTokens])
    }

    return(
        <div className="TokenConverter" style={{display: "flex", flexDirection: "column", justifyContent: "space-between", alignItems: "center", marginBottom: "auto"}}>
            <h3 style={{margin : "5px"}}>Input</h3>
            <textarea autoFocus className="input" value={input} style={{resize: "none"}} onChange={(e) => { setInput(e.target.value); setLongTokens([]); setShortTokens([])}} cols={93} rows={2}></textarea>
            <button style={{marginBottom : "0px", marginTop : "20px"}} onClick={handleClick}>Convert</button>
            <div style={{width:"100%", display: "flex", justifyContent: "space-between"}}>
                <div style={{width:"100%", display: "flex", flexDirection: "column"}}>
                <h3 style={{margin : "5px"}}>MIFARE Token</h3>
                {
                    longTokens.map(token => {
                        return <label className="longToken">{token}</label>
                    })
                }
                </div>
                <div style={{width:"100%", display: "flex", flexDirection: "column"}}>
                <h3 style={{margin : "5px"}}>EM4x02 Token</h3>
                {
                    shortTokens.map(token => {
                        return <label className="shortToken">{token}</label>
                    })
                }
                </div>
            </div>
        </div>
    );
}