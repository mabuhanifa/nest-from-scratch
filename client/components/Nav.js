import { AiOutlinePlus } from "react-icons/ai";
import { CiUser } from "react-icons/ci";
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
      <div className="flex items-center">
        <div className="relative">
          <input
            type="text"
            className="bg-gray-200 rounded-sm py-1.5 w-96 px-10"
            placeholder="Search"
          />
          <RiSearchLine className="text-gray-400 text-2xl absolute left-2 top-1.5" />
        </div>
        <div>
          <button className="px-5 mt-1">
            <AiOutlinePlus className="text-2xl text-gray-600" />
          </button>
        </div>
      </div>
      <div >
        <CiUser className="text-2xl text-gray-600"/>
      </div>
    </nav>
  );
}
