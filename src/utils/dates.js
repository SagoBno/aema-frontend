import dayjs from 'dayjs';

import 'dayjs/locale/es';

dayjs.locale('es');

// eslint-disable-next-line import/prefer-default-export
export const formatDate = (date) => dayjs(date).format('ddd, MMM D, YYYY h:mm A');
