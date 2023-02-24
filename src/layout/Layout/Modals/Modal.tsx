/* eslint-disable react/no-unknown-property */
/* eslint-disable @typescript-eslint/indent */
/* eslint-disable @typescript-eslint/quotes */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { useContext, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { HabitI } from '../../../models/models';
import AppContext from '../../../store/AppContext/app-context';

type Inputs = {
  habitName: string;
  goal: number;
  icon: string;
};

// TODO: Work on validation

interface AddModalInputProps {
  inputProps: any;
  inputConfig: {
    labelText: string;
    inputType: string;
  };
}

function AddModalInput({
  inputProps,
  inputConfig: { labelText, inputType },
}: AddModalInputProps) {
  const [touched, setTouched] = useState<boolean>(false);
  const [valid, setValid] = useState<boolean>(false);

  const handleInputChange = (e: any) => {
    const validateInput = (
      input: string,
      minLength: number,
      maxLengthNumber: number,
    ) => input.length >= minLength && input.length <= maxLengthNumber;

    setTouched(true);
    const inputIsValid = validateInput(e.target.value, 1, 10);

    if (inputIsValid) setValid(true);
    else setValid(false);
  };

  return (
    <div className="form-control ">
      <label className="label">
        <span className="label-text">{labelText}</span>
      </label>
      <input
        type={inputType}
        className={`input input-bordered w-full ${
          touched && !valid && 'input-error'
        } ${touched && valid && 'input-success'}`}
        {...inputProps}
        onChange={handleInputChange}
      />
    </div>
  );
}

function Modal() {
  const { addHabit } = useContext(AppContext);
  const [habitnameInputTouched, sethabitnameInputTouched] = useState<
    boolean | null
  >(false);
  const [habitNameValid, setHabitNameValid] = useState<boolean>(false);
  const [goalTouched, setGoalTouched] = useState<boolean>(false);
  const [iconTouched, setIconTouched] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const validateInput = (
    input: string,
    minLength: number,
    maxLengthNumber: number,
  ) => input.length >= minLength && input.length <= maxLengthNumber;

  const handleHabitNameChange = (e: any) => {
    sethabitnameInputTouched(true);
    const inputIsValid = validateInput(e.target.value, 1, 10);

    if (inputIsValid) setHabitNameValid(true);
    else setHabitNameValid(false);
  };
  console.log('Modal ~ errors:', errors);
  const onSubmit: SubmitHandler<Inputs> = (data: any) => console.log(data);

  return (
    <div>
      <input type="checkbox" id="modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* <div className="form-control ">
              <label className="label">
                <span className="label-text">What do you want to do?</span>
              </label>
              <input
                type="text"
                className={`input input-bordered w-full ${
                  habitnameInputTouched && !habitNameValid && 'input-error'
                } ${
                  habitnameInputTouched && habitNameValid && 'input-success'
                }`}
                {...register('habitName', { required: true })}
                onChange={handleHabitNameChange}
              />
            </div> */}

            <AddModalInput
              inputProps={{ ...register('habitName', { required: true }) }}
              inputConfig={{
                labelText: 'What do you want to do?',
                inputType: 'text',
              }}
            />

            <AddModalInput
              inputProps={register('goal', { required: true })}
              inputConfig={{
                labelText: 'How many time a day?',
                inputType: 'number',
              }}
            />

            <AddModalInput
              inputProps={{ ...register('icon', { required: true }) }}
              inputConfig={{
                labelText: 'Enter an emoji or letter to use as an icon',
                inputType: 'text',
              }}
            />

            <span className="label-text-alt">
              To acces the emoji keyboard, cick on the input field and press:
              <br />
              On PCs: Press Windows key + ; (semicolon) or Windows key +.
              (period)
              <br />
              On Macs: Press Command + Control + Space
            </span>
            <div className="modal-action">
              <button type="submit" className="btn btn-success">
                {/* <label htmlFor="modal">Submit</label> */}
                Submit
              </button>
              <button type="button" className="btn btn-outline btn-error">
                <label htmlFor="modal">Cancel</label>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Modal;
