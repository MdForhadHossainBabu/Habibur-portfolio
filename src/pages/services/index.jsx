/* eslint-disable no-irregular-whitespace */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import { Helmet } from 'react-helmet-async';
import img1 from '../../assets/s1.PNG';
import img2 from '../../assets/s2.JPG';
import img3 from '../../assets/s3.JPG';
import { useState } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const Services = () => {
  const [open, setOpen] = useState(false);
 const [isOpen, setIsOpen] = useState(false);
 const [opens, setOpens] = useState(false);

  return (
    <div>
      <Helmet>
        <title>Habibur Rahman | Service</title>
      </Helmet>
      <div className="container grid grid-cols-1 gap-6 my-6 md:grid-cols-2 lg:grid-cols-3">
        <div className="cursor-pointer" onClick={() => setOpen(!open)}>
          <img src={img1} alt="" />
          <h1 className="py-3 text-2xl font-medium font-nunito">
            I will create and setup YouTube channel ...
          </h1>

          {open && (
            <div className="order-2 px-4 bg-white dark:bg-slate-900 rounded-2xl">
              <p className="pt-4">
                Are you in need of a professional expert to create, set up,
                design, and optimize your YouTube channel with a custom logo,
                banner, intro, and outro? Look no further—you’ve come to the
                right place!
              </p>
              <p className="pt-2">
                I specialize in creating and optimizing YouTube channels
                tailored to your preferences. With extensive experience in this
                field, I’m here to ensure your channel is set up for success.
              </p>

              <h1 className="pt-4 pb-3 font-medium">
                My Professional Services Include:
              </h1>
              <div className="pl-4 text-[14px]">
                <li>High-Quality YouTube Channel Creation & Setup</li>
                <li>Marketing and Monetization Strategies</li>
                <li>Standard Logo Design</li>
                <li>Attractive Banner/Art Design</li>
                <li>Keyword Integration</li>
                <li>Custom Intro and Outro Videos</li>
                <li>Social Media Promotion for Your Channel/Video</li>
                <li>SEO to Drive Significant Traffic</li>
                <li>High-Quality Channel and Video Descriptions</li>
                <li>Playlist Management</li>
                <li>Custom Thumbnail Creation</li>
                <li>End Screen, Card, and iButton Setup</li>
                <li>Video Watermark and Channel Trailer Setup</li>
                <li>Custom URL Setup</li>
                <li>Subscriber Reminders</li>
              </div>
              <h1 className="pt-5 pb-3 font-medium">
                Why Choose My High-Quality Service?
              </h1>
              <div className="pl-2">
                <li>Help Your Channel Grow</li>
                <li>Tailored to Your Preferences</li>
                <li>100% Quality Work</li>
                <li>On-Time Delivery</li>
                <li>Lifetime Support & Services</li>
                <li>100% Satisfaction Guaranteed</li>
              </div>
              <h1 className="pt-3 font-bold">
                Order Now and Let’s Elevate Your YouTube Channel!
              </h1>

              <h1 className="py-4 text-xl font-bold text-rose-500">
                Freequently Asked Question (FAQ){' '}
              </h1>

              <h1 className="py-3 text-xl font-bold text-rose-800 ">
                Why Choose Me for YouTube Channel Creation, Design, and Setup?
              </h1>

              <p className="pl-2">
                I am a seasoned professional with over 2 years of experience in
                creating, designing, and setting up YouTube channels. I have
                successfully completed 150+ projects, all with 100% buyer
                satisfaction. My expertise ensures that your channel will be
                optimized for success from the start.
              </p>

              {/* 2 */}
              <h1 className="py-4 text-xl font-bold text-rose-800">
                What Are the Benefits of This Service?
              </h1>

              <p className="pl-2">
                I prioritize your preferences, offering multiple design options
                for attractive logos and effective banners. My goal is to
                provide a service that aligns perfectly with your vision,
                ensuring your channel stands out.
              </p>
              <h1 className="py-4 text-xl font-bold text-rose-800">
                What Are Your Skills and Experience?
              </h1>

              <p className="pl-2">
                With 2 years of professional experience in YouTube channel
                creation, design, and setup, I bring a wealth of knowledge to
                each project. I have also completed a diploma course in Digital
                Marketing and Graphic Design from FN's IT Institute, further
                enhancing my expertise in this field.
              </p>

              <h1 className="py-4 font-bold text-rose-800">
                What Do You Need from Me?
              </h1>
              <span>To get started, I will need:</span>
              <div className="pb-6 pl-3">
                <li>Your preferred channel name</li>
                <li>Any specific design preferences or color schemes</li>
                <li>Details about your content or niche</li>
                <li>
                  Any existing logos, banners, or other assets you’d include
                </li>
                <li>Access to your YouTube account (if applicable)</li>
              </div>
            </div>
          )}
        </div>

        <div
          className="transition-all duration-700 cursor-pointer "
          onClick={() => setIsOpen(!isOpen)}
        >
          <img src={img2} alt="" />
          <h1 className="py-3 text-2xl font-medium font-nunito">
            I will do YouTube video and channel SEO to improve for top ranking
            ...
          </h1>
          {isOpen && (
            <div className="px-4 bg-white border-2 rounded-2xl dark:bg-slate-900">
              <p>
                Are you struggling to get your videos noticed? No matter how
                amazing your content is, without the right SEO strategy—titles,
                descriptions, and tags—your videos won’t reach the top page of
                YouTube search results.
              </p>
              <p className="py-3">
                I specialize in optimizing your videos for better visibility and
                ranking on YouTube. With my expert SEO services, your videos
                will be easily found by your target audience, helping you build
                a steady and engaged viewer base.
              </p>
              <h1 className="font-bold">What I Will Provide:</h1>
              <div className="py-3 text-sm">
                <li>
                  SEO-Friendly Title: Crafted to capture attention and improve
                  ranking.
                </li>
                <li>
                  Attractive Description: Engaging and optimized for search
                  engines.
                </li>
                <li>
                  Hashtag Research: Relevant hashtags to increase
                  discoverability.
                </li>
                <li>
                  Targeted & Low-Competition Keywords: Keywords that boost your
                  video’s chances of ranking higher.
                </li>
                <li>
                  Add Subscribe URL: Encourage viewers to subscribe with a
                  simple click.
                </li>
                <li>
                  Add Cards & End Screen: Enhance viewer engagement with
                  interactive elements.
                </li>
              </div>
              <h1 className="text-xl font-bold">Why Hire Me?</h1>
              <div className="py-3 pl-2 text-sm">
                <li>
                  100% Real Organic Work: No shortcuts, just proven strategies.
                </li>
                <li>
                  Fast Delivery: Quick turnaround without compromising quality.
                </li>
                <li>24/7 Support: I’m here to assist you at any time.</li>
              </div>
              <p>
                <span className="font-bold">Note:</span> Please feel free to ask
                any questions before placing an order. I’m here to help!
              </p>

              <h3 className="py-3 font-bold tracking-wider">Thank You!</h3>

              <h1 className="py-4 text-xl font-bold text-rose-500">
                Freequently Asked Question (FAQ){' '}
              </h1>

              <h1 className="font-bold text-rose-800">
                Do You Need Access to My YouTube Channel?
              </h1>
              <p className="py-2 pl-2">
                Yes, I will need access to your channel as an editor or manager
                to effectively implement the SEO strategies and optimizations.
              </p>

              <h1 className="font-bold text-rose-800">What is YouTube SEO? </h1>
              <p className="py-2 pl-2">
                YouTube SEO (Search Engine Optimization) is the process of
                optimizing your videos with specific keywords, descriptions, and
                tags to improve their ranking on YouTube’s search engine. This
                increases the visibility of your videos to a broader, more
                targeted audience.
              </p>
              <h1 className="font-bold text-rose-800">
                What Are the Benefits of This Service?{' '}
              </h1>
              <p className="py-2 pl-2">
                By utilizing effective SEO, your videos will be ranked higher on
                YouTube, reaching niche-related audiences organically. This
                leads to increased visibility, more views, and a growing
                subscriber base.
              </p>
              <h1 className="font-bold text-rose-800">Do You Offer YouTube Channel SEO? </h1>
              <p
                className="py-3 pb-6 pl-2 "
              >
                Yes, I specialize in YouTube channel SEO, ensuring that your
                entire channel—along with individual videos—is optimized to
                attract organic traffic and improve your overall ranking on the
                platform.
              </p>
            </div>
          )}
        </div>
        <div className="cursor-pointer" onClick={() => setOpens(!opens)}>
          <img src={img3} alt="" />
          <h1 className="py-3 text-2xl font-medium font-nunito">
            I will create and setup YouTube channel ...
          </h1>
          {opens && (
            <div className="px-4 pb-12 bg-white border-2 rounded-2xl dark:bg-slate-900">
              <p>
                Are you looking for high-quality promotion services for your
                YouTube videos? My Google Ads service is perfect for promoting
                your videos. I will help promote your video on targeted
                platforms, which will help your video get more views and
                engagement.
              </p>

              <h1 className="py-3 font-bold">What we offer:</h1>
              <p className="pl-2 text-sm">
                <li>Creation of professional quality advertising campaigns</li>
                <li>Promote your video through Google Ads</li>
                <li>Full transparency and reporting on campaign progress</li>
              </p>
              <h1 className="py-3 font-bold">Why choose my service?</h1>
              <p>
                I am skilled in Google Ads with extensive experience, dedicated
                to reaching the right audience for your videos Every campaign I
                create is transparent and results-driven, so you get the best
                return on your investment.
              </p>
              <p className="py-2">
                Take your video to the next level and contact me today!
              </p>
              <h1 className="py-3 font-bold">
                Types of videos we don't promote:
              </h1>
              <p className="pl-2 text-sm">
                <li>Obscene suggestive material</li>
                <li>Hateful or discriminatory content</li>
                <li>Content that promotes or incites violence</li>
              </p>
              <h1 className="py-2 font-bold">Requirements:</h1>
              <li className="pl-2 text-sm">
                Link to specific YouTube video to promote
              </li>
              <h5 className="py-3">
                <span className="font-bold">Note :</span>
                We do not provide any specific or guaranteed views or
                subscribers. Our services fully comply with the policies and
                regulations set by YouTube and Fiverr.
              </h5>

              <div className="w-full pt-2 border-b border-b-black"></div>
              <h1 className="py-4 text-2xl font-bold text-rose-500">
                Freequently Asked Question (FAQ){' '}
              </h1>

              <h1 className="text-xl font-medium text-rose-500">
                How Google Ads Promote YouTube Videos?
              </h1>
              <p className="py-2">
                We promote your videos to a worldwide audience through Google
                Ads, so that your videos get more views.
              </p>

              <h1 className="text-xl font-medium text-rose-500">
                What information do you need to start a campaign?{' '}
              </h1>
              <p className="py-2">Your 1 specific YouTube video link</p>

              <h1 className="text-xl font-medium text-rose-500">
                What types of videos do you not promote?
              </h1>
              <p className="py-2">
                <p className="py-2 pl-2 text-sm">
                  <li>Indecent or sexually suggestive material</li>
                  <li>Hateful or discriminatory content</li>
                  <li>Content that promotes violence or incites violence</li>
                  <li>Metalia related to weapons or drugs</li>
                  <li>Fraudulent content</li>
                </p>
                <p>
                  Such promotion violates Google's content representation. Our
                  Google guide will guide you, ensuring your guide is ethically
                  and legally correct.
                </p>
              </p>

              <h1 className="text-xl font-medium text-rose-500">
                Do we guarantee Likes, Comments, and Subscribes?
              </h1>
              <p className="py-2">
                No, we do not guarantee video likes, comments, or subscribes.
                Our goal is to increase the visibility of the video.
              </p>

              <h1 className="text-xl font-medium text-rose-500">
                How long does it take to see campaign results?
              </h1>
              <p className="py-2">You will see results within 24 hours</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Services;
