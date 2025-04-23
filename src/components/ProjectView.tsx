const data = [
  {
    name: "Company Website1",
    description:
      "lorem is the basic text to use when you coding and test how ui came out when text add in",
  },
  {
    name: "Company Website2",
    description:
      "lorem is the basic text to use when you coding and test how ui came out when text add in",
  },
  {
    name: "Company Website3",
    description:
      "lorem is the basic text to use when you coding and test how ui came out when text add in",
  },
];

function ProjectView() {
  const project = Array.from({ length: 3 }, (_, index) => {
    return (
      <div
        key={index}
        className="bg-custom_pink rounded-lg p-10 flex flex-col justify-center items-center max-w-[300px] gap-5"
      >
        <span className="bg-custom_yellow px-4 py-3 rounded-xl font-bold">
          {data[index].name}
        </span>
        <div className="text-left">{data[index].description}</div>
        <button className="w-[90%] py-2 rounded-3xl bg-custom_green text-white hover:bg-[#37737f] ">
          View
        </button>
      </div>
    );
  });

  return (
    <div className="w-[100vw] px-20 pt-[100px]">
      <span className="text-3xl font-bold text-custom_green text-wrap">
        Visit Our Project!!
      </span>
      <div
        className="flex flex-col justify-center items-center mt-[32px] gap-5
        sm:flex-col 
        md:flex-row md:flex-wrap
        lg:flex-row lg:flex-wrap lg:justify-around
        xl:flex-row xl:flex-wrap xl:justify-around"
      >
        {project}
      </div>
    </div>
  );
}

export default ProjectView;
