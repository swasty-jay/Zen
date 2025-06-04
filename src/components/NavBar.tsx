function NavBar() {
  return (
    <nav className="flex items-center justify-between w-full px-20 py-4 ">
      <div className="text-xl font-bold text-gray-800">Zen</div>
      <button className="px-4 py-1 text-white transition rounded-[20px] bg-primary-50 ">
        <span>
          Get your Card <span className="text-lg text-blue-700">&rarr;</span>
        </span>
      </button>
    </nav>
  );
}
export default NavBar;
