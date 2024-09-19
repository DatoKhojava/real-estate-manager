"use client";

export default function TextInput({ ...props }) {
  return (
    <div>
      <label className="font-FiraGO text-black font-bold text-base">
        {props.label}
      </label>
      <input
        type="text"
        onChange={props.onChange}
        onBlur={props.onBlur}
        value={props.value}
        className={`w-full mt-1 p-2 border outline-none active:ring- ${
          props.errors?.message ? "border-red-600" : "border-gray-300"
        } rounded`}
      />
      {props.errors?.message ? (
        <p className="font-FiraGO text-red-600 mt-1">{props.errors?.message}</p>
      ) : (
        <p className="font-FiraGO text-black font-medium mt-1">
          ✓ მინიმუმ ორი სიმბოლო
        </p>
      )}
    </div>
  );
}
