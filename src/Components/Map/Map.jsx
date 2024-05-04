import React from "react";

import { GoogleMap , useLoadScript  , MarkerF } from "@react-google-maps/api";

const MyComponent = ({selectedLocation}) => {

    const {isLoaded , loadError} = useLoadScript({
        googleMapsApiKey : REACT_APP_GOOGLE_MAPS_KEY
    })

    c
   const onMapLoad = React.useCallback
    return (
        <div>
            <GoogleMap
            mapContainerStyle={{
                height :  "800px"
            }}
            center={selectedLocation}
            zoom={13}
            
            >

            </GoogleMap>
        </div>
    ) 
}

export default MyComponent