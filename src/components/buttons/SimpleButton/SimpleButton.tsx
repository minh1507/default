import { btnColor } from "common/constants/constant";

interface Props {
  onClick: Function;
  color: string;
  title: string;
  shadow?: boolean;
  col?: string;
  w?: string;
  h?: string;
  p?: string;
  pl?: string;
  pr?: string;
  pb?: string;
  pt?: string;
  m?: string;
  mt?: string;
  ml?: string;
  mr?: string;
  mb?: string;
}

function Button(props: Props) {
  const Style = {
    width: `${props.w && props.w}`,
    height: `${props.h && props.h}`,
    padding: `${props.p && props.p}`,
    paddingLeft: `${props.pl && props.pl}`,
    paddingRight: `${props.pr && props.pr}`,
    paddingBottom: `${props.pb && props.pb}`,
    paddingTop: `${props.pt && props.pt}`,
    margin: `${props.m && props.m}`,
    marginTop: `${props.mt && props.mt}`,
    marginBottom: `${props.mb && props.mb}`,
    marginLeft: `${props.ml && props.ml}`,
    marginRight: `${props.mr && props.mr}`,
  };

  const Class = `btn ${props.shadow && "shadow-none"} ${
    props.col && props.col
  } ${btnColor[props.color as keyof typeof btnColor]}`;

  return (
    <button
      style={Style}
      className={Class}
      onClick={() => {
        props.onClick();
      }}
    >
      {props.title}
    </button>
  );
}

export default Button;

//blue, red, green, yellow, lime, white, grey
