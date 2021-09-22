function SideMenu() {
  return (
    <div className=" space-y-5 ubuntu-font text-xl flex flex-col items-start ">
      <button className="focus:bg-gray-300 focus:text-gray-900 cursor-pointer">
        Bütün Gönderiler
      </button>
      <button className="focus:bg-gray-300 focus:text-gray-900 cursor-pointer">
        NextJs
      </button>
      <button className="focus:bg-gray-300 focus:text-gray-900 cursor-pointer">
        CSS
      </button>
      <button className="focus:bg-gray-300 focus:text-gray-900 cursor-pointer">
        ReactJs
      </button>
      <button className="focus:bg-gray-300 focus:text-gray-900 cursor-pointer">
        How-to
      </button>
    </div>
  );
}

export default SideMenu;
