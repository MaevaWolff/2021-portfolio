// import components
import Intro from "../components/Home/Intro";
import AboutMe from "../components/Home/AboutMe";
import SelectedWorks from "../components/Home/SelectedWorks";
import Layout from "../components/Layout";

export default function HomePage() {
  return (
    <Layout>
      <Intro />

      <AboutMe />

      <SelectedWorks />

      <>
        <p>say maeva.wolffpro@gmail.com</p>
      </>
    </Layout>
  );
}
