import styled from "styled-components";
import { satellite } from "../api/getSatellites";

interface satelliteProps {
  satellite: satellite;
  onSelect: (satellite: satellite) => void;
}

export default function Satellite(props: satelliteProps) {
  return (
    <Wrapper>
      <SatName>{props.satellite.name}</SatName>
      <SelectSatButton onClick={() => props.onSelect(props.satellite)}>
        Wybierz
      </SelectSatButton>
    </Wrapper>
  );
}

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
  margin-left: 10px;
`;
