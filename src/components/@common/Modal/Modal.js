import React from 'react';

function Modal({
  title, body, footer,
}) {
  return (
    <>
      <div
        className="fixed inset-0 z-50 h-screen w-screen"
      >
        <div className="grid grid-rows-modal my-6 mx-auto max-w-3xl h-[stretch] rounded-lg shadow-lg bg-general-bg">
          <header className="p-5 border-b border-solid border-secondary-100">
            <h3 className="text-3xl font-semibold">
              {title}
            </h3>
          </header>
          <div className="p-6 overflow-y-auto">
            {body}
          </div>
          <footer className="flex items-center justify-end p-2 border-t border-solid border-secondary-100">
            {footer}
          </footer>
        </div>
      </div>
      <div className="fixed inset-0 z-40 bg-secondary-400/50" />
    </>
  );
}

export default Modal;
