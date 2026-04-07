
import Home from '../pages/home'
import Projects from '../pages/projects'
import AboutMe from '../pages/about-me'
import Experience from '../pages/experience'

function Navbar() {
    return (
        <div className="min-h-screen">
        <nav className="sticky top-0 z-50 bg-transparent">
          <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
            <a href="#home" className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-md border border-white/20" aria-hidden="true" />
              <span className="text-base font-semibold tracking-wide text-white">
                Raymond Palomares
              </span>
            </a>
  
            <div className="flex items-center gap-6 text-sm font-medium text-white/80">
              <a href="#home" className="hover:text-white">
                Home
              </a>
              <a href="#projects" className="hover:text-white">
                Projects
              </a>
              <a href="#about" className="hover:text-white">
                About
              </a>
              <a href="#experience" className="hover:text-white">
                Experience
              </a>
            </div>
          </div>
        </nav>
  
        <main className=" w-full max-w-6xl">
          <section id="home" className="">
            <Home />
          </section>
          <section id="projects" className=""> 
          <Projects />
        </section>
          <section id="about" className="">
          <AboutMe />
        </section>
          <section id="experience" className="">
          <Experience />
        </section>
        </main>
      </div>
     )

}
export default Navbar