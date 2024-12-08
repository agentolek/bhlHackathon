import { apiUrl } from "./constants";

export interface satellite {
  name: string;
  designator: string;
  mass: number;
  city: string;
}

interface satelliteResponse {
  intDesignator: string;
  launchDate: string;
  satalt: number;
  satid: number;
  satlat: number;
  satlng: number;
  satname: string;
  mass: number;
}

export async function getSatellites(city: string) {
  const data = await fetch(apiUrl + "getSatelites?city=" + city);
  const jsonData = (await data.json()) as satelliteResponse[];
  return jsonData.map((satellite) => {
    return {
      name: satellite.satname,
      designator: satellite.intDesignator,
      mass: satellite.mass,
      city: city,
    } as satellite;
  });
}
