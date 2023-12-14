const Button = (props) => {
  const { title, width, bg, w } = props;
  return (
    <div
      className={`${
        w && `max-md:w-${w}`
      } w-${width} border border-white rounded-sm `}
    >
      <button
        className={`p-2 ${
          bg ? `${bg}` : "bg-primary"
        } text-white font-semibold w-full rounded -translate-x-1 -translate-y-1 active:translate-x-0 active:translate-y-0 transition-all duration-200 tracking-widest`}
      >
        {title}
      </button>
    </div>
  );
};

export default Button;
