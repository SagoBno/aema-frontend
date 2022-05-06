import Link from 'next/link';

import routes from 'config/routes';

import BeckForm from 'illustrations/BeckForm';

function StartBeck() {
  return (
    <div className="flex flex-col items-center">
      <BeckForm />
      <div className="max-w-lg text-center">
        <p>
          El Inventario de Ansiedad de Beck es una herramienta útil para
          valorar los síntomas somáticos de ansiedad, tanto en desórdenes de
          ansiedad como en cuadros depresivos. El cuestionario consta de 21
          preguntas
        </p>
        <Link href={`${routes.INVENTORY}?page=1`}>
          <a className="c_primary-button mt-5 block">Iniciar</a>
        </Link>
      </div>
    </div>
  );
}

export default StartBeck;
