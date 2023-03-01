/* eslint-disable @typescript-eslint/no-unused-vars */
import AddModalInput from '../AddHabitModal/AddHabitModalInput';
/* eslint-disable operator-linebreak */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable jsx-a11y/label-has-associated-control */

function EditDeleteHabitModal() {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {};

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {};

  return (
    <div className="">
      <input type="checkbox" id="modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <form onSubmit={handleSubmit}>
            {/* <AddModalInput
              label="What do you want to do?"
              type="text"
              characterLength={{ min: 1, max: 20 }}
              habitData={habitName}
              updateHabitData={setHabitName}
            /> */}

            <span className="label-text-alt">
              To acces the emoji keyboard, cick on the input field and press:
              <br />
              On PCs: Press Windows key + ; (semicolon) or Windows key +.
              (period)
              <br />
              On Macs: Press Command + Control + Space
            </span>

            {/* <div className="modal-action">
              <button
                type="submit"
                className="btn btn-success"
                disabled={!formValid}
              >
                <label htmlFor="modal">Submit</label>
              </button>

              <button
                type="button"
                className="btn btn-outline btn-error"
                onClick={handleCancel}
              >
                <label htmlFor="modal">Cancel</label>
              </button>
            </div> */}
          </form>
        </div>
      </div>
    </div>
  );
}

export default EditDeleteHabitModal;
