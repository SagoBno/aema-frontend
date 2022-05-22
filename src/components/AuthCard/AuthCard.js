import Link from 'next/link';
import Image from 'next/image';
import routes from 'config/routes';

function AuthCard({ title, content, isLogin = false }) {
  return (
    <div className="w-full p-10">
      <div className="w-3/5 mx-auto text-center">
        <Image src="/img/logo.png" height={100} width={200} alt={title} />
      </div>
      <p className="text-primary-500 font-bold text-sm text-center max-w-[250px] mx-auto">Herramienta para conocer la salud emocional de los adolescentes</p>
      <p className="text-secondary-400 mt-6 font-bold text-2xl">{title}</p>
      {isLogin ? (
        <p className="text-right mt-2 text-xs text-secondary-100 inline-block">
          ¿No estás registrado? 👉
          <Link href={routes.SIGNUP}>
            <a className="underline ml-1 font-bold">Regístrate</a>
          </Link>
        </p>
      ) : (
        <p className="text-right mt-2 text-xs text-secondary-100 inline-block">
          ¿Ya estás registrado? 👉
          <Link href={routes.LOGIN}>
            <a className="underline ml-1 font-bold">Iniciar sesión</a>
          </Link>
        </p>
      )}
      <div className="mt-6">{content}</div>
    </div>
  );
}

export default AuthCard;
