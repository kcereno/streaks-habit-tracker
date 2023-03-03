/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { validateHabitInput } from '../../utils/functions';
import { HabitInputI } from '../../models/models';

interface Props {
  label: string;

  type: string;
  habitData: HabitInputI;
  updateHabitData: React.Dispatch<React.SetStateAction<HabitInputI>>;
  characterLength: {
    min: number;
    max: number;
  };
}

function ModalInput({
  label,
  type,
  habitData,
  updateHabitData,
  characterLength: { min, max },
}: Props) {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const updatedInput = type === 'number' ? +e.target.value : e.target.value;

    const inputisValid = validateHabitInput(updatedInput);

    const updatedHabitData = {
      ...habitData,
      value: updatedInput as string,
      valid: inputisValid,
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
        maxLength={max}
        value={habitData.value}
        onFocus={() => {
          updateHabitData({ ...habitData, touched: true });
        }}
      />
    </div>
  );
}

export default ModalInput;
