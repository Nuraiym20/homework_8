import React from 'react';
import { useForm } from 'react-hook-form';

function RegistrationForm() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="full-name">Full Name</label>
      <input
        id="full-name"
        type="text"
        {...register("fullName", { required: true })}
      />

      <label htmlFor="first-name">First Name</label>
      <input
        id="first-name"
        type="text"
        {...register("firstName", { required: true })}
      />

      <label htmlFor="birth-year">Year of Birth</label>
      <select id="birth-year" {...register("birthYear", { required: true })}>
        {Array.from({ length: 100 }, (_, i) => 2023 - i).map((year) => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </select>

      <label>Gender</label>
      <div>
        <label htmlFor="male">
          <input
            id="male"
            type="radio"
            value="male"
            {...register("gender", { required: true })}
          />
          Male
        </label>
      </div>
      <div>
        <label htmlFor="female">
          <input
            id="female"
            type="radio"
            value="female"
            {...register("gender", { required: true })}
          />
          Female
        </label>
      </div>
      <div>
        <label htmlFor="other">
          <input
            id="other"
            type="radio"
            value="other"
            {...register("gender", { required: true })}
          />
          Other
        </label>
      </div>

      <button type="submit">Submit</button>
    </form>
  );
}

export default RegistrationForm;

