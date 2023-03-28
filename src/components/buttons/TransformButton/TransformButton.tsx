import { lightBeach } from "common/constants/constant";
import "./TransformButton.scss";

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
    backgroundColor: `${
      props.color && lightBeach[props.color as keyof typeof lightBeach]
    }`,
  };

  const Class = `noselect ${props.col && props.col}`;

  return (
    <button className={Class} style={Style}>
      <span className="text">{props.title}</span>
      <span className="icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z" />
        </svg>
      </span>
    </button>
  );
}

export default Button;

// purple,yellow,lowGreen,green,orange,red,blue,pink,lowPurple,lime,lowYellow,highPink,highYellow
