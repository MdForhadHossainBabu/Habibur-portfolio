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
// import img3 from '../../assets/6.png';

import img4 from '../../assets/8.png';

import img5 from '../../assets/3.JPG';

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Habibur Rahman | Home</title>
      </Helmet>
      <div className=" mt-7 md:mt-0 grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        <div className="mx-auto">
          <h1 className="md:text-5xl text-4xl font-extrabold font-nunito md:tracking-widest uppercase">
            Digital Marketing <br /> Service
          </h1>
          <h4 className="text-xl tracking-widest text-slate-950">
            Grow Your Social Media
          </h4>
        </div>
        <div className="mx-auto">
          <img
            className="shadow-2xl drop-shadow-2xl rounded-lg"
            src={bg}
            alt=""
          />
        </div>
      </div>
      <div className="my-12 container grid grid-cols-2 md:grid-cols-4 gap-6">
        <span className="text-4xl font-bold font-fira bg-gradient-to-br from-rose-500 to-cyan-500 inline-block text-transparent bg-clip-text">
          <span className="flex items-center justify-center">
            {' '}
            <CountUp end={1} duration={4} />
            <span>+</span>
          </span>
          <h1 className="text-lg justify-center flex items-center">
            Year Experience
          </h1>
        </span>
        <span className="text-4xl font-bold font-fira bg-gradient-to-br from-rose-500 to-cyan-500 inline-block text-transparent bg-clip-text ">
          <span className="flex items-center justify-center">
            {' '}
            <CountUp end={50} duration={4} />
            <span>+</span>
          </span>
          <h1 className="text-lg flex justify-center"> Client</h1>
        </span>
        <span className="text-4xl font-bold font-fira bg-gradient-to-br from-rose-500 to-cyan-500 inline-block text-transparent bg-clip-text">
          <span className="flex items-center justify-center">
            {' '}
            <CountUp end={250} duration={4} />
            <span>+</span>
          </span>
          <h1 className="text-lg flex justify-center">Video (SEO)</h1>
        </span>
        <span className="text-4xl font-bold font-fira bg-gradient-to-br from-rose-500 to-cyan-500 inline-block text-transparent bg-clip-text">
          <span className="flex items-center justify-center">
            {' '}
            <CountUp end={500} duration={4} />
            <span>+</span>
          </span>
          <h1 className="text-lg flex justify-center">Video Promotion</h1>
        </span>
      </div>
      {/* about page */}
      <div className="container">
        <span className="flex items-center justify-center">
          <h1 className=" mt-12 bg-gradient-to-r from-rose-600 to-cyan-600 inline-block text-transparent bg-clip-text text-2xl font-medium">
            About Me
          </h1>
        </span>
        {/* main section */}
        <div className="my-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="mx-auto">
            <img
              className=" rounded-full shadow-2xl w-[18rem] md:w-[30rem] drop-shadow-2xl"
              src={profile}
              alt=""
            />
          </div>
          <div>
            <h1 className="text-2xl font-bold uppercase">MD Habibur Rahman</h1>
            <p className="text-balance font-nunito text-lg tracking-wide mt-4 font-medium mb-10">
              I am a professional Freelancer, working on a digital marketing
              platform. My services are Brand YouTube Channel Creation, YouTube
              Channel SEO, YouTube Video SEO, YouTube Promotion, and Google Ads.
              Apart from this I also do graphic design work. Hope my work will
              help you a lot. Feel free to contact me with any questions thanks.{' '}
            </p>
            <Link
              to="/about"
              className="flex items-center md:justify-end pr-32"
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
          <h1 className=" mt-12 bg-gradient-to-r from-rose-600 to-cyan-600 inline-block text-transparent bg-clip-text text-4xl font-medium">
            Service
          </h1>
        </span>
        <div className="mt-15 grid grid-cols-1 md:grid-cols-3 gap-8 container my-12">
          <div className="border-4 shadow-2xl rounded-2xl drop-shadow-2xl hover:scale-105 duration-300">
            <img src={create} alt="" />
            <h1 className="text-xl p-2 font-inter text-center">
              Professional YouTube Channel <br />
              Create and Setup
            </h1>
          </div>
          <div className="border-4 rounded-2xl shadow-2xl drop-shadow-2xl hover:scale-105 duration-300">
            <img src={SEO} alt="" />
            <h1 className="text-xl p-2 font-inter text-center">
              YouTube Video SEO
            </h1>
          </div>
          <div className="border-4 shadow-2xl drop-shadow-2xl hover:scale-105 duration-300 rounded-2xl">
            <img src={promotion} alt="" />
            <h1 className="text-xl p-2 font-inter text-center">
              YouTube Video Promotion
            </h1>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <Button className="text-center flex items-center justify-center">
            <Link
              to="/service"
              className="flex items-center justify-center text-center"
            >
              See All Service . . .
            </Link>
          </Button>
        </div>
      </div>

      {/* portfolio */}
      <div>
        <span className="flex items-center justify-center">
          <h1 className=" mt-12 bg-gradient-to-r from-rose-600 to-cyan-600 inline-block font-nunito font-bold text-transparent bg-clip-text text-4xl my-4">
            Portfolio Projects
          </h1>
        </span>
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12 mt-8 px-5 md:px-0">
            <div className="border md:hover:scale-110 duration-500 shadow-2xl drop-shadow-2xl border-pink-500 rounded-xl">
              <img
                className="rounded-xl rounded-b-none border-pink-500 border"
                src={img1}
                alt=""
              />
              <h1 className="text-sm font-medium font-inter text-center py-2 rounded-b-xl bg-gradient-to-r from-purple-700 to-violet-600 text-white">
                Youtube Video SEO Proof
              </h1>
            </div>
            <div className="border md:hover:scale-110 duration-500 shadow-2xl drop-shadow-2xl border-pink-500 rounded-xl">
              <img
                className="rounded-xl rounded-b-none border-pink-500 border"
                src={img2}
                alt=""
              />
              <h1 className="text-sm font-medium font-inter text-center py-2 rounded-b-xl bg-gradient-to-r from-purple-700 to-violet-600 text-white">
                Youtube Analytics Proof
              </h1>
            </div>
            <div className="border md:hover:scale-110 duration-500 shadow-2xl drop-shadow-2xl border-pink-500 rounded-xl">
              <img
                className="rounded-xl rounded-b-none border-pink-500 border"
                src={img5}
                alt=""
              />
              <h1 className="text-sm font-medium font-inter text-center py-2 rounded-b-xl bg-gradient-to-r from-purple-700 to-violet-600 text-white">
                Google Ads Proof
              </h1>
            </div>
            <div className="border md:hover:scale-110 duration-500 shadow-2xl drop-shadow-2xl border-pink-500 rounded-xl">
              <img
                className="rounded-xl rounded-b-none border-pink-500 border"
                src={img4}
                alt=""
              />
              <h1 className="text-sm font-medium font-inter text-center py-2 rounded-b-xl bg-gradient-to-r from-purple-700 to-violet-600 text-white">
                Payment Proof
              </h1>
            </div>
          </div>
          <div className="flex items-center justify-center mb-6">
            <Button className="text-center flex items-center justify-center">
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
          <h1 className="text-center text-2xl  font-nunito font-medium bg-gradient-to-r from-purple-700 to-yellow-600 inline-block bg-clip-text text-transparent">
            Contact Me
          </h1>
        </div>

        <div></div>
      </section>
    </div>
  );
};

export default Home;
