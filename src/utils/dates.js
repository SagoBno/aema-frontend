import dayjs from "dayjs";

import "dayjs/locale/es";

dayjs.locale("es");

export const formatDate = (date) =>
  dayjs(date).format("ddd, MMM D, YYYY h:mm A");
