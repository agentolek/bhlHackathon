import styled from "styled-components";
import Satellite from "./Satellite";
import { getSatellites, satellite } from "../api/getSatellites";
import { useEffect, useState } from "react";

interface satelliteSelectorProps {
  onSelect: (satellite: satellite) => void;
}

export default function SatelliteSelector(props: satelliteSelectorProps) {
  const [satellites, setSatellites] = useState<satellite[]>();
  const [city, setCity] = useState<string>();

  useEffect(() => {
    getSatellites(city ? city : "").then((res) => setSatellites(res));
  }, [city]);

  console.log(satellites);

  return (
    <Wrapper>
      <CityInput
        placeholder="Wpisz miasto"
        onChange={(event) => setCity(event.target.value)}
      />
      <ListOfSatellites>
        {satellites ? (
          satellites.map((satellite) => {
            return (
              <Satellite onSelect={props.onSelect} satellite={satellite} />
            );
          })
        ) : (
          <p>Na razie tu pusto ale jak wybierzesz miasto...</p>
        )}
      </ListOfSatellites>
    </Wrapper>
  );
}

const ListOfSatellites = styled.div``;

const Wrapper = styled.div`
  height: 400px;
  width: 600px;
  background-color: rgb(7, 29, 38);
  margin: 30px auto;
  overflow: scroll;
`;

const CityInput = styled.input`
  padding: 5px;
  font-size: 14px;
  border-width: 1px;
  border-color: #cccccc;
  background-color: #ffffff;
  color: #000000;
  text-align: center;
  border-style: solid;
  border-radius: 5px;
  outline: none;
  margin: 10px;
`;
