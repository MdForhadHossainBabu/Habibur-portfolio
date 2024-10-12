/* eslint-disable react/no-unescaped-entities */
import { Helmet } from 'react-helmet-async';
import { Typewriter } from 'react-simple-typewriter';
import profile from '../../assets/profiles.JPG';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import { TbBrandFiverr } from 'react-icons/tb';

const About = () => {
  return (
    <div>
      <Helmet>
        <title>Habibur Rahman | About</title>
      </Helmet>
      <div className="container grid grid-cols-1 mx-auto mt-8 md:grid-cols-2">
        <div className="mx-auto">
          <h1 className="text-2xl tracking-wider pl-[2px] font-nunito">
            Hi, I'm
          </h1>
          <h1
            className="inline-block py-2 text-2xl font-bold text-transparent uppercase md:text-4xl font-nunito bg-gradient-to-r from-rose-500 to-cyan-500 bg-clip-text "
          >
            md habibur rahman
          </h1>
          <br />

          <h1 className="inline-block text-xl font-medium text-transparent md:text-2xl bg-gradient-to-r from-cyan-500 to-rose-600 bg-clip-text font-inter">
            <Typewriter
              words={[
                'Professional Digital Marketer',
                'SEO Expert',
                'Google Ads Expert',
                'Facebook Ads Expert',
              ]}
              cursor
              cursorStyle="_"
              typeSpeed={20}
              deleteSpeed={10}
              delaySpeed={1000}
              loop={true}
            />
          </h1>
          <p className="pt-5 font-medium font-nunito text-balance">
            Welcome to my digital world! I am Habibur Rahman, a professional
            digital marketer with over a year of hands-on experience in
            transforming businesses through effective online strategies. As a
            YouTube SEO expert, Facebook ad specialist, and Google ad guru, I
            offer a comprehensive range of digital marketing services designed
            to elevate your brand’s presence and drive exceptional results.
          </p>

          <p className="pt-5 font-medium font-nunito text-balance">
            Over the past year, I have had the privilege of working with more
            than 50 clients, creating and optimizing over 250 videos, and
            successfully promoting over 500 videos. My journey in digital
            marketing has been marked by a relentless pursuit of excellence,
            where every project I undertake is driven by a passion for
            delivering tangible results that exceed client expectations.
          </p>

          <p className="pt-5 font-medium font-nunito">
            My expertise lies not only in crafting high-performing campaigns but
            also in understanding the unique needs of each client. I take pride
            in providing tailored solutions that align with your business goals,
            ensuring that every dollar spent on marketing delivers a return on
            investment that makes a difference.
          </p>
          <p className="pt-5 font-medium font-nunito text-balance">
            Whether you’re looking to boost your online visibility, drive
            targeted traffic, or achieve significant growth in your business,
            I’m here to help you every step of the way. Let's work together to
            create a digital strategy that not only meets your needs but also
            sets you apart in a competitive market.
          </p>
        </div>

        <div className="mx-auto">
          <img
            className="mx-auto mt-12 mb-12 rounded-full md:w-8/12 md:mb-0"
            src={profile}
            alt=""
          />
          <h1 className="mt-4 text-xl text-center font-nunito">Connect me!</h1>
          <div className="flex items-center justify-center gap-4 mx-auto mt-2">
            <a
              target="_blank"
              className="p-1 duration-300 border-2 rounded-full hover:bg-white"
              href="https://www.facebook.com/freelancerhabibur1"
            >
              <FaFacebook className="text-2xl transition-all duration-100 hover:text-blue-700" />
            </a>
            <a
              href="https://www.instagram.com/dmhabiburbd1"
              target="_blank"
              className="p-1 duration-300 border-2 rounded-full hover:bg-white"
            >
              <FaInstagram className="text-2xl transition-all duration-100 hover:text-rose-700" />
            </a>
            <a
              href="https://x.com/dmhabiburbd"
              target="_blank"
              className="p-1 duration-300 border-2 rounded-full hover:bg-white"
            >
              <FaTwitter className="text-2xl transition-all duration-100 hover:text-rose-700" />
            </a>

            <a
              href="https://www.fiverr.com/mostofahb?source=gig_page"
              target="_blank"
              className="p-1 duration-300 border-2 rounded-full hover:bg-white"
            >
              <TbBrandFiverr className="text-2xl transition-all duration-100 hover:text-green-700" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
