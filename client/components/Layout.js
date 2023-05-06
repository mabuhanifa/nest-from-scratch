import Nav from "./Nav";
import SideBar from "./SideBar";

export default function Layout({ children }) {
  return (
    <div className="bg-white text-gray-600 my-10 px-5 xl:mx-80">
      <Nav />
      <div className="flex">
        <SideBar />
        <main className="px-5 my-5">{children}</main>
      </div>
    </div>
  );
}
