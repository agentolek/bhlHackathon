interface fancyMapProps {
  width: number;
  height: number;
}

export default function FancyMap(props: fancyMapProps) {
  return (
    <embed
      type="text/html"
      src="fancyMap.html"
      width={props.width}
      height={props.height}
    />
  );
}
