function Header() {
  return (
    <div className="w-screen bg-custom_pink pt-10 flex flex-row flex-wrap justify-center gap-5 px-[10%] py-[5%] rounded-b-[50px]">
      <div
        className="text-left text-3xl text-custom_green flex flex-col gap-3 w-[100%] sm:w-[40%]
     justify-center"
      >
        <div className="font-bold">
          <span>Hello,</span>
          <br />
          <div className="flex flex-row flex-wrap gap-3">
            <span>We are </span>
            <div>
              <span className="bg-custom_yellow px-3 rounded-xl">BE COOL</span>
            </div>
          </div>
        </div>
        <div className="text-sm">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque
          quibusdam, maxime illo porro dolor veniam beatae molestiae cumque qui
          rerum alias. Delectus officia sit beatae voluptates enim ut pariatur
          culpa.
        </div>
        <button className="bg-custom_green text-white text-sm w-[40%] py-3 rounded-xl mt-2 hidden md:block">
          Contact Us
        </button>
      </div>

      <div>
        <img
          className="w-[300px]"
          src="https://static.vecteezy.com/system/resources/previews/024/785/816/non_2x/3d-male-character-happy-working-on-a-laptop-free-png.png"
        />
      </div>

     <div className="w-[100%] md:hidden">
     <button className="bg-custom_green text-white text-sm w-[80%] py-3 rounded-xl mt-2">
          Contact Us
        </button>
     </div>
    </div>
  );
}

export default Header;
