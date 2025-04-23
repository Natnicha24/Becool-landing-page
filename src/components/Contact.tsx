function Contact() {
  return (
    <div className="pt-[100px] px-20 flex flex-row justify-center items-center">
      <img
        src="https://static.vecteezy.com/system/resources/previews/024/785/816/non_2x/3d-male-character-happy-working-on-a-laptop-free-png.png"
        alt="logo"
        className="w-[25%] hidden
        sm:hidden
        lg:block
        xl:block"
      />
      <div className="w-[50%]">
        <span className="text-custom_green font-bold text-3xl">
          Register for Information
        </span>
        <form
          action=""
          className="pt-[32px] flex flex-col justify-center items-center gap-5"
        >
          <input
            type="text"
            className="bg-custom_pink px-5 py-3 w-[100%] rounded-xl border-none focus:outline-none
            sm:w-[100%]
            md:w-[90%]
            lg:w-[50%]
            xl:w-[50%]"
            placeholder="Your Email"
          />
          <input
            type="text"
            className="bg-custom_pink px-5 py-3 w-[100%] rounded-xl border-none focus:outline-none
            sm:w-[100%]
            md:w-[90%]
            lg:w-[50%]
            xl:w-[50%]"
            placeholder="Your Phone Number"
          />
          <button className="bg-custom_green text-white px-5 py-2 rounded-3xl hover:bg-[#37737f] text-center">
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
