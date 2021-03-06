import React from "react";
import { Route } from "react-router-dom";
import DogsListContainer from "./components/DogsListContainer";
import DogBreedImagesContainer from "./components/DogBreedImagesContainer";

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={DogsListContainer} />
      <Route path="/dog-breeds/:breed" component={DogBreedImagesContainer} />
    </div>
  );
}

export default App;
