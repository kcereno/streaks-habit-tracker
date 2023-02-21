/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import EmojiPicker, { Theme } from 'emoji-picker-react';

function Modal() {
  return (
    <>
      {/*  */}
      <input type="checkbox" id="modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <form action="">
            <div className="form-control ">
              <label className="label">
                <span className="label-text">What do you want to do?</span>
              </label>
              <input
                type="text"
                placeholder="Exercise"
                className="input input-bordered w-full "
              />
            </div>
            <div className="form-control w-full mt-2">
              <label className="label">
                <span className="label-text">How many time a day?</span>
              </label>
              <input
                type="number"
                placeholder="1"
                className="input input-bordered w-full"
              />
            </div>
            <div className="form-control w-full mt-2">
              <div>
                <label className="label">
                  <span className="label-text">Select an emoji as an icon</span>
                </label>
                <EmojiPicker
                  theme={Theme.DARK}
                  width="100%"
                  previewConfig={{
                    defaultCaption: 'Pick one!',
                    defaultEmoji: '1f92a', // 🤪
                  }}
                />
              </div>
            </div>
          </form>

          <div className="modal-action">
            <button type="button" className="btn btn-success">
              Add Habit
            </button>
            <button type="button" className="btn btn-outline btn-error">
              <label htmlFor="modal">Cancel</label>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Modal;
