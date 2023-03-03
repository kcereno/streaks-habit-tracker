/* eslint-disable object-curly-newline */
/* eslint-disable react/require-default-props */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { validateHabitInput, isEmoji } from '../../../utils/functions';
import { HabitInputI } from '../../../models/models';

interface Props {
  label: string;

  type: string;
  habitData: HabitInputI;
  updateHabitData: React.Dispatch<React.SetStateAction<HabitInputI>>;
  maxLength?: number;
  emoji?: boolean;
}

function HabitFormModalInput({ label, type, habitData, updateHabitData, maxLength, emoji }: Props) {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const newInput = type === 'number' ? +e.target.value : e.target.value;
    const isValid = emoji ? isEmoji(newInput as string) : validateHabitInput(newInput);

    const updatedHabitData = {
      ...habitData,
      value: newInput as string,
      valid: isValid,
    };

    updateHabitData(updatedHabitData);
  };

  return (
    <div className="form-control my-2">
      <label className="label">
        <span className="label-text">{label}</span>
      </label>
      <input
        type={type}
        className={`input input-bordered w-full ${
          habitData.touched && !habitData.valid && 'input-error'
        } ${habitData.touched && habitData.valid && 'input-success'}`}
        onChange={handleInputChange}
        maxLength={maxLength}
        value={habitData.value}
        onFocus={() => {
          updateHabitData({ ...habitData, touched: true });
        }}
      />
    </div>
  );
}

export default HabitFormModalInput;
