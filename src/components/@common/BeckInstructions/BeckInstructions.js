import Link from 'next/link';

import routes from 'config/routes';

import BeckInstructionsIllustration from 'illustrations/BeckInstructions';

function BeckInstructions() {
  return (
    <div className="flex flex-col items-center">
      <BeckInstructionsIllustration />
      <div className="px-10 md:px-5 max-w-lg text-center">
        <p className="text-center font-bold text-xl">
          Sabemos que los chicos y chicas como tu tienen diferentes sentimientos
          e ideas
        </p>
        <p className="mt-2 text-sm text-secondary-300">
          Este cuestionario consta de 21 grupos de afirmaciones.
        </p>
        <ul className="list-disc mt-10 text-left">
          <li>
            Por favor, lee con atención cada uno de ellos cuidadosamente.
          </li>
          <li className="mt-2">
            Selecciona solo una respuesta en cada grupo para continuar respondiendo el
            cuestionario. Si varias respuestas del mismo grupo te parecen
            apropiados selecciona la de más te acerque a como eres o te sientes.
          </li>
          <li className="mt-2">
            Recuerda que no hay contestaciones correctas o incorrectas, solo
            tienes que seleccionar la frase que describa mejor como te has sentido
            últimamente.
          </li>
        </ul>
        <Link href={`${routes.INVENTORY}?page=1`}>
          <a className="c_primary-button mt-5 block">Iniciar</a>
        </Link>
      </div>
    </div>
  );
}

export default BeckInstructions;
