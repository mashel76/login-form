import Form from "./components/Form";
import avatar from "./img/avatar.png"

function App() {
  return (
    <div className="bg-logo flex w-full h-screen">
      <div className="bg-white rounded-lg flex bg-opacity-55 pt-12 m-28 w-full">
        <div className="flex ps-36 items-center justify-center">
          <Form />
          <img src={avatar} alt="avatar" className="hidden lg:flex pl-32 w-2/3" />
        </div>
      </div>
    </div>
  );
}

export default App;
