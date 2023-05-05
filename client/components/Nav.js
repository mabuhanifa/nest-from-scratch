import { RiSearchLine } from "react-icons/ri";
import { TiTick } from "react-icons/ti";

export default function Nav() {
  return (
    <nav className="shad rounded-lg py-3 px-5 flex justify-between items-center">
      <div className="flex items-center justify-between">
        <span className="font-bold">
          <TiTick className="text-blue-500 inline text-2xl mb-1" />
          Todos
        </span>
      </div>
      <div>
        <div className="relative">
            <input type="text" className="bg-gray-200 rounded-sm py-1 w-96 px-10"/>
            <RiSearchLine className="text-gray-400 text-2xl absolute left-2 top-1"/>
        </div>
      </div>
      <div></div>
    </nav>
  );
}
