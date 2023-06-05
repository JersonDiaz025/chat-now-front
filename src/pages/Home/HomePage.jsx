import useUser from "../../hooks/useUser";


const HomePage = () => {
  const user = useUser();
  console.table(user);

  return (
    <div>
      <p>Render home page</p>
    </div>
  );
}

export default HomePage;
