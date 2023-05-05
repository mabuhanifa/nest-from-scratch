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
        <div>
            <input type="text" className="bg-gray-200 rounded-sm py-1 "/>
        </div>
      </div>
      <div></div>
    </nav>
  );
}
