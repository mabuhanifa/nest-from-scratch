export default function Home() {
  function fetchData() {
    fetch("http://localhost:3000/user")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }
  fetchData();
  return <div></div>;
}
