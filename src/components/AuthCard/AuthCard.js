import Link from 'next/link';
import Image from 'next/image';
import routes from 'config/routes';

function AuthCard({ title, content }) {
  return (
    <div className="w-full p-10">
      <div className="w-3/5 mx-auto">
        <Image src="/img/logo.png" height={100} width={200} alt={title} />
      </div>
      <p className="text-secondary-400 mt-6 font-bold text-2xl">{title}</p>
      <div className="mt-6">{content}</div>
      <div className="flex text-xs w-full mt-10">
        <Link href={routes.FORGOT_PASSWORD}>
          <a className="text-secondary-100 w-1/2">¿Olvidaste tu contraseña?</a>
        </Link>
        <Link href={routes.SIGNUP}>
          <a className="text-right text-secondary-100 w-1/2">Crear cuenta</a>
        </Link>
      </div>
    </div>
  );
}

export default AuthCard;
