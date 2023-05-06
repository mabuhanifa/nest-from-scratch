import Layout from "@/components/Layout";

export default function () {
  return (
    <Layout>
      <div className="px-5 py-3 shad rounded">
        <label htmlFor="email">
          Email :{" "}
        </label>
        <br />
        <input
          type="text"
          id="email"
          required
          className="py-2 bg-gray-200 rounded max-w-xl w-80 my-3"
        />
        <br />
        <label htmlFor="password" >
          Password :{" "}
        </label>
        <br />
        <input
          type="text"
          id="password"
          required
          className="py-2 bg-gray-200 rounded max-w-xl w-80 my-3"
        />
        <br />
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-10 w-full rounded mt-5">
          Login
        </button>
      </div>
    </Layout>
  );
}
