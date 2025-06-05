import { Button } from "./Button";
// import { useNavigate } from "react-router-dom";

function NavBar() {
  // const navigate = useNavigate();
  return (
    <nav className="flex items-center justify-between w-full px-20 py-4 ">
      <div className="text-xl font-bold text-gray-800">Zen</div>

      <Button> Get your Card</Button>
    </nav>
  );
}
export default NavBar;
