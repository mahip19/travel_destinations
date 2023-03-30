import React from 'react';

function DestinationItem(destination){

    /**
     * returns image_url to display image
     * (need to fix !)
     */
    const getURL = async () => {
        const urltofetch =  destination.destination.relationships.field_destination_image.links.related.href;
        const res = await fetch(urltofetch, {mode: 'cors', method:'GET'});
        const d = await res.json();
    //    /travel_destinations/web/sites/default/files/2023-03/udaipur.jpg
        const url = 'http://localhost'+d.data.attributes.uri.url;
        console.log(url);
        return url;
    }

    let imageURL = '';
    // if ( destination.destination.relationships.field_destination_image.data !== null){
    //     imageURL = getURL();
    // }


    // console.log("destinationItem", destination.destination.attributes.body.value)
    const destination_body =  destination.destination.attributes.body.value;
    const destination_title = destination.destination.attributes.title;
    return(
        <div>
        <h1>{destination_title}</h1>
        <div dangerouslySetInnerHTML={{__html:destination_body}}   />
        
        {/* {
             destination.destination.relationships.field_destination_image.data !== null 
             ?
            // display image
            <img 
            src={imageURL} />
            :
            // no image
            <></>   
            
            } */}
        </div>
    )
}
export default DestinationItem