import { ExportToCsv } from "export-to-csv";

const defaultOptions = {
  fieldSeparator: ";",
  quoteStrings: '"',
  decimalSeparator: ".",
  showLabels: true,
  showTitle: true,
  useTextFile: false,
  useBom: true,
};

export const getCsvExporter = ({ headers, filename, title, ...options } = {}) =>
  new ExportToCsv({
    ...defaultOptions,
    ...options,
    filename,
    title,
    ...(headers ? { headers } : { useKeysAsHeaders: true }),
  });
