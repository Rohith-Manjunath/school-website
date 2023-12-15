const CTCButton = (props) => {
  const { title } = props;

  return (
    <a
      href="https://www.google.com/maps/@12.2291753,76.5867069,3a,90y,9.72h,90.02t/data=!3m7!1e1!3m5!1sAF1QipMc3j45DwgTUz5qLOpMenxniJsUA6-V2ipfptzO!2e10!3e12!7i6720!8i3360?entry=ttu"
      target="_blank"
      rel="noopener noreferrer"
      className=" text-white bg-[#580b57] p-2 rounded-sm w-1/3 text-center font-bold hover:text-[#8a2d87] hover:bg-white hover:scale-95 transition-all duration-300 hover:border hover:border-[#580b57] tracking-widest"
    >
      Know More
    </a>
  );
};

export default CTCButton;
