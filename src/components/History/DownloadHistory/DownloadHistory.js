import React from 'react';
import Download from 'illustrations/Download';

function DownloadHistory({ onDownloadHistory }) {
  return (
    <button
      type="button"
      className="text-center text-primary-500 hover:text-secondary-400 w-56 opacity-60 hover:opacity-100"
      onClick={onDownloadHistory}
    >
      <Download />
      <p className="bg-primary-500 text-white rounded-full mt-4 font-medium tracking-[2.5px] uppercase text-xs p-3 border-none outline-none">
        Descargar historial
      </p>
    </button>
  );
}

export default DownloadHistory;
