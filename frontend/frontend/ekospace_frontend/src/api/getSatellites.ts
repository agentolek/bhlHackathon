import { apiUrl } from "./constants";

export interface satellite {
  name: string;
  designator: string;
}

interface satelliteResponse {
  intDesignator: string;
  launchDate: string;
  satalt: number;
  satid: number;
  satlat: number;
  satlng: number;
  satname: string;
}

interface satellitesResponse {
  above: satelliteResponse[];
  info: unknown;
}

export async function getSatellites(city: string) {
  const data = await fetch(apiUrl + "getSatelites?city=" + city);
  const jsonData = (await data.json()) as satellitesResponse;
  return jsonData.above?.map((sattelite) => {
    return {
      name: sattelite.satname,
      designator: sattelite.intDesignator,
    } as satellite;
  });
}
