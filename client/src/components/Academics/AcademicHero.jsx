const AcademicHero = () => {
  return (
    <div
      className="w-full h-[30rem] flex items-start gap-2 justify-center bg-center bg-cover flex-col p-10"
      style={{
        backgroundImage:
          "url('https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630')",
      }}
    >
      <div className="text-white text-left flex flex-col gap-4 w-full md:w-[60%] h-auto ml-0 md:ml-[2rem] bg-[rgba(211,210,210,0.1)] p-6 md:p-10 rounded-lg">
        <h2 className="text-2xl md:text-4xl font-bold text-primary">
          About Us
        </h2>
        <p className="font-bold tracking-[1px] text-sm md:text-base text-primary">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Reprehenderit deserunt modi aperiam labore recusandae nemo at tempore
          ipsum! Nam, ex aliquid amet fuga dolores quia totam aut quibusdam
          inventore incidunt.
        </p>
        <button className="btn p-2 rounded-md font-semibold w-[30%] md:w-[20%] bg-[#01416f] text-sm md:text-base hover:scale-105  hover:borde transition-all duration-300 text-white">
          Get In Touch
        </button>
      </div>
    </div>
  );
};

export default AcademicHero;
