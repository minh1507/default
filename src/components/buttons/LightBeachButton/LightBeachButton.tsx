import "./LightBeachButton.scss";
import { style } from "glamor";
import { lightBeach } from "common/constants/constant";

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
  m?: string;
  mt?: string;
  ml?: string;
  mr?: string;
  mb?: string;
}

function Button(props: Props) {
  const styles = style({
    "--clr": lightBeach[props.color as keyof typeof lightBeach],
  });

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

  const Class = `LightBeachButton ${props.col && props.col}`;

  return (
    <button {...styles} style={Style} className={Class}>
      <span>Button</span>
      <i></i>
    </button>
  );
}

export default Button;

// purple,yellow,lowGreen,green,orange,red,blue,pink,lowPurple,lime,lowYellow,highPink,highYellow
