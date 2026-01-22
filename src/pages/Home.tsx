import Hero from '../components/Sections/Hero';
import Services from '../components/Sections/Services';
import Advantages from '../components/Sections/Advantages';
import AIRevolution from '../components/Sections/AIRevolution';
import Reviews from '../components/Sections/Reviews';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <Hero />
      <Services limit={3} />
      <Advantages />
      <AIRevolution />
      <Reviews />
    </div>
  );
};

export default Home;
