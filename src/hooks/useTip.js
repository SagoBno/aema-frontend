import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import Minimum from 'illustrations/ranges/Minimum';
import Moderate from 'illustrations/ranges/Moderate';
import Severe from 'illustrations/ranges/Severe';
import Slight from 'illustrations/ranges/Slight';

import { isBetween } from 'utils/numbers';
import useLastResult from './useLastResult';

const scoresRanges = new Map([
  [
    {
      type: 'minimum',
      image: <Minimum />,
      tip: 'Realizamos el análisis de tus resultados con base en el inventario de Beck (BDI-II) encontramos que tienes un buen estado de ánimo y estás en la capacidad de disfrutar tus actividades cotidianas, te invitamos a realizar nuevamente nuestra prueba en dos semanas.',
    },
    [0, 13],
  ],
  [
    {
      type: 'slight',
      image: <Slight />,
      tip: 'Realizamos el análisis de tus resultados con base en el inventario de Beck (BDI-II) te recomendamos tomar caminatas de 15 a 30 minutos, cuidar tu alimentación e identifica los problemas y no le des tantas vueltas. Recuerda que en AEMA cuentas con una base de datos de profesionales con sus respectivos datos de contacto y comunicarte con ellos si así lo deseas. Recuerda contactar a un profesional de la salud para realizar nuevamente esta prueba.',
    },
    [14, 19],
  ],
  [
    {
      type: 'moderate',
      image: <Moderate />,
      tip: 'Realizamos el análisis de tus resultados con base en el inventario de Beck (BDI-II) recuerda que en AEMA cuentas con una base de datos de profesionales con sus respectivos datos de contacto y comunicarte con ellos si así lo deseas. Te recomendamos fijarte en el lado positivo de las cosas, dejar que tu creatividad fluya y ejercitar tu imaginación de manera constante. No dejes de lado tu bienestar y recuerda realizar nuevamente esta prueba después de haberte contactado con un profesional de la salud para llevar el control de tu proceso y descargar tus informes de manera periódica.',
    },
    [20, 28],
  ],
  [
    {
      type: 'severe',
      image: <Severe />,
      tip: 'Realizamos el análisis de tus resultados con base en el inventario de Beck (BDI-II) te invitamos a consultar la base de datos de profesionales con sus respectivos contactos y comunicarte con ellos de forma rápida o si deseas con un profesional de la salud que sea de tu entera confianza. Te recomendamos aprovechar el tiempo en actividades como los pasatiempos, deportes y actividades que estimulen tus sensaciones de alegría y felicidad. Recuerda realizar nuevamente esta prueba en dos semanas después de haberte contactado con un profesional de la salud para llevar el control de tu proceso y descargar tus informes de manera periódica.',
    },
    [29, 63],
  ],
]);

const useTip = () => {
  const { query } = useRouter();
  const { lastResult, isLoading } = useLastResult(query.date);
  const [rangeLevel, setRangeLevel] = useState();

  useEffect(() => {
    if (!isLoading) {
      scoresRanges.forEach((scoresRange, key) => {
        if (!isBetween(...scoresRange, lastResult.total)) return;
        setRangeLevel(key);
      });
    }
  }, [lastResult, isLoading]);

  return {
    rangeLevel,
    isLoading: !rangeLevel,
  };
};

export default useTip;
