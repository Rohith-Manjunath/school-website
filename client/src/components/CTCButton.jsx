const CTCButton = (props) => {
  const { title } = props;
  return (
    <div className="border border-white w-[20%] rounded-sm">
      <button className="-translate-x-1 bg-white -translate-y-1 text-[#8a2d87] font-bold p-2 rounded-sm w-full tracking-widest transition-all duration-300 active:translate-x-0 active:translate-y-0">
        {title}
      </button>
    </div>
  );
};

export default CTCButton;
