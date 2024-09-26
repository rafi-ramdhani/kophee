"use client";

import { AdvancedMarker, APIProvider, Map } from "@vis.gl/react-google-maps";

export default function GoogleMap() {
  const center = {
    lat: -6.303755622501053,
    lng: 106.64988653877222,
  };

  return (
    <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ?? ""}>
      <Map
        className="w-full h-full"
        mapId={process.env.NEXT_PUBLIC_GOOGLE_MAPS_ID ?? ""}
        defaultCenter={center}
        defaultZoom={15}
        gestureHandling={"cooperative"}
      >
        <AdvancedMarker position={center} />
      </Map>
    </APIProvider>
  );
}
