import React from "react";

import DestinationItem from "./DestinationItem";

function DestinationList({data}){
    // console.log("DestinationList: props", data)


    /**
     * Passing props to child component - 'DestinationItem'
     * 
     */
    return(
        <div>
            <h1>Here are recommended travel destinations</h1>
            <hr></hr>
            {data !== null && data !== undefined && data.length > 0 
            ? data.map(item =>
               <DestinationItem destination={item} />)
                 : <div>No destinations found</div>}
        </div>
    )
}
export default DestinationList