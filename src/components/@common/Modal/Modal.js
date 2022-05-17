import React from 'react';

function Modal({ setShowModal, title }) {
  return (
    <div
      className="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
      id="exampleModalScrollable"
      tabIndex="-1"
      aria-labelledby="exampleModalScrollableLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-scrollable relative w-auto pointer-events-none">
        <div
          className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current"
        >
          <div
            className="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md"
          >
            <h5 className="text-xl font-medium leading-normal text-gray-800" id="exampleModalScrollableLabel">
              {title}
            </h5>
            <button
              onClick={setShowModal(true)}
              type="button"
              className="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
              data-bs-dismiss="modal"
              aria-label="Close"
            />
          </div>
          <div className="modal-body relative p-4">
            <p>
              This is some placeholder content to show the scrolling behavior for modals.
              We use repeated line breaks to demonstrate how content can exceed minimum inner
              height, thereby showing inner scrolling. When content becomes longer than the
              predefined max-height of modal, content will be cropped and scrollable within
              the modal.
            </p>
            <p>This content should appear at the bottom after you scroll.</p>
          </div>
          <div
            className="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md"
          >
            <button
              onClick={setShowModal(true)}
              type="button"
              className="inline-block px-6 py-2.5 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out"
              data-bs-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
