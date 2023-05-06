import Layout from "@/components/Layout";

export default function () {
  return (
    <Layout>
      <div className="px-10 py-3 shad rounded">
        <label htmlFor="email">First Name :</label>
        <br />
        <input
          type="text"
          id="fname"
          required
          className="py-2 bg-gray-200 rounded max-w-xl w-80 my-3 px-2"
        />
        <br />
        <label htmlFor="password">Last Name :</label>
        <br />
        <input
          type="text"
          id="lname"
          required
          className="py-2 bg-gray-200 rounded max-w-xl w-80 my-3 px-2"
        />
        <br />
        <label htmlFor="email">Email :</label>
        <br />
        <input
          type="text"
          id="email"
          required
          className="py-2 bg-gray-200 rounded max-w-xl w-80 my-3 px-2"
        />
        <br />
        <label htmlFor="password">Password :</label>
        <br />
        <input
          type="text"
          id="password"
          required
          className="py-2 bg-gray-200 rounded max-w-xl w-80 my-3 px-2"
        />
        <br />
        <button className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-10 w-full rounded mt-5">
          Sign Up
        </button>
      </div>
    </Layout>
  );
}
