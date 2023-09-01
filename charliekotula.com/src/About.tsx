import { NavBar } from './stories/Navigation/NavBar';

/*
 * YPGG page for website
 */
function About() {
  return (
    <div className="About">
      <title>About</title>
      <NavBar 
        pages={["Home", "A Young Person's Guide to the Galaxy", "About"]}
        pagePaths={["../", "../ypgg", "."]}
        currentPage={2}
      />
    </div>
  );
}

export default About;