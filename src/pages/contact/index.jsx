/* eslint-disable react/no-unescaped-entities */
import { FaLocationArrow, FaPaperPlane, FaWhatsapp } from 'react-icons/fa';
import { FaMessage } from 'react-icons/fa6';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_ls7f7ew', 'template_rm8k0af', form.current, {
        publicKey: 'fH0K8STDCj74dUg49',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
  };
  return (
    <>
      <div className="text-white grid grid-cols-1 md:grid-cols-3 gap-12 py-12 rounded">
        <form
          className="bg-slate-700 md:col-span-2 text-black"
          ref={form}
          onSubmit={sendEmail}
        >
          <div className="px-2 my-3">
            <h1 className="md:text-5xl text-4xl font-bold font-geo text-white py-2">
              Get In Touch
            </h1>
            <p className="text-white text-balance">
              It's all about the humans behind a brand and those experiencing
              it, br we're right there. In the middle performance quick.
            </p>
          </div>
          <div className="flex flex-col gap-2 py-2 space-y-2">
            <label className="font-geo px-1 text-white">Your Name*</label>
            <input
              className="py-2 px-4  mx-2 rounded font-geo bg-slate-900 text-white outline-none"
              placeholder="Type Your Full Name"
              type="text"
              name="name"
              required
              id=""
            />
          </div>
          <div className="flex flex-col gap-2 py-2 space-y-2">
            <label className="font-geo px-1 text-white">Your Email*</label>
            <input
              className="py-2 px-4  mx-2 rounded font-geo bg-slate-900 text-white outline-none"
              placeholder="Type Your Email"
              type="text"
              name="email"
              required
              id=""
            />
          </div>
          <div className="flex flex-col gap-2 py-2 space-y-2">
            <label className="font-geo px-1 text-white">
              Your Phone Number*
            </label>
            <input
              className="py-2 px-4  mx-2 rounded font-geo bg-slate-900 text-white outline-none"
              placeholder="Type Your Number"
              type="number"
              name="phone"
              id=""
            />
          </div>
          <div className="flex flex-col gap-2 py-2 space-y-2">
            <label className="font-geo px-1 text-white">
              About Your Opinion*
            </label>

            <textarea
              className="py-2 px-4  h-32 mx-2 rounded font-geo bg-slate-900 text-white outline-none"
              placeholder="Message me!"
              name="message"
              id=""
            />
          </div>
          <div className="mx-auto flex justify-center">
            <button className="accent font-medium text-lg md:px-24 px-16 bg-slate-900 text-white flex items-center gap-2 py-2 rounded my-2">
              Send Message <FaPaperPlane />
            </button>
          </div>
        </form>

        {/* div details */}
        <div>
          <div className="flex flex-col gap-4 md:my-[50%] md:px-12">
            <div className="flex items-center gap-2">
              <span className="rounded-md text-3xl p-3 bg-[#00C0FF] ">
                <FaMessage />
              </span>
              <span className="flex flex-col">
                <h5 className="text-slate-200 uppercase">My Email</h5>
                <h2 className="md:text-lg text-sm font-bold  font-fira">
                  developerforhad2@gmail.com
                </h2>
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="rounded-md text-3xl p-3 bg-[#FF014F]">
                <FaLocationArrow />
              </span>
              <span className="flex flex-col">
                <h5 className="text-slate-200 uppercase">Address</h5>
                <h2 className="text-lg font-bold font-geo">
                  Kurigram, Bangladesh
                </h2>
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="rounded-md text-3xl p-3 bg-[#FEC447] ">
                <FaWhatsapp />
              </span>
              <span className="flex flex-col">
                <h5 className="text-slate-200 uppercase">Whatsapp</h5>
                <h2 className="text-lg">
                  <a
                    href="http://Wa.me/01302161178"
                    className="hover:text-[#00e187] duration-300"
                  >
                    (+880) 1302-161178
                  </a>
                </h2>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
