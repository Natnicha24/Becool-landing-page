function Service() {
  return (
    <div className="px-20 w-[90%] m-auto pt-[100px]">
      <span className="text-custom_green font-bold text-3xl">Our Services</span>
      <div
        className="grid gap-3 mt-[32px]
      sm:grid-cols-1 sm:grid-rows-4
      md:grid-cols-3 md:grid-rows-3
      lg:grid-cols-3 lg:grid-rows-3
      xl:grid-cols-3 xl:grid-rows-3 "
      >
        <div
          className=" bg-custom_pink rounded-lg p-10 flex flex-col justify-center items-center gap-5
     sm:col-span-1 sm:row-span-1 sm:row-start-1
     md:col-span-1 md:row-span-3 
     lg:col-span-1 lg:row-span-3 
     xl;col-span-1 xl:row-span-3
     "
        >
          <img
            src="./image/social-media.png"
            alt="social-media"
            className="w-full h-auto"
          />
          <span className="font-bold bg-custom_yellow px-5 py-2 rounded-3xl w-fit">
            Social
          </span>
          <div>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum
            mollitia, modi a officia quidem tempore, voluptatum reiciendis ab
            dolor, minima odio perspiciatis veritatis quae nam officiis expedita
            facilis temporibus inventore.
          </div>
        </div>

        <div
          className=" bg-custom_pink rounded-lg
        p-10 flex flex-col flex-wrap justify-center items-center gap-5
        sm:col-span-1 sm:row-span-1 sm:row-start-2
     md:col-span-1 md:row-span-2 
     lg:col-span-1 lg:row-span-2 
     xl:col-span-1 xl:row-span-2"
        >
          <img
            src="./image/font.png"
            alt="social-media"
            className=" w-[40%] h-auto"
          />
          <span className="font-bold bg-custom_yellow px-5 py-2 rounded-3xl w-fit">
            font
          </span>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias
            repellendus deserunt ut libero sit exercitationem mollitia placeat
            facere itaque, consectetur eum. Consectetur mollitia eius quidem
            unde ad amet aperiam totam?
          </div>
        </div>

        <div
          className=" bg-custom_pink rounded-lg
        flex flex-col flex-wrap justify-center items-center w-full h-full p-10 gap-5
         sm:col-span-1 sm:row-span-1 sm:row-start-3
     md:col-span-1 md:row-span-2 
     lg:col-span-1 lg:row-span-2 
     xl:col-span-1 xl:row-span-2"
        >
          <img
            src="./image/book.png"
            alt="book"
            className="mb-5 w-[35%] h-auto"
          />
          <span className="font-bold bg-custom_yellow px-5 py-2 rounded-3xl w-fit">
            Book
          </span>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur
            ex necessitatibus excepturi ipsa maiores repudiandae nesciunt iusto
            amet eos animi dignissimos deleniti, mollitia cumque illo provident
            veniam ea. Harum, esse.
          </div>
        </div>

        <div
          className="bg-custom_pink rounded-lg
        flex flex-wrap flex-col justify-center items-center p-10 w-full max-h-full gap-5 
         sm:col-span-1 sm:row-span-1 sm:row-start-4 sm:flex-col
     md:col-span-2 md:row-span-1 md:col-start-2 md:flex-row
     lg:col-span-2 lg:row-span-1 lg:col-start-2 lg:flex-row
     xl:col-span-2 xl:row-span-1 xl:col-start-2 xl:flex-row" 
        >
          <img src="./image/sound.png" alt="sound" className="w-[35%] h-auto
          sm:w-[35%] md:w-[20%] lg:w-[20%] xl:w-[20%] " />
          <div className="w-[70%] flex flex-col justify-center items-center gap-5
          sm:justify-center sm:items-center
          md:justify-start md:items-start
          lg:justify-start lg:items-start
          xl:justify-start xl:items-start
          ">
            <div className="font-bold bg-custom_yellow px-5 py-2 rounded-3xl w-fit">
             Sound
            </div>
            <div className=" text-center sm:text-center md:text-left lg:text-left xl:text-left">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium animi magnam facere reiciendis. Perspiciatis
              similique, recusandae necessitatibus iste ea exercitationem iure?
              Non sequi mollitia expedita cumque, eligendi laborum deserunt
              vitae.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service;

// <div
// className="grid grid-cols-1 grid-rows-4 mt-5
// sm:grid-cols-3 sm:grid-rows-2 gap-5 pt-[32px]"
// >
// <div
//   className="col-span-1 row-span-1 row-start-1 bg-custom_pink rounded-xl
// sm:col-span-1 sm:col-start-1 sm:row-span-2 py-10 px-10
// flex flex-col justify-center items-center gap-5
// "
// >
//   <img src="../../image/social-media.png" alt="" className="w-[100%]" />
//   <div className="w-[100%] flex flex-col justify-start">
// <span className="font-bold bg-custom_yellow px-5 py-2 rounded-3xl w-fit">
//   Social
// </span>
//     <span className="text-left">
//       Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
//       aut voluptates ipsum rerum quis! Iusto odit suscipit eveniet
//       dolorum corporis cumque dolores, dolore reiciendis tempore
//       similique sed illo incidunt cum!
//     </span>
//   </div>
// </div>

// <div
//   className="col-start-1 row-start-2 col-span-1 row-span-1 bg-custom_pink rounded-xl
//   sm:col-start-2 sm:col-span-1 sm:row-span-1 p-10

// flex flex-col justify-center items-center gap-5
// "
// >
//   <img src="../../image/font.png" alt="" className="w-[50%]" />
//   <div className="w-[100%] flex flex-col justify-start">
//     <span className="font-bold bg-custom_yellow px-5 py-2 rounded-3xl w-fit">
//       Font
//     </span>
//     <span className="text-left">
//       Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
//       aut voluptates ipsum rerum quis! Iusto odit suscipit eveniet
//       dolorum corporis cumque dolores, dolore reiciendis tempore
//       similique sed illo incidunt cum!
//     </span>
//   </div>
// </div>
// <div
//   className="col-start-1 row-start-3 col-span-1 row-span-1
// bg-custom_pink rounded-xl
//  sm:col-start-3 sm:col-span-1 sm:row-span-1 p-10
// flex flex-col justify-center items-center gap-5
//  "
// >
//   <img src="../../image/book.png" alt="" className="w-[50%]" />
//   <div className="w-[100%] flex flex-col justify-start">
//     <span className="font-bold bg-custom_yellow px-5 py-2 rounded-3xl w-fit">
//       Book
//     </span>
//     <span className="text-left">
//       Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
//       aut voluptates ipsum rerum quis! Iusto odit suscipit eveniet
//       dolorum corporis cumque dolores, dolore reiciendis tempore
//       similique sed illo incidunt cum!
//     </span>
//   </div>
// </div>
// <div
//   className="col-start-1 col-span-1 row-span-1 row-start-4
// bg-custom_pink rounded-xl
//  sm:col-start-2 sm:col-span-2 sm:row-span-1
//  flex flex-col-reverse justify-center items-center gap-5
//        sm:flex-row-reverse
// "
// >
//   <div className="w-[50%] flex flex-col justify-start">
//     <span className="font-bold bg-custom_yellow px-5 py-2 rounded-3xl w-fit">
//       Sound
//     </span>
//     <span className="text-left">
//       Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
//       aut voluptates ipsum rerum quis! Iusto odit suscipit eveniet
//       dolorum corporis cumque dolores, dolore reiciendis tempore
//       similique sed illo incidunt cum!
//     </span>
//   </div>
//   <div className="w-[20%]">
//     <img src="../../image/sound.png" alt="w-[50%]" />
//   </div>
// </div>
// </div>
