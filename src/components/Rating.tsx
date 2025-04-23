import Rating_com from "./Rating_com";

const data = [
  {
    score: 1,
    name: "CompanyA",
    description: "late deadline",
  },
  {
    score: 2,
    name: "CompanyB",
    description: "late reply but good quality work",
  },
  {
    score: 3,
    name: "CompanyC",
    description: "Good quality work and on time work",
  },
  {
    score: 4,
    name: "CompanyD",
    description: "Perfect work and good communication",
  },
];

function Rating() {
  const rating_com = data.map((data, index) => {
    return <Rating_com data={data} key={index} />;
  });

  return (
    <div className="w-[100%] bg-custom_white p-10 pt-[100px]">
      <span className="text-3xl font-bold text-custom_green text-wrap">
        Rating from our Customer
      </span>

      <div className="flex flex-row justify-center gap-5 m-8 flex-wrap">
        {rating_com}
      </div>
    </div>
  );
}

export default Rating;
