import { height, width } from "@mui/system";
import { useState } from "react";
import {ColorBox} from './ColorBox';

export function AddColor(){
    const [color, setColor]=useState("deepskyblue");
    const styles={
        backgroundColor:color,
    };
    const INITIAL_COLOR_LIST=["deepskyblue","orange","purple"];
    const [colorList,setColorList]=useState(INITIAL_COLOR_LIST);
    return(
        <div>
            <input
                value={color}
                onChange={(event)=>setColor(event.target.value)}
                style={styles}
                placeholder="Enter a color"
            />
            <button onClick={()=>setColorList([...colorList,color])}>
                Add Color</button>

                {colorList.map((clr,index)=>{
                    <ColorBox key={index} color={clr}/>
                })}
                <ColorBox/>
                <ColorBox/>
                
                
        </div>
    )
}

