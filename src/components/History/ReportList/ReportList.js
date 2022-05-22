import Download from 'icons/Download';

import Report from './Report';

function ReportList({
  reports,
  selectedReport,
  onSelectReport,
  isLoading,
  onDownloadHistory,
}) {
  const reportsToShow = isLoading ? new Array(3).fill(null) : reports;

  return (
    <>
      <p className="font-bold pb-4 text-lg p-4 flex items-center">
        Reportes
        {selectedReport && (
          <button
            type="button"
            title="Descargar respuestas"
            onClick={onDownloadHistory}
          >
            <Download className="ml-2 cursor-pointer" />
          </button>
        )}
      </p>
      <ul className="md:w-fit h-full overflow-y-auto">
        {reportsToShow.map((report, index) => {
          const isSelected = report === selectedReport;
          return (
            <Report
              key={report ?? `report-${index}`}
              onSelectReport={onSelectReport}
              isLoading={isLoading}
              isSelected={isSelected}
              report={report}
            />
          );
        })}
      </ul>
    </>
  );
}

export default ReportList;
