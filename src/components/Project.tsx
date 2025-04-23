const data = [
  {
    name: "Professional Employees",
    count: 800,
  },
  {
    name: "Projects",
    count: 18,
  },
  {
    name: "Professional Partners",
    count: 6,
  },
];

function Project() {
  const project = Array.from({ length: 3 }, (_, index) => {
    return (
      <div key={index}
        className="w-[140px] h-[130px] flex flex-col
     bg-custom_pink rounded-3xl text-center p-5 items-center  gap-2
     "
      >
        <span className="text-2xl font-bold bg-custom_yellow px-3 py-1 rounded-full">
          {data[index].count}
        </span>
        <span className="text-sm">{data[index].name}</span>
      </div>
    );
  });

  return (
    <div className="w-[100vw] flex flex-row justify-center px-[10%] gap-5 flex-wrap pt-[100px]">
      <div className="w-[50%]  text-left">
        <span className="text-3xl font-bold text-custom_green">
          BE COOL - WORK:
        </span>
        <br />
        <span className="text-custom_green">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat,
          aut, ratione laborum ipsa, sunt itaque velit tempora atque odio
          necessitatibus praesentium illum accusantium totam recusandae ea
          provident perferendis error exercitationem.
        </span>
        <br />
        <br />
        <span>work with us!!</span>
        <br />
        <div className="flex gap-5 mt-7 font-semibold flex-wrap">{project}</div>
      </div>
      <div className="flex items-center justify-center p-10 box-border min-w-[100px]">
        <img src="https://www.pngall.com/wp-content/uploads/8/Job-Work-PNG-File.png" alt="work image"
      className="w-[100%] max-w-[418px]" />
      </div>
    </div>
  );
}

export default Project;
