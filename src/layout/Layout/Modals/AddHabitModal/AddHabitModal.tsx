/* eslint-disable operator-linebreak */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { useContext, useState, useEffect } from 'react';
import AppContext from '../../../../store/AppContext/app-context';
import AddModalInput from './AddHabitModalInput';
import { generateId } from '../../../../utils/functions';
import { HabitI, HabitInputI } from '../../../../models/models';
import { DEFAULT_HABIT_INPUT } from '../../../../data/default';

function AddHabitModal() {
  const [habitName, setHabitName] = useState<HabitInputI>(DEFAULT_HABIT_INPUT);
  const [habitGoal, setHabitGoal] = useState<HabitInputI>(DEFAULT_HABIT_INPUT);
  const [habitIcon, setHabitIcon] = useState<HabitInputI>(DEFAULT_HABIT_INPUT);

  // eslint-disable-next-line object-curly-newline
  const { addHabit, editMode, selectedHabit, updateSelectedHabit, updateHabit } =
    useContext(AppContext);

  useEffect(() => {
    if (editMode && selectedHabit) {
      setHabitName({ value: selectedHabit.name, touched: true, valid: true });
      setHabitGoal({
        value: selectedHabit.goal.toString(),
        touched: true,
        valid: true,
      });
      setHabitIcon({ value: selectedHabit.icon, touched: true, valid: true });
    }
  }, [selectedHabit, editMode]);

  // Helpers

  const formIsValid = (): boolean => habitName.valid && habitGoal.valid && habitIcon.valid;

  const resetForm = () => {
    updateSelectedHabit(null);
    setHabitName(DEFAULT_HABIT_INPUT);
    setHabitGoal(DEFAULT_HABIT_INPUT);
    setHabitIcon(DEFAULT_HABIT_INPUT);
  };

  // Event Handlers

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const habit: HabitI = {
      id: generateId(habitName.value),
      name: habitName.value,
      goal: +habitGoal.value,
      icon: habitIcon.value,
      progress: 0,
      logs: [],
    };

    if (editMode && selectedHabit) {
      updateHabit({
        ...selectedHabit,
        name: habitName.value,
        goal: +habitGoal.value,
        icon: habitIcon.value,
      });
    } else {
      addHabit(habit);
    }

    resetForm();
  };

  const handleCancel = () => {
    resetForm();
  };

  return (
    <div>
      <input type="checkbox" id="modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h1 className="text-xl font-bold">{!editMode ? 'Add Habit' : 'Edit Habit'}</h1>
          <form onSubmit={handleSubmit}>
            <AddModalInput
              label="What do you want to do?"
              type="text"
              characterLength={{ min: 1, max: 20 }}
              habitData={habitName}
              updateHabitData={setHabitName}
            />

            <AddModalInput
              label="How many times a day?"
              type="number"
              characterLength={{ min: 1, max: 3 }}
              habitData={habitGoal}
              updateHabitData={setHabitGoal}
            />

            <AddModalInput
              label="Select ONE letter or emoji to be the habit icon?"
              type="text"
              characterLength={{ min: 1, max: 2 }}
              habitData={habitIcon}
              updateHabitData={setHabitIcon}
            />

            <span className="label-text-alt">
              To acces the emoji keyboard, cick on the input field and press:
              <br />
              On PCs: Press Windows key + ; (semicolon) or Windows key +. (period)
              <br />
              On Macs: Press Command + Control + Space
            </span>

            <div className="modal-action">
              <button type="submit" className="btn btn-success" disabled={!formIsValid()}>
                <label htmlFor="modal">Submit</label>
              </button>

              <button type="button" className="btn btn-outline btn-error" onClick={handleCancel}>
                <label htmlFor="modal">Cancel</label>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddHabitModal;
