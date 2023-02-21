/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

function Modal() {
  return (
    <>
      {/*  */}
      <input type="checkbox" id="" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box w-72 max-w-5xl">
          <h3 className="font-bold text-lg">New Habit</h3>
          <div className="mt-4">
            <form action="">
              <div className="form-control  max-w-xs">
                <label className="label">
                  <span className="label-text">What do you want to do?</span>
                </label>
                <input
                  type="text"
                  placeholder="Exercise"
                  className="input input-bordered w-full max-w-xs"
                />
              </div>
              <div className="form-control w-full max-w-xs mt-2">
                <label className="label">
                  <span className="label-text">How many time a day?</span>
                </label>
                <input
                  type="number"
                  placeholder="1"
                  className="input input-bordered w-full max-w-xs"
                />
              </div>
              <div className="form-control w-full max-w-xs mt-2">
                <label className="label">
                  <span className="label-text">Select an emoji as an icon</span>
                </label>
                <input
                  type="number"
                  placeholder="1"
                  className="input input-bordered w-full max-w-xs"
                />
              </div>
            </form>
          </div>
          <div className="modal-action">
            <label htmlFor="my-modal-5" className="btn">
              Yay!
            </label>
          </div>
        </div>
      </div>
    </>
  );
}

export default Modal;
