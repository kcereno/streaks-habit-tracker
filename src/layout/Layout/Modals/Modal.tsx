/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { HabitI } from '../../../models/models';
import AppContext from '../../../store/AppContext/app-context';

type Inputs = {
  habitName: string;
  goal: number;
  icon: string;
};

function Modal() {
  const { addHabit } = useContext(AppContext);

  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();
  const onSubmit = (data: any) => {
    const randomNum = Math.floor(Math.random() * 1000) + 1;

    const newHabit: HabitI = {
      id: randomNum + data.habitName,
      name: data.habitName,
      goal: data.goal,
      progress: 0,
      icon: data.icon,
      logs: [],
    };

    addHabit(newHabit);
  };
  return (
    <div>
      <input type="checkbox" id="modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control ">
              <label className="label">
                <span className="label-text">What do you want to do?</span>
              </label>
              <input
                type="text"
                className="input input-bordered w-full "
                {...register('habitName', { required: true })}
              />
            </div>
            <div className="form-control w-full mt-2">
              <label className="label">
                <span className="label-text">How many time a day?</span>
              </label>
              <input
                type="number"
                className="input input-bordered w-full"
                {...register('goal', { required: true })}
              />
            </div>
            <div className="form-control w-full mt-2">
              <label className="label">
                <span className="label-text">
                  Enter an emoji or letter to use as an icon
                </span>
              </label>
              <input
                type="string"
                className="input input-bordered w-full"
                {...register('icon', { required: true })}
              />
            </div>
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
                Add Habit
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
