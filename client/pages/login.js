import Layout from "@/components/Layout";

export default function () {
  return (
    <Layout>
      <div className="px-10 py-3 shad rounded">
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

        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-10 w-full rounded my-5">
          Login
        </button>
        <button className="text-sm bg-green-500 hover:bg-green-700 text-white py-.5 px-1 rounded">
          Do not have an account ? Register
        </button>
      </div>
    </Layout>
  );
}
