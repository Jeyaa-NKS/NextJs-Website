import { Fragment } from "react";
import Main from "../components/UI/Main";
import Services from "../components/UI/Services";
import About from "../components/UI/About";
import Contact from "../components/UI/Contact";
export default function Home() {
  return (
    <Fragment>
      <Main />
      <Services />
      <About />
      <Contact />
    </Fragment>
  );
}
