import Link from "next/link";

import classes from "./button.module.css";

export default function Button(props) {
  if (!props.link) {
    return <button className={classes.btn}>{props.children}</button>;
  }

  return (
    <Link href={props.link} className={classes.btn}>
      {props.children}
    </Link>
  );
}
