import Banner from "./components/layout/Banner";
import AboutMe from "./components/layout/AboutMe";
import Projects from "./components/layout/Projects";
import Card from "./components/ui/Card";

function App() {
  return (
    <>
      <Banner />
      <main>
        <Card
          title="About me"
          content="With coding as my true passion, I enrolled in Le Wagon to pursue a
        career aligned with what truly excites me . This decision marked a
        pivotal moment in my journey, as I sought to immerse myself in a program
        renowned for its quality education and hands-on approach to learning."
        />
        <AboutMe />
        <Projects />
      </main>
    </>
  );
}

export default App;
