interface fancyMapProps {
  width: number;
  height: number;
}

export default function FancyMap(props: fancyMapProps) {
  return (
    <embed
      type="text/html"
      src="http://127.0.0.1:5000/getMap"
      width={props.width}
      height={props.height}
    />
  );
}
