import { useEffect } from 'react';

const useFormPersist = (
  name,
  { watch, setValue },
  {
    storage,
    exclude = [],
    include,
    onDataRestored,
    validate = false,
    dirty = false,
  } = {},
) => {
  const values = watch(include);
  const getStorage = () => storage || window.sessionStorage;
  const clear = () => getStorage().removeItem(name);

  useEffect(() => {
    const str = getStorage().getItem(name);
    if (str) {
      const valuesArray = JSON.parse(str);
      const dataRestored = {};

      Object.keys(valuesArray).forEach((key) => {
        const shouldSet = !exclude.includes(key);
        if (shouldSet) {
          dataRestored[key] = valuesArray[key];
          setValue(key, valuesArray[key], {
            shouldValidate: validate,
            shouldDirty: dirty,
          });
        }
      });

      if (onDataRestored) {
        onDataRestored(dataRestored);
      }
    }
  }, [name]);

  useEffect(() => {
    getStorage().setItem(name, JSON.stringify(values));
  });

  useEffect(() => clear, []);

  return {
    clear,
  };
};

export default useFormPersist;
