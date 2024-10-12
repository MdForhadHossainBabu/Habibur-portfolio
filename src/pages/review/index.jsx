/* eslint-disable no-constant-binary-expression */
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Rating } from '@mui/material';
import { useEffect, useState } from 'react';
import Marquee from 'react-fast-marquee';

export const Review = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch('/review.json')
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  console.log(reviews);

  return (
    <div className="mb-5 mt-14">
      <h1 className="my-10 text-3xl font-bold text-center">Client Reviews</h1>
      <Marquee>
        {reviews.map((item) => (
          <Card key={item.id} className="flex-1 mr-6 h-[30rem] w-96 overflow-auto glass my-8">
            {' '}
            {/* Adjust `mr-6` as needed */}
            <CardHeader className="relative ">
              <img
                className="z-10 w-24 h-24 mx-auto mb-6 rounded-full"
                src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzoSmJrueVy0ethOD2Iu4uGgjfAjJwsH7MFg&s" ||item.photo  }
                alt="clientImage"
              />
              <div className="flex items-center justify-center gap-2 mx-auto">
                <Rating name="read-only" readOnly value={item.rating} />
                <span className="font-bold">{item.rating}</span>
              </div>
              <h1 className="text-2xl font-bold text-center uppercase font-inter">
                {item.name}
              </h1>
              <p className="flex items-center justify-center gap-4 text-sm">
                <img
                  className="w-8 h-5"
                  src={item.countryFlag}
                  alt="Country Flag"
                />
                <p>{item.countryName}</p>
              </p>
            </CardHeader>
            <CardContent>
              <p className="mx-auto text-balance">{item.description}</p>
            </CardContent>
          </Card>
        ))}
      </Marquee>
    </div>
  );
};
