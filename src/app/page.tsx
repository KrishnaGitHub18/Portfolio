import Header from './components/header'
import Main1 from './components/main-screen'
import About from './components/about'
import Projects from './components/projects'
import Connect from './components/connect'
import Footer from './components/footer'

import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css'; 
config.autoAddCss = false;

export default function Home() {
  return (
    <main className='bg-zinc-900'>
      <Header />
      <Main1 />
      <About />
      <Projects />
      <Connect />
      <Footer />
    </main>
  );
}
