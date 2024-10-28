import Dog1 from '@/assets/images/dogs/dog1.png';
import Dog2 from '@/assets/images/dogs/dog2.png';
import Dog3 from '@/assets/images/dogs/dog3.png';
import Dog4 from '@/assets/images/dogs/dog4.png';
export const products = [
      {
            id: 1,
            image: Dog1,
            title: 'Special Winter Bulldog Jacket',
            rating: 5,
            reviews: 88,
            price: '$80.00',
      },
      {
            id: 2,
            image: Dog2,
            title: 'Stylish Hoodie for Bull Terrier',
            rating: 3,
            reviews: 55,
            price: '$80.00',
      },
      {
            id: 3,
            image: Dog3,
            title: 'Colorful Sweater for French Bulldog',
            rating: 4,
            reviews: 11,
            price: '$80.00',
      },
      {
            id: 4,
            image: Dog4,
            title: 'Premium Jacket for Jack Russell',
            rating: 5,
            reviews: 112,
            price: '$80.00',
      },
      {
            id: 5,
            image: Dog3,
            title: 'Colorful Sweater for French Bulldog',
            rating: 4,
            reviews: 8,
            price: '$80.00',
      },
      {
            id: 6,
            image: Dog4,
            title: 'Premium Jacket for Jack Russell',
            rating: 5,
            reviews: 166,
            price: '$80.00',
      },
];

export const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      // autoplay: false,
      // autoplaySpeed: 3000,
      draggable: true,
      arrows: false,
      responsive: [
            {
                  breakpoint: 1024,
                  settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                  },
            },
            {
                  breakpoint: 768,
                  settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                  },
            },
            {
                  breakpoint: 480,
                  settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                  },
            },
      ],
};
