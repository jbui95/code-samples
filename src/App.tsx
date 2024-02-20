import "./App.css";
import { TabsComponent } from "./components";

const tabs = [
  {
    label: "Tab 1",
    body: <div>Tab 1 Content</div>,
  },
];

function App() {
  return (
    <div className="App">
      <h1>Hey there, code enthusiasts! 🚀 </h1>
      <p>
        Ready to dip your toes into the exciting world of React, TypeScript, and
        MUI (Material-UI)? 🚀 We've got just the ticket for you! Welcome to our
        beginner-friendly React code samples extravaganza! 🎉 These bite-sized
        snippets are your passport to mastering the basics of building awesome
        user interfaces with React's superpowers, sprinkled with a dash of
        TypeScript magic and a pinch of MUI charm. Whether you're just starting
        out on your coding journey or looking to level up your skills, our fun
        and informal code samples are here to guide you every step of the way.
        So grab your favorite coding beverage ☕️, roll up your sleeves, and
        let's dive headfirst into the wonderful world of React, TypeScript, and
        MUI goodness! 🌈✨
      </p>
      <TabsComponent tabs={tabs} />
    </div>
  );
}

export default App;
