function Nav() {
  return (
    <div className="w-screen bg-custom_pink flex flex-col px-3 py-2 items-center justify-center gap-0
    sm:flex-row sm:gap-2 shadow-black shadow-xl
    ">
      <div className="h-[100%] text-4xl font-bold text-custom_green">
        Be Cool
      </div>
      <div className=" flex flex-row text-[10px] text-custom_green text-left sm:flex-col
      ">
        <span>make imposible</span>
        <span className="sm:pl-0 pl-1">to i'm posible</span>
      </div>
    </div>
  );
}

export default Nav;
