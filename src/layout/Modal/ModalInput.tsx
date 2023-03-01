/* eslint-disable jsx-a11y/label-has-associated-control */
import { validateInput } from '../../utils/functions';
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
  const handleInputChange = (e: any): void => {
    const updatedInput = e.target.value;

    const inputisValid = validateInput(updatedInput, min, max);

    const updatedHabitData = {
      ...habitData,
      value: updatedInput,
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
