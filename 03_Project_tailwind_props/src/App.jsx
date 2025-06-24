import "./App.css";
import Card from "./component/card";

function App() {
  return (
    <>
      <Card
        name={"anya"}
        btn={"Read more"}
        url={
          "https://cdn.pixabay.com/photo/2025/04/24/05/23/woman-9554464_1280.jpg"
        }
      ></Card>
      <Card
        name={"chai"}
        btn={"Download"}
        url={
          "https://media.istockphoto.com/id/1491143385/photo/closeup-image-of-a-couple-people-clinking-white-coffee-mugs-in-cafe.jpg?s=612x612&w=0&k=20&c=qaX0R8NyFz5zkt2cHOIFQGqs413oECEtaJhxMwBbZTk="
        }
      ></Card>
    </>
  );
}

export default App;
