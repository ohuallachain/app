import { useState } from "react";
import "./style.css";

export default function App() {
  return (
    <div className="main">
      <Menu />
      <StoryPanel />
    </div>
  );
}

function Menu() {
  return (
    <div className="menu">
      <Icon>
        <img src="./logo/logo.svg" alt="logo" width="30px" />
      </Icon>

      <Icon>
        <img src="./icons/note.png" alt="icon" />
      </Icon>
      <Icon>
        <img src="./icons/connections.png" alt="icon" />
      </Icon>
      <Icon>
        <img src="./icons/text.png" alt="icon" />
      </Icon>
    </div>
  );
}

function Icon({ children }) {
  return (
    <div className="centre">
      <button className="menu_button" draggable>
        {children}
      </button>
    </div>
  );
}

function StoryPanel() {
  const [burgerOpen, setBurgerOpen] = useState(true);

  return (
    <div className={burgerOpen ? "panel" : "panelClosed"}>
      <BurgerMenu burgerOpen={burgerOpen} setBurgerOpen={setBurgerOpen} />
      {burgerOpen ? (
        <>
          <StoryText />
          <StoryInput />
        </>
      ) : (
        <></>
      )}
    </div>
  );
}

function BurgerMenu({ setBurgerOpen, burgerOpen }) {
  return (
    <button className="burgerMenu" onClick={(e) => setBurgerOpen(!burgerOpen)}>
      <img src="./icons/burgerMenu.png" alt="burger" />
    </button>
  );
}

function StoryText() {
  return (
    <div className="storyText">
      <p>
        Imagine yourself in your modest yet bustling laboratory in London circa
        the 1830s. The gaslights flicker, casting dancing shadows over your
        collection of intricate instruments and coils. Outside, the distant
        rumble of a summer storm echoes—a reminder that nature herself is
        charged with energy.
        <br />
        <br />
        Today, you have set up an experiment that promises to unveil more
        secrets of the natural world. Before you lies a finely wound circular
        coil of copper, composed of 50 turns. You have measured its radius to be
        precisely 0.2 meters. This coil is suspended within a uniform magnetic
        field of 0.1 tesla, carefully generated by your own contraption.
        <br />
        <br />
        To probe the nature of electromagnetic induction, you mount the coil on
        a revolving apparatus that rotates it at a steady pace of 60 revolutions
        per minute. As the coil spins, the angle between the magnetic field and
        the plane of the coil varies, altering the magnetic flux through it...
      </p>
    </div>
  );
}

function StoryInput() {
  return (
    <div className="storyInput">
      <input className="storyInputBox" type="text" placeholder="type here..." />
    </div>
  );
}
