const Marquee = () => {
  return (
    <div className="marquee-container py-10 bg-[#d3d3d3]">
      <marquee className="marquee-content" behavior="scroll" direction="left">
        <div className="marquee-card bg-[#580b57] p-4 rounded-md text-center w-1/4 font-bold tracking-widest text-white">
          Admissions Open from Pre-KG
        </div>
      </marquee>
    </div>
  );
};

export default Marquee;
