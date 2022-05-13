import toast from 'react-hot-toast';
import { useEffect, useState } from 'react';

import FrequentTip from 'components/@common/FrequentTip';

const FREQUENCY = 90000;
const DURATION = 40000;
const POSITION = 'bottom-right';

const TIPS = [
  'Distráete generando emociones opuestas a las que te molesta o sensaciones intensas que no te lastimen',
  'Come algo que te haga sentir mejor',
  'Escucha tu canción favorita',
  'Evalúa los pros y contras de tolerar el malestar ',
  'Admitir ciertas cosas te alivia el sufrimiento ',
  'Sonríe, recuerda que la actitud que toma tu cuerpo se la transmites a tu mente',
  'Tú, como padre o tutor, puedes fomentar actividades sociales ',
  'Tú, como padre o tutor, antes de retarlo, pregúntate por qué hacen aquello que te molesta ',
  'Tú, como padre o tutor, escúchalo empáticamente',
  'Tú, como padre o tutor, promueve actividades placenteras',
];

const useFrequentTips = () => {
  const [tipIndex, setTipIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTipIndex((prev) => (tipIndex >= TIPS.length ? 0 : prev + 1));
    }, FREQUENCY);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    toast.custom(
      (t) => <FrequentTip visible={t.visible} id={t.id} tip={TIPS[tipIndex]} />,
      {
        duration: DURATION,
        position: POSITION,
      },
    );
  }, [tipIndex]);
};

export default useFrequentTips;
