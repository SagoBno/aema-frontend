import React from 'react';
import Link from 'next/link';

function BackButton({ href }) {
  return (
    <Link href={href}>
      <a className="c_previous-step-button">Volver</a>
    </Link>
  );
}

export default BackButton;
