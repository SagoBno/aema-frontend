// eslint-disable-next-line import/prefer-default-export
export const getCookie = (name, { isBoolean }) => {
  if (typeof document === 'undefined') return undefined;

  const value = `; ${document.cookie}`;

  const parts = value.split(`; ${name}=`);

  if (parts.length !== 2) {
    return undefined;
  }

  const cookie = parts.pop().split(';').shift();

  if (isBoolean) {
    return cookie === 'true';
  }

  return cookie;
};
