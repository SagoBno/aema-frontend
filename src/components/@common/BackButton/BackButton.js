import Link from "next/link";

const BackButton = ({ href }) => (
  <Link href={href}>
    <a className="c_previous-step-button">Volver</a>
  </Link>
);

export default BackButton;
