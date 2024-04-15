/* eslint-disable react/prop-types */
export default function Button({
  onClick,
  content,
  disabled,
  className,
  type,
}) {
  return (
    <button
      className={`  ${
        disabled
          ? "bg-pink-300 cursor-not-allowed"
          : "bg-pink-500 hover:bg-pink-600"
      } text-white text-md font-bold py-2 px-4 md:px-6 rounded-lg ${className}`}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {content}
    </button>
  );
}
