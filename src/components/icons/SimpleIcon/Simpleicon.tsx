import "./SimpleIcon.scss";
import { style } from "glamor";
import { Link } from "react-router-dom";
import {Colorful} from "common/constants/constant"

interface Props {
  link: string;
  icon: string;
  color: string;
  title: string;
  w?: string;
  h?: string;
  m?: string;
  mt?: string;
  ml?: string;
  mr?: string;
  mb?: string;
}

function Icon(props: Props) {
  const styles = style({
    background: Colorful[props.color as keyof typeof Colorful],
    width: `${props.w && props.w} !important`,
    height: `${props.h && props.h} !important`,
    margin: `${props.m && props.m} !important`,
    marginLeft: `${props.ml && props.ml} !important`,
    marginRight: `${props.mr && props.mr} !important`,
    marginTop: `${props.mt && props.mt} !important`,
    marginBottom: `${props.mb && props.mb} !important`,
    ":hover": {
      background: Colorful[props.color as keyof typeof Colorful],
    },
    ":hover .tooltip": {
      background: Colorful[props.color as keyof typeof Colorful],
    },
    ":hover .white": {
      transition: "0.5s",
      color: "#ffffff !important",
    },
  });

  return (
    <ul className="simpleIcon">
      <li className="icon facebook" {...styles}>
        <span className="tooltip">{props.title}</span>

        <Link to={props.link}>
          <i className={`${props.icon} white`} style={{color: Colorful[props.color as keyof typeof Colorful]}}></i>
        </Link>
      </li>
    </ul>
  );
}

export default Icon;

//blue, red, green, yellow, lime, grey
//font awesome icons