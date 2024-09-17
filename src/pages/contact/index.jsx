/* eslint-disable react/no-unescaped-entities */
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { useRef, useState } from 'react'; // import useState
import Swal from 'sweetalert2';
import emailjs from "@emailjs/browser"


const Contact = () => {
  const form = useRef();
  const [selectedService, setSelectedService] = useState(''); // state to manage selected service

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        'service_hngbwn2',
        'template_rm8k0af',
        form.current,
        'GA09GX75XGTDKu-x6'
      )
      .then(
        () => {
          console.log('SUCCESS!', form);
          Swal.fire({
            title: 'Thank You!',
            text: 'Will contact you soon',
            icon: 'success',
          });
          form.current.reset(); // move this after the success alert
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
  };

  return (
    <>
      <div className="max-w-screen-md mx-auto my-12">
        <h1 className="text-4xl font-bold font-nunito">
          Stay Connect With Me!
        </h1>
      </div>
      <form
        className="max-w-screen-md mx-auto space-y-3 mb-12"
        ref={form}
        onSubmit={sendEmail}
      >
        <label htmlFor="Name">Name</label>
        <Input placeholder="Type Your Name*" type="name" name="name" required />

        <div className="grid grid-cols-1 md:grid-cols-2 mx-auto gap-5">
          <div className="flex-1">
            <label htmlFor="Email">Email</label>
            <Input name="email" type="email" placeholder="Type Your Email*" />
          </div>

          <div className="flex-1">
            <label htmlFor="Email">What's App Number</label>
            <Input
              name="phone"
              type="number"
              placeholder="Type Your what's app Number"
            />
          </div>
        </div>
        <div className="flex flex-col space-y-1">
          <label htmlFor="">Choose your Services</label>

          <Select
            onValueChange={(value) => setSelectedService(value)} // update state on change
            name='selectItem'
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select a Service" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="Youtube Video SEO">
                  Youtube Video SEO
                </SelectItem>
                <SelectItem value="Facebook Ads">Facebook Ads</SelectItem>
                <SelectItem value="Google Ads">Google Ads</SelectItem>
                <SelectItem value="Youtube Video Promotion with Ads">
                  Youtube Video Promotion with Ads
                </SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          {/* Hidden input to pass the selected service value */}
          <input type="hidden" name="service" value={selectedService} />
        </div>

        <Textarea name="message" placeholder="Type your message here." />

        <Button className="w-full" value="submit" type="submit">
          Send Message
        </Button>
      </form>
    </>
  );
};

export default Contact;
