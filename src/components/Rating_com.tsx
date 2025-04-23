interface dataType {
  score: number;
  name: string;
  description: string;
}

function Rating_com({ data }: { data: dataType }) {
  const circles = Array.from({ length: 4 }, (_, index) => {
    if (index < data.score) {
      return (
        <div key={index} className="w-8 h-8 bg-custom_green rounded-full"></div>
      );
    } else {
      return (
        <div
          key={index}
          className="w-8 h-8 bg-custom_white rounded-full border border-custom_green"
        ></div>
      );
    }
  });

  return (
    <div className="min-w-[230px] w-[300px] bg-custom_pink flex flex-col items-center gap-6 rounded-3xl p-10 box-border">
      <div className="flex flex-row gap-3">{circles}</div>
      <div className="flex flex-col items-center">
        <div className="text-md w-fit font-bold bg-custom_yellow p-2 rounded-2xl">
          {data.name}
        </div>
        <div className="text-custom_green text-sm pt-5">{data.description}</div>
      </div>
    </div>
  );
}

export default Rating_com;
