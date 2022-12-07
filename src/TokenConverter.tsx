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
        <div className="TokenConverter" style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
            <h3 style={{margin : "20px"}}>Input</h3>
            <textarea autoFocus className="input" value={input} style={{resize: "none"}} onChange={(e) => { setInput(e.target.value); setLongTokens([]); setShortTokens([])}} cols={93} rows={6}></textarea>
            <button style={{margin: "75px"}} className="primary-button" onClick={handleClick}>Convert</button>
            <div style={{width:"100%", display: "flex", justifyContent: "space-between"}}>
                <div style={{width:"100%", display: "flex", flexDirection: "column"}}>
                {longTokens.length > 0 ? <h3 style={{margin: "5px"}}>MIFARE Token</h3> : null}
                {
                    longTokens.map(token => {
                        return <input type="text" size={14} style={{margin:"5px", backgroundColor:"white", borderRadius: "3px", border:"2px solid yellowgreen"}} disabled value={token}></input>
                    })
                }
                </div>
                <div style={{width:"100%", display: "flex", flexDirection: "column"}}>
                {shortTokens.length > 0 ? <h3 style={{margin : "5px"}}>EM4x02 Token</h3> : null}
                {
                    shortTokens.map(token => {
                        return <input type="text" style={{margin: "5px", backgroundColor:"white", borderRadius: "3px", border:"2px solid yellowgreen"}} disabled value={token}></input>
                    })
                }
                </div>
            </div>
        </div>
    );
}