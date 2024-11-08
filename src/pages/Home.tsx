import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { ArrowRight } from 'lucide-react';

export const popularDestinations = [
  {
    id: 'goa',
    name: 'Goa',
    image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&q=80&w=1000',
    description: 'Beach paradise with vibrant nightlife'
  },
  {
    id: 'ladakh',
    name: 'Ladakh',
    image: 'https://images.unsplash.com/photo-1589793907316-f94025b46850?auto=format&fit=crop&q=80&w=1000',
    description: 'Himalayan beauty and Buddhist culture'
  },
  {
    id: 'udaipur',
    name: 'Udaipur',
    image: 'https://images.unsplash.com/photo-1598890777032-bde835ba27c2?auto=format&fit=crop&q=80&w=1000',
    description: 'City of Lakes and Palaces'
  },
  {
    id: 'manali',
    name: 'Manali',
    image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&q=80&w=1000',
    description: 'Adventure sports and scenic beauty'
  }
];

const carouselImages = [
  'https://images.unsplash.com/photo-1506461883276-594a12b11cf3?auto=format&fit=crop&q=80&w=2000',
  'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&q=80&w=2000',
  'https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?auto=format&fit=crop&q=80&w=2000',
  'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&q=80&w=2000'
];

const Home = () => {
  return (
    <div className="min-h-screen">
      <div className="relative h-screen">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          loop={true}
          className="h-full"
        >
          {carouselImages.map((image, index) => (
            <SwiperSlide key={index}>
              <div
                className="h-full w-full bg-cover bg-center"
                style={{ backgroundImage: `url(${image})` }}
              >
                <div className="h-full w-full bg-black bg-opacity-40 flex items-center justify-center">
                  <div className="text-center text-white">
                    <h1 className="text-5xl font-bold mb-4">Discover Your Next Adventure</h1>
                    <p className="text-xl mb-8">Explore the most beautiful destinations in India</p>
                    <Link
                      to="/destinations"
                      className="bg-white text-gray-900 px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-colors"
                    >
                      Start Planning
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Popular Destinations</h2>
          <Link
            to="/destinations"
            className="flex items-center text-blue-600 hover:text-blue-700"
          >
            See All
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {popularDestinations.map((destination) => (
            <Link
              key={destination.id}
              to={`/destination/${destination.id}`}
              className="group rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="relative h-64">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 p-4 text-white">
                  <h3 className="text-xl font-bold mb-1">{destination.name}</h3>
                  <p className="text-sm opacity-90">{destination.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;