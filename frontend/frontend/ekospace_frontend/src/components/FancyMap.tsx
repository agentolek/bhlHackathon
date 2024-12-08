import { apiUrl } from "../api/constants";

interface fancyMapProps {
  width: number;
  height: number;
  designator: string | undefined;
  city: string;
}

export default function FancyMap(props: fancyMapProps) {
  console.log(props);
  return (
    <embed
      type="text/html"
      src={"http://localhost:5000/getMap?city=London&designator=1979-058A"}
      width={props.width}
      height={props.height}
    />
  );
}
