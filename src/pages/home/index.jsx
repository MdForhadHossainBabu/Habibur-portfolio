import { Helmet } from 'react-helmet-async';
import bg from '../../assets/bg.png';
import CountUp from 'react-countup';
import profile from '../../assets/dmhabiburbd.JPG';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import promotion from '../../assets/p.png';
import create from '../../assets/c.png';
import SEO from '../../assets/s.png';
import img1 from '../../assets/Befor.png';
import img2 from '../../assets/Youtube channel analutic protfoleo.png';

import img4 from '../../assets/8.png';

import img5 from '../../assets/3.JPG';
// import img3 from '../../assets/6.png';
import Contact from '../contact';
import { Review } from '../review';

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Habibur Rahman | Home</title>
      </Helmet>
      <div className="grid items-center grid-cols-1 gap-12 mt-7 md:mt-0 md:grid-cols-2">
        <div className="mx-auto">
          <h1 className="text-4xl font-extrabold uppercase md:text-5xl font-nunito md:tracking-widest">
            Digital Marketing <br /> Service
          </h1>
          <h4 className="text-xl tracking-widest text-slate-950">
            Grow Your Social Media
          </h4>
        </div>
        <div className="mx-auto">
          <img
            className="rounded-lg shadow-2xl drop-shadow-2xl"
            src={bg}
            alt=""
          />
        </div>
      </div>
      <div className="container grid grid-cols-2 gap-6 my-12 md:grid-cols-4">
        <span className="inline-block text-4xl font-bold text-transparent font-fira bg-gradient-to-br from-rose-500 to-cyan-500 bg-clip-text">
          <span className="flex items-center justify-center">
            {' '}
            <CountUp end={1} duration={4} />
            <span>+</span>
          </span>
          <h1 className="flex items-center justify-center text-lg">
            Year Experience
          </h1>
        </span>
        <span className="inline-block text-4xl font-bold text-transparent font-fira bg-gradient-to-br from-rose-500 to-cyan-500 bg-clip-text ">
          <span className="flex items-center justify-center">
            {' '}
            <CountUp end={50} duration={4} />
            <span>+</span>
          </span>
          <h1 className="flex justify-center text-lg"> Client</h1>
        </span>
        <span className="inline-block text-4xl font-bold text-transparent font-fira bg-gradient-to-br from-rose-500 to-cyan-500 bg-clip-text">
          <span className="flex items-center justify-center">
            {' '}
            <CountUp end={250} duration={4} />
            <span>+</span>
          </span>
          <h1 className="flex justify-center text-lg">Video (SEO)</h1>
        </span>
        <span className="inline-block text-4xl font-bold text-transparent font-fira bg-gradient-to-br from-rose-500 to-cyan-500 bg-clip-text">
          <span className="flex items-center justify-center">
            {' '}
            <CountUp end={500} duration={4} />
            <span>+</span>
          </span>
          <h1 className="flex justify-center text-lg">Video Promotion</h1>
        </span>
      </div>
      {/* about page */}
      <div className="container">
        <span className="flex items-center justify-center">
          <h1 className="inline-block mt-12 text-2xl font-medium text-transparent bg-gradient-to-r from-rose-600 to-cyan-600 bg-clip-text">
            About Me
          </h1>
        </span>
        {/* main section */}
        <div className="grid items-center grid-cols-1 gap-12 my-12 md:grid-cols-2">
          <div className="mx-auto">
            <img
              className=" rounded-full shadow-2xl w-[18rem] md:w-[30rem] drop-shadow-2xl"
              src={profile}
              alt=""
            />
          </div>
          <div>
            <h1 className="text-2xl font-bold uppercase">MD Habibur Rahman</h1>
            <p className="mt-4 mb-10 text-lg font-medium tracking-wide text-balance font-nunito">
              I am a professional Freelancer, working on a digital marketing
              platform. My services are Brand YouTube Channel Creation, YouTube
              Channel SEO, YouTube Video SEO, YouTube Promotion, and Google Ads.
              Apart from this I also do graphic design work. Hope my work will
              help you a lot. Feel free to contact me with any questions thanks.{' '}
            </p>
            <Link
              to="/about"
              className="flex items-center pr-32 md:justify-end"
            >
              {' '}
              <Button>Learn More..</Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Service */}
      <div>
        <span className="flex items-center justify-center mt-12">
          <h1 className="inline-block mt-12 text-4xl font-medium text-transparent bg-gradient-to-r from-rose-600 to-cyan-600 bg-clip-text">
            Service
          </h1>
        </span>
        <div className="container grid grid-cols-1 gap-8 my-12 mt-15 md:grid-cols-3">
          <Link to='/service' className="duration-300 border-4 shadow-2xl rounded-2xl drop-shadow-2xl hover:scale-105">
            <img src={create} alt="" />
            <h1 className="p-2 text-xl text-center font-inter">
              Professional YouTube Channel <br />
              Create and Setup
            </h1>
          </Link>
          <Link to='/service' className="duration-300 border-4 shadow-2xl rounded-2xl drop-shadow-2xl hover:scale-105">
            <img src={SEO} alt="" />
            <h1 className="p-2 text-xl text-center font-inter">
              YouTube Video SEO
            </h1>
          </Link>
          <Link to='/service' className="duration-300 border-4 shadow-2xl drop-shadow-2xl hover:scale-105 rounded-2xl">
            <img src={promotion} alt="" />
            <h1 className="p-2 text-xl text-center font-inter">
              YouTube Video Promotion
            </h1>
          </Link>
        </div>
        <div className="flex items-center justify-center">
          <Button className="flex items-center justify-center text-center">
            <Link
              to="/service"
              className="flex items-center justify-center text-center"
            >
              See All Service . . .
            </Link>
          </Button>
        </div>
      </div>

{/* reviews section  */}
<div className='container mx-auto'>
  <Review/>
</div>

      {/* portfolio */}
      <div>
        <span className="flex items-center justify-center">
          <h1 className="inline-block my-4 mt-12 text-4xl font-bold text-transparent bg-gradient-to-r from-rose-600 to-cyan-600 font-nunito bg-clip-text">
            Portfolio Projects
          </h1>
        </span>
        <div className="container">
          <div className="grid grid-cols-1 gap-8 px-5 mt-8 mb-12 md:grid-cols-2 lg:grid-cols-4 md:px-0">
            <div className="duration-500 border border-pink-500 shadow-2xl md:hover:scale-110 drop-shadow-2xl rounded-xl">
              <img
                className="border border-pink-500 rounded-b-none rounded-xl"
                src={img1}
                alt=""
              />
              <h1 className="py-2 text-sm font-medium text-center text-white font-inter rounded-b-xl bg-gradient-to-r from-purple-700 to-violet-600">
                Youtube Video SEO Proof
              </h1>
            </div>
            <div className="duration-500 border border-pink-500 shadow-2xl md:hover:scale-110 drop-shadow-2xl rounded-xl">
              <img
                className="border border-pink-500 rounded-b-none rounded-xl"
                src={img2}
                alt=""
              />
              <h1 className="py-2 text-sm font-medium text-center text-white font-inter rounded-b-xl bg-gradient-to-r from-purple-700 to-violet-600">
                Youtube Analytics Proof
              </h1>
            </div>
            <div className="duration-500 border border-pink-500 shadow-2xl md:hover:scale-110 drop-shadow-2xl rounded-xl">
              <img
                className="border border-pink-500 rounded-b-none rounded-xl"
                src={img5}
                alt=""
              />
              <h1 className="py-2 text-sm font-medium text-center text-white font-inter rounded-b-xl bg-gradient-to-r from-purple-700 to-violet-600">
                Google Ads Proof
              </h1>
            </div>
            <div className="duration-500 border border-pink-500 shadow-2xl md:hover:scale-110 drop-shadow-2xl rounded-xl">
              <img
                className="border border-pink-500 rounded-b-none rounded-xl"
                src={img4}
                alt=""
              />
              <h1 className="py-2 text-sm font-medium text-center text-white font-inter rounded-b-xl bg-gradient-to-r from-purple-700 to-violet-600">
                Payment Proof
              </h1>
            </div>
          </div>
          <div className="flex items-center justify-center mb-6">
            <Button className="flex items-center justify-center text-center">
              <Link
                to="/portfolio"
                className="flex items-center justify-center text-center"
              >
                See more Portfolio . . .
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* contact from */}
      <section className="container my-8">
        <div className="text-center">
          <h1 className="inline-block text-2xl font-medium text-center text-transparent font-nunito bg-gradient-to-r from-purple-700 to-yellow-600 bg-clip-text">
            Contact Me
          </h1>
        </div>

        <div>
          <Contact/>
        </div>
      </section>
    </div>
  );
};

export default Home;
