import Link from 'next/link';

import routes from 'config/routes';

import BeckInstructionsIllustration from 'illustrations/BeckInstructions';

function BeckInstructions() {
  return (
    <div className="flex flex-col items-center">
      <BeckInstructionsIllustration />
      <div className="px-10 md:px-5 max-w-lg text-center text-xl md:text-2xl">
        <p>
          Sabemos que los chicos y chicas como tu tienen diferentes sentimientos
          e ideas. Este cuestionario consta de 21 grupos de afirmaciones. Por
          favor, lee con atención cada uno de ellos cuidadosamente. Luego elige
          uno de cada grupo, el que mejor describa el modo como te has sentido
          las últimas dos semanas, incluyendo el día de hoy. Selecciona solo una
          respuesta en cada grupo para continuar respondiendo el cuestionario.
          Si varias respuestas del mismo grupo te parecen apropiados selecciona
          la de más te acerque a como eres o te sientes. Recuerda que no hay
          contestaciones correctas o incorrectas, solo tienes que seleccionar la
          frase que describa mejor como te has sentido últimamente.
        </p>
        <Link href={`${routes.INVENTORY}?page=1`}>
          <a className="c_primary-button mt-5 block">Iniciar</a>
        </Link>
      </div>
    </div>
  );
}

export default BeckInstructions;
