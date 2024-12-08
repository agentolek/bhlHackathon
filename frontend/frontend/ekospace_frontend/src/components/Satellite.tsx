import styled from "styled-components";
import { satellite } from "../api/getSatellites";

interface satelliteProps {
  satellite: satellite;
  onSelect: (satellite: satellite) => void;
}

export default function Satellite(props: satelliteProps) {
  return (
    <Wrapper>
      <SatInfo>
        <SatName>{props.satellite.name}</SatName>
        <SatMass>masa: {props.satellite.mass} kg</SatMass>
      </SatInfo>
      <SelectSatButton onClick={() => props.onSelect(props.satellite)}>
        Wybierz
      </SelectSatButton>
    </Wrapper>
  );
}

const SatInfo = styled.div`
  display: flex;
  margin-left: 10px;
  flex-direction: column;
`;

const SatMass = styled.p``;

const SelectSatButton = styled.button`
  margin: 10px;
`;

const Wrapper = styled.div`
  background-color: rgb(7, 29, 38);
  display: flex;
  justify-content: space-between;
  text-align: start;
`;

const SatName = styled.h1`
  font-size: 1.5em;
`;
