import "./LightButton.scss";

interface Props {
  onClick: Function;
  color: string;
  title: string;
  col?: string;
  w?: string;
  h?: string;
  p?: string;
  pl?: string;
  pr?: string;
  pb?: string;
  pt?: string;
  m?: string,
  mt?: string,
  ml?: string,
  mr?: string,
  mb?: string,
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
    margin:  `${props.m && props.m}`,
    marginTop: `${props.mt && props.mt}`,
    marginBottom: `${props.mb && props.mb}`,
    marginLeft: `${props.ml && props.ml}`,
    marginRight: `${props.mr && props.mr}`
  };

  const Class = `button ${props.col && props.col} ${props.color}`

  return (
    <button
      className={Class}
      style={Style}
    >
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      {props.title}
    </button>
  );
}

export default Button;

//blue, red, green, yellow, lime, grey
