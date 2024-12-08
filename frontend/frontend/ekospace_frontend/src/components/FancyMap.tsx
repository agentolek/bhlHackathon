import { apiUrl } from "../api/constants";

interface fancyMapProps {
  width: number;
  height: number;
  designator: string | undefined;
  city: string;
}

export default function FancyMap(props: fancyMapProps) {
  return props.designator ? (
    <embed
      type="text/html"
      src={
        apiUrl + "getMap?city=" + props.city + "&designator=" + props.designator
      }
      width={props.width}
      height={props.height}
    />
  ) : (
    <></>
  );
}
