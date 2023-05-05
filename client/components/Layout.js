import Nav from "./Nav";
import SideBar from "./SideBar";

export default function Layout({ children }) {
  return (
    <div className="bg-white text-gray-600 my-10 px-5 xl:mx-20">
      <Nav />
      <div className="flex ">
        <SideBar />
        <main className="">{children}</main>
      </div>
    </div>
  );
}
