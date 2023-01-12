import Head from 'next/head';
//= Layout
import MainLayout from '@layouts/Main';
//= Components
import TopNav from '@components/Navbars/DigitalNav/TopNav';
import Navbar from '@components/Navbars/ITCreativeNav/index';
import Header from '@components/Digital/Header';
import About from '@components/Digital/About';
import Services from '@components/Digital/Services';
import ChooseUs from '@components/Digital/ChooseUs';
import Portfolio from '@components/Digital/Portfolio';
import Testimonials from '@components/Digital/Testimonials';
import Projects from '@components/Software/Projects';
import Team from '@components/Digital/Team';
import Blog from '@components/Digital/Blog';
import Contact from '@components/Digital/Contact';
import Footer from '@components/Digital/Footer';
import SideMenu from '@components/ITCreative/SideMenu';

const HomeDigitalAgency = () => {
  return (
    <>
      <Head>
        <title>Iteck - Digital Agency</title>
      </Head>

      <MainLayout scrollTopText>
        <TopNav />
        <SideMenu />
        <Navbar />
        <Header />
        <main>
          <About />
          <Services />
          <ChooseUs />
          <Portfolio />
          <Projects />
          <Testimonials />
          <Team />
          <Blog />
          <Contact />
        </main>
        <Footer />
      </MainLayout>
    </>
  );
};

export default HomeDigitalAgency;
