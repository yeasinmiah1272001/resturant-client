const MenuItem = ({ item }) => {
  return (
    <div className="flex items-center gap-5">
      <div className="flex">
        <img
          style={{ borderRadius: "0 200px 200px 200px" }}
          className="w-[100px]"
          src={item?.image}
          alt=""
        />
      </div>
      <div className=" flex gap-2">
        <div>
          <h1 className="text-xl font-bold">{item.name}</h1>
          <p>{item?.recipe}</p>
        </div>
        <h3 className="text-red-500 font-bold">{item?.price}$</h3>
      </div>
    </div>
  );
};

export default MenuItem;
