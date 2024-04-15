import { useEffect, useState } from "react";

export default function Location() {
  const [location, setLocation] = useState(null);
  const [userLocation, setUserLocation] = useState("");
  const [error, setError] = useState(false);

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        // Success callback
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation({ latitude, longitude });
          setError(false);
        },
        // Error callback
        (error) => {
          console.error("Error getting location:", error);
          setError(true);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  };
  useEffect(() => {
    async function fetchLocation() {
      if (location) {
        const res = await fetch(
          `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${location?.latitude}&longitude=${location?.longitude}`
        );
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        const data = await res.json();
        console.log(data.city, data.principalSubdivision, data.countryName);
        setUserLocation(
          `${data.city},${data.principalSubdivision},${data.countryName}`
        );
      } else {
        setUserLocation("");
      }
    }
    fetchLocation();
  }, [location]);
  return (
    <div className="mt-6 flex flex-col space-y-4">
      <div className="flex space-x-2">
        <p className="text-lg font-bold ">Add your Location</p>
        <button
          onClick={getLocation}
          className="bg-pink-500 hover:bg-pink-700 text-sm text-white py-1 px-2 rounded"
        >
          Get Location
        </button>
      </div>
      <div className="flex flex-col">
        {error && (
          <p className="text-sm text-red-500">Error getting location</p>
        )}
        <input
          type="text"
          value={userLocation}
          onChange={(e) => setUserLocation(e.target.value)}
          className="w-full px-4 py-3 text-md  leading-tight text-black font-semibold  rounded-lg focus:outline-none "
        />
        <hr className=" w-full bg-gray-200" />
      </div>
    </div>
  );
}
