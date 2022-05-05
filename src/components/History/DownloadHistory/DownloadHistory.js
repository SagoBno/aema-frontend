import React from 'react';
import Image from 'next/image';

function DownloadHistory({ onDownloadHistory }) {
  return (
    <button
      type="button"
      className="text-center text-primary-500 hover:text-secondary-400 w-56 opacity-60 hover:opacity-100"
      onClick={onDownloadHistory}
    >
      <div className="px-10">
        <Image src="/img/logos/excel.png" width={300} height={270} />
      </div>
      <p className="bg-[#005F30] text-white rounded-full mt-4 font-medium tracking-[2.5px] uppercase text-xs p-3 border-none outline-none">
        Descargar historial
      </p>
    </button>
  );
}

export default DownloadHistory;
