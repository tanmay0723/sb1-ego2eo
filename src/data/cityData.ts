export const cityData = {
  goa: {
    id: 'goa',
    name: 'Goa',
    description: 'Beach paradise with vibrant nightlife',
    coverImage: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&q=80&w=1000',
    bestTimeToVisit: 'November to March',
    howToReach: 'Dabolim Airport or Madgaon Railway Station',
    places: [
      {
        id: 'baga-beach',
        name: 'Baga Beach',
        image: 'https://images.unsplash.com/photo-1517438121500-3e2cba0c1f29?auto=format&fit=crop&q=80&w=2000',
        description: 'Famous for water sports and nightlife',
        timings: '24 hours',
        history: 'Baga Beach derives its name from the Baga Creek. It emerged as a popular tourist destination in the 1960s when hippies discovered its pristine shores.',
        howToReach: 'Take a taxi from Dabolim Airport (45 mins) or local bus from Mapusa',
        mapUrl: 'https://goo.gl/maps/QZKHYxhKUE9YN1Uw8'
      },
      {
        id: 'fort-aguada',
        name: 'Fort Aguada',
        image: 'https://images.unsplash.com/photo-1541411064572-26ef61f2c9c0?auto=format&fit=crop&q=80&w=2000',
        description: '17th-century Portuguese fort',
        timings: '8:30 AM to 5:30 PM',
        entryFee: '₹50',
        history: 'Built in 1612, Fort Aguada was a crucial Portuguese stronghold protecting the coastline from Dutch and Maratha invasions.',
        howToReach: 'Take a taxi from Candolim Beach (10 mins) or local bus from Panaji',
        mapUrl: 'https://goo.gl/maps/7X8XQX8Z9Z2X8Z9X8'
      },
      {
        id: 'anjuna-beach',
        name: 'Anjuna Beach',
        image: 'https://images.unsplash.com/photo-1517438121500-3e2cba0c1f29?auto=format&fit=crop&q=80&w=2000',
        description: 'Known for its vibrant nightlife and flea markets',
        timings: '24 hours',
        howToReach: 'Accessible by taxi or local transport.',
        mapUrl: 'https://goo.gl/maps/4X5X6X7X8X9X0X1X2'
      },
      {
        id: 'chapora-fort',
        name: 'Chapora Fort',
        image: 'https://images.unsplash.com/photo-1541411064572-26ef61f2c9c0?auto=format&fit=crop&q=80&w=2000',
        description: 'Famous for its scenic views and historical significance',
        timings: 'Open 24 hours',
        howToReach: 'Accessible by taxi or local transport.',
        mapUrl: 'https://goo.gl/maps/5X6X7X8X9X0X1X2X3'
      },
      {
        id: 'dudhsagar-waterfalls',
        name: 'Dudhsagar Waterfalls',
        image: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d1d1?auto=format&fit=crop&q=80&w=2000',
        description: 'One of the tallest waterfalls in India, located in the Bhagwan Mahavir Wildlife Sanctuary',
        timings: 'Best visited from June to January',
        howToReach: 'Accessible via jeep safari from Mollem National Park.',
        mapUrl: 'https://goo.gl/maps/6X7X8X9X0X1X2X3X4'
      },
      {
        id: 'basilica-of-bom-jesus',
        name: 'Basilica of Bom Jesus',
        image: 'https://images.unsplash.com/photo-1506748686214-e9df 14d4d1d1?auto=format&fit=crop&q=80&w=2000',
        description: 'UNESCO World Heritage Site and one of the oldest churches in India',
        timings: '9:00 AM to 6:30 PM',
        howToReach: 'Located in Old Goa, accessible by taxi or local transport.',
        mapUrl: 'https://goo.gl/maps/7X8X9X0X1X2X3'
      }
    ],
    food: [
      {
        id: 'fish-curry-rice',
        name: 'Fish Curry Rice',
        image: 'https://images.unsplash.com/photo-1598198652224-1f080e63076b?auto=format&fit=crop&q=80&w=2000',
        description: 'Traditional Goan curry with local fish',
        restaurants: [
          { 
            name: 'Ritz Classic',
            rating: 4.5,
            location: 'Panjim',
            mapUrl: 'https://goo.gl/maps/1X2X3X4X5X6X7X8X9',
            priceRange: '₹500-800'
          },
          { 
            name: 'Vinayak Family Restaurant',
            rating: 4.3,
            location: 'Assagao',
            mapUrl: 'https://goo.gl/maps/2X3X4X5X6X7X8X9X0',
            priceRange: '₹400-700'
          },
          {
            name: 'Fish Thali',
            rating: 4.6,
            location: 'Margao',
            mapUrl: 'https://goo.gl/maps/3X4X5X6X7X8X9X0X1',
            priceRange: '₹300-500'
          },
          {
            name: 'Martin’s Corner',
            rating: 4.4,
            location: 'Betalbatim',
            mapUrl: 'https://goo.gl/maps/4X5X6X7X8X9X0X1X2',
            priceRange: '₹600-900'
          },
          {
            name: 'Hotel Anand',
            rating: 4.2,
            location: 'Panjim',
            mapUrl: 'https://goo.gl/maps/5X6X7X8X9X0X1X2X3',
            priceRange: '₹400-600'
          },
          {
            name: 'Gunpowder',
            rating: 4.5,
            location: 'Assagao',
            mapUrl: 'https://goo.gl/maps/6X7X8X9X0X1X2X3X4',
            priceRange: '₹500-800'
          }
        ]
      },
      {
        id: 'xacuti',
        name: 'Chicken Xacuti',
        image: 'https://images.unsplash.com/photo-1589793907316-f94025b46850?auto=format&fit=crop&q=80&w=2000',
        description: 'Complex curry made with roasted spices and coconut',
        restaurants: [
          {
            name: 'Spice Goa',
            rating: 4.6,
            location: 'Candolim',
            mapUrl: 'https://goo.gl/maps/3X4X5X6X7X8X9X0X1',
            priceRange: '₹600-900'
          },
          {
            name: 'Gunpowder',
            rating: 4.5,
            location: 'Assagao',
            mapUrl: 'https://goo.gl/maps/4X5X6X7X8X9X0X1X2',
            priceRange: '₹500-800'
          },
          {
            name: 'Vinayak Family Restaurant',
            rating: 4.3,
            location: 'Assagao',
            mapUrl: 'https://goo.gl/maps/5X6X7X8X9X0X1X2X3',
            priceRange: '₹400-700'
          },
          {
            name: 'Ritz Classic',
            rating: 4.5,
            location: 'Panjim',
            mapUrl: 'https://goo.gl/maps/6X7X8X9X0X1X2X3X4',
            priceRange: '₹500-800'
          },
          {
            name: 'Hotel Anand',
            rating: 4.2,
            location: 'Panjim',
            mapUrl: 'https://goo.gl/maps/7X8X9X0X1X2X3X4X5',
            priceRange: '₹400-600'
          },
          {
            name : 'Martin’s Corner',
            rating: 4.4,
            location: 'Betalbatim',
            mapUrl: 'https://goo.gl/maps/8X9X0X1X2X3X4X5X6',
            priceRange: '₹600-900'
          }
        ]
      },
      {
        id: 'bebinca',
        name: 'Bebinca',
        image: 'https://images.unsplash.com/photo-1598890777032-bde835ba27c2?auto=format&fit=crop&q=80&w=2000',
        description: 'Traditional Goan layered dessert',
        restaurants: [
          {
            name: 'Infantaria',
            rating: 4.4,
            location: 'Calangute',
            mapUrl: 'https://goo.gl/maps/4X5X6X7X8X9X0X1X2',
            priceRange: '₹200-300'
          },
          {
            name: 'Bistro, Goa',
            rating: 4.5,
            location: 'Panjim',
            mapUrl: 'https://goo.gl/maps/5X6X7X8X9X0X1X2X3',
            priceRange: '₹250-350'
          },
          {
            name: 'Cafe Alchemia',
            rating: 4.3,
            location: 'Assagao',
            mapUrl: 'https://goo.gl/maps/6X7X8X9X0X1X2X3X4',
            priceRange: '₹200-300'
          },
          {
            name: 'Sao Tome',
            rating: 4.6,
            location: 'Panjim',
            mapUrl: 'https://goo.gl/maps/7X8X9X0X1X2X3X4X5',
            priceRange: '₹300-400'
          },
          {
            name: 'Cafe Tinto',
            rating: 4.5,
            location: 'Margao',
            mapUrl: 'https://goo.gl/maps/8X9X0X1X2X3X4X5X6',
            priceRange: '₹200-300'
          },
          {
            name: 'The Fisherman’s Wharf',
            rating: 4.4,
            location: 'Cavelossim',
            mapUrl: 'https://goo.gl/maps/9X0X1X2X3X4X5X6X7',
            priceRange: '₹400-600'
          }
        ]
      }
    ],
    activities: [
      {
        id: 'water-sports',
        name: 'Water Sports',
        image: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d1d1?auto=format&fit=crop&q=80&w=2000',
        description: 'Parasailing, jet skiing, and banana boat rides',
        providers: [
          {
            name: 'Baga Water Sports',
            rating: 4.3,
            location: 'Baga Beach',
            mapUrl: 'https://goo.gl/maps/5X6X7X8X9X0X1X2X3',
            priceRange: '₹1000-3000'
          }
        ]
      },
      {
        id: 'scuba-diving',
        name: 'Scuba Diving',
        image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&q=80&w=2000',
        description: 'Explore underwater marine life',
        providers: [
          {
            name: 'Dive Goa',
            rating: 4.7,
            location: 'Grande Island',
            mapUrl: 'https://goo.gl/maps/6X7X8X9X0X1X2X3X4',
            priceRange: '₹3500-6000'
          }
        ]
      },
      {
        id: 'casino',
        name: 'Casino Experience',
        image: 'https://images.unsplash.com/photo-1566008885218-90abf9200ddb?auto=format&fit=crop&q=80&w=2000',
        description: 'Floating casinos with gaming and entertainment',
        venues: [
          {
            name: 'Deltin Royale',
            rating: 4.5,
            location: 'Panaji River',
            mapUrl: 'https://goo.gl/maps/7X8X9X0X1X2X3X4X5',
            priceRange: 'Entry from ₹2500'
          }
        ]
      }
    ],
    backOption: {
      text: 'Back to All Destinations',
      action: 'navigateToAllDestinations()'
    }
  },
  shimla: {
    id: 'shimla',
    name: 'Shimla',
    description: 'The summer capital of India, known for its colonial architecture and scenic views',
    coverImage: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d1d1?auto=format&fit=crop&q=80&w=1000',
    bestTimeToVisit: 'March to June for pleasant weather, December to February for snow',
    howToReach: 'Shimla Airport or Kalka Railway Station',
    places: [
      {
        id: 'mall-road',
        name: 'Mall Road',
        image: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d1d1?auto=format&fit=crop&q=80&w=2000',
        description: 'The main street lined with shops and eateries',
        timings: 'Open 24 hours',
        history: 'Developed during the British era, it remains a popular tourist spot.',
        howToReach: 'Accessible by local transport or on foot from various hotels.',
        mapUrl: 'https://goo.gl/maps/1X2X3X4X5X6X7X8X9'
      },
      {
        id: 'jakhoo-temple',
        name: 'Jakhoo Temple',
        image: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d1d1?auto=format&fit=crop&q=80&w=2000',
        description: 'An ancient temple dedicated to Lord Hanuman',
        timings: '6:00 AM to 8:00 PM',
        history: 'Believed to be the highest point in Shimla, it offers panoramic views.',
        howToReach: 'Accessible by taxi or a short trek from the city center.',
        mapUrl: 'https://goo.gl/maps/2X3X4X5X6X7X8X9X0'
      },
      {
        id: 'ridge',
        name: 'The Ridge',
        image: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d1d1?auto=format&fit=crop&q=80&w=2000',
        description: 'A large open space in the heart of Shimla, offering stunning views',
        timings: 'Open 24 hours',
        howToReach: 'Accessible by local transport or on foot.',
        mapUrl: 'https://goo.gl/maps/3X4X5X6X7X8X9X0X1'
      },
      {
        id: 'christ-church',
        name: 'Christ Church',
        image: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d1d1?auto=format&fit=crop&q=80&w=2000',
        description: 'The second oldest church in North India',
        timings: '6:00 AM to 8:00 PM',
        history: 'Built in 1857, it is known for its beautiful stained glass windows.',
        howToReach: 'Located on the Mall Road, accessible by local transport.',
        mapUrl: 'https://goo.gl/maps/4X5X6X7X8X9X0X1X2'
      },
      {
        id: 'kufri',
        name: 'Kufri',
        image: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d1d1?auto=format&fit=crop&q=80&w=2000',
        description: 'A popular hill station near Shimla, known for its skiing and adventure activities',
        timings: 'Open 24 hours',
        howToReach: 'Accessible by taxi from Shimla (30 mins).',
        mapUrl: 'https://goo.gl/maps/5X6X7X8X9X0X1X2X3'
      }
    ],
    food: [
      {
        id: 'chole-bhature',
        name: 'Chole Bhature',
        image: 'https://images.unsplash.com/photo-1598198652224-1f080e63076b?auto=format&fit=crop&q=80&w=2000',
        description: 'Spicy chickpeas served with deep-fried bread',
        restaurants: [
          {
            name: 'Sita Ram Diwan Chand',
            rating: 4.5,
            location: 'Mall Road, Shimla',
            mapUrl: 'https://goo.gl/maps/1X2X3X4X5X6X7X8X 9',
            priceRange: '₹150-250'
          },
          {
            name: 'Sharma Dhaba',
            rating: 4.3,
            location: 'Near Mall Road',
            mapUrl: 'https://goo.gl/maps/2X3X4X5X6X7X8X9X0',
            priceRange: '₹100-200'
          },
          {
            name: 'Himachali Rasoi',
            rating: 4.4,
            location: 'The Mall, Shimla',
            mapUrl: 'https://goo.gl/maps/3X4X5X6X7X8X9X0X1',
            priceRange: '₹200-300'
          },
          {
            name: 'Baljees Restaurant',
            rating: 4.5,
            location: 'Mall Road, Shimla',
            mapUrl: 'https://goo.gl/maps/4X5X6X7X8X9X0X1X2',
            priceRange: '₹150-250'
          },
          {
            name: 'Cafe Simla Times',
            rating: 4.6,
            location: 'The Mall, Shimla',
            mapUrl: 'https://goo.gl/maps/5X6X7X8X9X0X1X2X3',
            priceRange: '₹200-400'
          },
          {
            name: 'The Restaurant at The Oberoi Cecil',
            rating: 4.7,
            location: 'The Mall, Shimla',
            mapUrl: 'https://goo.gl/maps/6X7X8X9X0X1X2X3X4',
            priceRange: '₹800-1200'
          }
        ]
      },
      {
        id: 'momos',
        name: 'Momos',
        image: 'https://images.unsplash.com/photo-1598198652224-1f080e63076b?auto=format&fit=crop&q=80&w=2000',
        description: 'Steamed dumplings filled with vegetables or meat',
        restaurants: [
          {
            name: 'KFC',
            rating: 4.5,
            location: 'Mall Road, Shimla',
            mapUrl: 'https://goo.gl/maps/1X2X3X4X5X6X7X8X9',
            priceRange: '₹100-200'
          },
          {
            name: 'The Himalayan Cafe',
            rating: 4.3,
            location: 'The Mall, Shimla',
            mapUrl: 'https://goo.gl/maps/2X3X4X5X6X7X8X9X0',
            priceRange: '₹150-250'
          },
          {
            name: 'Cafe 1947',
            rating: 4.6,
            location: 'Near Mall Road',
            mapUrl: 'https://goo.gl/maps/3X4X5X6X7X8X9X0X1',
            priceRange: '₹200-300'
          },
          {
            name: 'Himachali Rasoi',
            rating: 4.4,
            location: 'The Mall, Shimla',
            mapUrl: 'https://goo.gl/maps/4X5X6X7X8X9X0X1X2',
            priceRange: '₹150-250'
          },
          {
            name: 'The Restaurant at The Oberoi Cecil',
            rating: 4.7,
            location: 'The Mall, Shimla',
            mapUrl: 'https://goo.gl/maps/5X6X7X8X9X0X1X2X3',
            priceRange: '₹800-1200'
          },
          {
            name: 'Cafe Simla Times',
            rating: 4.6,
            location: 'The Mall, Shimla',
            mapUrl: 'https://goo.gl/maps/6X7X8X9X0X1X2X3X4',
            priceRange: '₹200-400'
          }
        ]
      },
      {
        id: 'chocolate-cake',
        name: 'Chocolate Cake',
        image: 'https://images.unsplash.com/photo-1598198652224-1f080e63076b?auto=format&fit=crop&q=80&w=2000',
        description: 'Deliciously rich chocolate cake',
        restaurants: [
          {
            name: 'The Bakery at The Oberoi Cecil',
            rating: 4.8,
            location: 'The Mall, Shimla',
            mapUrl: 'https://goo.gl/maps/1X2X3X4X5X6X7X8X9', 
            priceRange: '₹300-500'
          },
          {
            name: 'Taste of Tibet',
            rating: 4.6,
            location: 'Near Mall Road',
            mapUrl: 'https://goo.gl/maps/2X3X4X5X6X7X8X9X0',
            priceRange: '₹200-300'
          },
          {
            name: 'The Himalayan Cafe',
            rating: 4.5,
            location: 'The Mall, Shimla',
            mapUrl: 'https://goo.gl/maps/3X4X5X6X7X8X9X0X1',
            priceRange: '₹150-250'
          },
          {
            name: 'Baljees Restaurant',
            rating: 4.4,
            location: 'Mall Road, Shimla',
            mapUrl: 'https://goo.gl/maps/4X5X6X7X8X9X0X1X2',
            priceRange: '₹150-250'
          },
          {
            name: 'Cafe Simla Times',
            rating: 4.6,
            location: 'The Mall, Shimla',
            mapUrl: 'https://goo.gl/maps/5X6X7X8X9X0X1X2X3',
            priceRange: '₹200-400'
          },
          {
            name: 'The Restaurant at The Oberoi Cecil',
            rating: 4.7,
            location: 'The Mall, Shimla',
            mapUrl: 'https://goo.gl/maps/6X7X8X9X0X1X2X3X4',
            priceRange: '₹800-1200'
          }
        ]
      }
    ],
    activities: [
      {
        id: 'snow-sports',
        name: 'Snow Sports',
        image: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d1d1?auto=format&fit=crop&q=80&w=2000',
        description: 'Enjoy skiing and snowboarding in winter',
        providers: [
          {
            name: 'Shimla Snow Sports',
            rating: 4.7,
            location: 'Kufri',
            mapUrl: 'https://goo.gl/maps/6X7X8X9X0X1X2X3X4',
            priceRange: '₹1000-3000'
          }
        ]
      }
    ],
    backOption: {
      text: 'Back to All Destinations',
      action: 'navigateToAllDestinations()'
    }
  },
  darjeeling: {
    id: 'darjeeling',
    name: 'Darjeeling',
    description: 'Famous for its tea plantations and stunning views of the Himalayas',
    coverImage: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d1d1?auto=format&fit=crop&q=80&w=1000',
    bestTimeToVisit: 'March to June and September to December',
    howToReach: 'Bagdogra Airport or New Jalpaiguri Railway Station',
    places: [
      {
        id: 'batasia-loop',
        name: 'Batasia Loop',
        image: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d1d1?auto=format&fit=crop&q=80&w=2000',
        description: 'A spiral railway track with a beautiful garden',
        timings: 'Open 24 hours',
        history: 'Constructed to help the toy train navigate the steep gradient.',
        howToReach: 'Accessible by taxi or local transport from Darjeeling town.',
        mapUrl: 'https://goo.gl/maps/1X2X3X4X5X6X7X8X9'
      },
      {
        id: 'tea-gardens',
        name: 'Tea Gardens',
        image: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d1d1?auto=format&fit=crop&q=80&w=2000',
        description: 'Famous for its lush green tea plantations',
        timings: '8:00 AM to 5:00 PM',
        history: 'Darjeeling tea is renowned worldwide for its unique flavor and aroma.',
        howToReach: 'Accessible by taxi or guided tours from the town.',
        mapUrl: 'https://goo.gl/maps/2X3X4X5X6X7X8X9X0'
      },
      {
        id: 'darjeeling-himalayan-railway',
        name: 'Darjeeling Himalayan Railway',
        image: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d1d1?auto=format&fit=crop&q=80&w=2000',
        description: 'A UNESCO World Heritage Site, famous for its scenic train ride',
        timings: 'Timings vary, check local schedules',
        howToReach: 'Board from Darjeeling Railway Station.',
        mapUrl: 'https://goo.gl/maps/3X4X5X6X7X8X9X0X1'
      },
      {
        id: 'observatory-hill',
        name: 'Observatory Hill',
        image: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d1d1?auto=format&fit=crop&q=80&w=2000',
        description: 'Offers panoramic views of the Kanchenjunga range',
        timings: 'Open 24 hours',
        howToReach: 'Accessible by local transport or on foot.',
        mapUrl: 'https://goo.gl/maps/4X5X6X7X8X9X0X1X2'
      },
      {
        id: 'peace-pagoda',
        name: 'Peace Pagoda',
        image: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d1d1?auto=format&fit=crop&q=80&w=2000',
        description: 'A Buddhist stupa that promotes peace and harmony',
        timings: '6:00 AM to 7:00 PM',
        howToReach: 'Accessible by taxi or local transport.',
        mapUrl: 'https://goo.gl/maps/5X6X7X8X9X0X1X2X3'
      }
    ],
    food: [
      {
        id: 'momos',
        name: 'Momos',
        image: 'https://images.unsplash.com/photo-1598198652224-1f080e63076b?auto=format&fit=crop&q=80&w=2000',
        description: 'Steamed dumplings filled with vegetables or meat',
        restaurants: [
          {
            name: 'Kunga Restaurant',
            rating: 4.5,
            location: 'Near Chowrasta',
            mapUrl: 'https://goo.gl/maps/1X2X3X4X5X6X7X8X9',
            priceRange: '₹100-200'
          },
          {
            name: 'Glenary’s',
            rating: 4.6,
            location: 'Darjeeling',
            mapUrl: 'https://goo.gl/maps/2X3X4X5X6X7X8X9X0',
            priceRange: '₹150-250'
          },
          {
            name: 'Keventers',
            rating: 4.4,
            location: 'Darjeeling',
            mapUrl: 'https://goo.gl/maps/3X4X5X6X7X8X9X0X1',
            priceRange: '₹200-300'
          },
          {
            name: 'The Park Restaurant',
            rating: 4.5,
            location: 'Darjeeling',
            mapUrl: 'https://goo.gl/maps/4X5X6X7X8X9X0X1X2',
            priceRange: '₹150-250'
          },
          {
            name: 'Himalayan Java',
            rating: 4.6,
            location: 'Darjeeling',
            mapUrl: 'https://goo.gl/maps/5X6X7X8X9X0X1X2X3',
            priceRange: '₹100-200'
          },
          {
            name: 'The Bakery',
            rating: 4.3,
            location: 'Darjeeling',
            mapUrl: 'https://goo.gl/maps/6X7X8X9X0X1X2X3X4',
            priceRange: '₹150-250'
          }
        ]
      },
      {
        id: 'darjeeling-tea',
        name: 'Darjeeling Tea',
        image: 'https://images.unsplash.com/photo-1598198652224-1f080e63076b?auto=format&fit=crop&q=80&w=2000',
        description: 'Famous tea known for its unique flavor and aroma',
        restaurants: [
          {
            name: 'Glenary’s',
            rating: 4.6,
            location: 'Darjeeling',
            mapUrl: 'https://goo.gl/maps/2X3X4X5X6X7X8X9X0',
 priceRange: '₹150-250'
          },
          {
            name: 'Keventers',
            rating: 4.4,
            location: 'Darjeeling',
            mapUrl: 'https://goo.gl/maps/3X4X5X6X7X8X9X0X1',
            priceRange: '₹200-300'
          },
          {
            name: 'The Park Restaurant',
            rating: 4.5,
            location: 'Darjeeling',
            mapUrl: 'https://goo.gl/maps/4X5X6X7X8X9X0X1X2',
            priceRange: '₹150-250'
          },
          {
            name: 'Himalayan Java',
            rating: 4.6,
            location: 'Darjeeling',
            mapUrl: 'https://goo.gl/maps/5X6X7X8X9X0X1X2X3',
            priceRange: '₹100-200'
          },
          {
            name: 'The Bakery',
            rating: 4.3,
            location: 'Darjeeling',
            mapUrl: 'https://goo.gl/maps/6X7X8X9X0X1X2X3X4',
            priceRange: '₹150-250'
          },
          {
            name: 'Tea Garden Restaurant',
            rating: 4.5,
            location: 'Darjeeling',
            mapUrl: 'https://goo.gl/maps/7X8X9X0X1X2X3X4X5',
            priceRange: '₹200-300'
          }
        ]
      },
      {
        id: 'thukpa',
        name: 'Thukpa',
        image: 'https://images.unsplash.com/photo-1598198652224-1f080e63076b?auto=format&fit=crop&q=80&w=2000',
        description: 'Noodle soup with vegetables or meat',
        restaurants: [
          {
            name: 'Kunga Restaurant',
            rating: 4.5,
            location: 'Near Chowrasta',
            mapUrl: 'https://goo.gl/maps/1X2X3X4X5X6X7X8X9',
            priceRange: '₹100-200'
          },
          {
            name: 'Glenary’s',
            rating: 4.6,
            location: 'Darjeeling',
            mapUrl: 'https://goo.gl/maps/2X3X4X5X6X7X8X9X0',
            priceRange: '₹150-250'
          },
          {
            name: 'Keventers',
            rating: 4.4,
            location: 'Darjeeling',
            mapUrl: 'https://goo.gl/maps/3X4X5X6X7X8X9X0X1',
            priceRange: '₹200-300'
          },
          {
            name: 'The Park Restaurant',
            rating: 4.5,
            location: 'Darjeeling',
            mapUrl: 'https://goo.gl/maps/4X5X6X7X8X9X0X1X2',
            priceRange: '₹150-250'
          },
          {
            name: 'Himalayan Java',
            rating: 4.6,
            location: 'Darjeeling',
            mapUrl: 'https://goo.gl/maps/5X6X7X8X9X0X1X2X3',
            priceRange: '₹100-200'
          },
          {
            name: 'The Bakery',
            rating: 4.3,
            location: 'Darjeeling',
            mapUrl: 'https://goo.gl/maps/6X7X8X9X0X1X2X3X4',
            priceRange: '₹150-250'
          }
        ]
      }
    ],
    activities: [
      {
        id: 'toy-train-ride',
        name: 'Toy Train Ride',
        image: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d1d1?auto=format&fit=crop&q=80&w=2000',
        description: 'Experience a scenic ride on the Darjeeling Himalayan Railway',
        providers: [
          {
            name: 'Darjeeling Himalayan Railway',
            rating: 4.8,
            location: 'Darjeeling',
            mapUrl: 'https://goo.gl/maps/4X5X6X7X8X9X0X1X2',
            priceRange: '₹100-500'
          }
        ]
      }
    ],
    backOption: {
      text: 'Back to All Destinations',
      action: 'navigateToAllDestinations()'
    }
  },
  gangtok: {
    id: 'gangtok',
    name: 'Gangtok',
    description: 'The capital of Sikkim, known for its monasteries and views of Kanchenjunga',
    coverImage: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d1d1?auto=format&fit=crop&q=80&w=1000',
    bestTimeToVisit: 'March to June and September to December',
    howToReach: 'Bagdogra Airport or New Jalpaiguri Railway Station',
    places: [
      {
        id: 'tsomgo-lake',
        name: 'Tsomgo Lake',
        image: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d1d1?auto=format&fit=crop&q=80&w=2000',
        description: 'A glacial lake surrounded by snow-capped mountains',
        timings: 'Open 24 hours',
        history: 'A sacred lake for the local people, it is a popular tourist destination.',
        howToReach: 'Accessible by taxi from Gangtok.',
        mapUrl: 'https://goo.gl/maps/1X2X3X4X5X6X7X8X9'
      },
      {
        id: 'rumtek-monastery',
        name: 'Rumtek Monastery',
        image: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d1d1?auto=format&fit=crop&q=80&w=2000',
        description: 'One of the largest monasteries in Sikkim',
        timings: '6:00 AM to 6:00 PM',
        history: 'Built in the 1960s, it is a center of Tibetan Buddhism and a significant pilgrimage site.',
        howToReach: 'Accessible by taxi from Gangtok.',
        mapUrl: 'https://goo.gl/maps/2X3X4X5X6X7X8X9X0'
      },
      {
        id: 'buddha-park',
        name: 'Buddha Park',
        image: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d1d1?auto=format&fit=crop&q=80&w=2000',
        description: 'A beautiful park featuring a giant statue of Buddha',
        timings: 'Open 24 hours',
        howToReach: 'Accessible by taxi or local transport.',
        mapUrl: 'https://goo.gl/maps/3X4X5X6X7X8X9X0X1'
      },
      {
        id: 'mg-road',
        name: 'MG Road',
        image: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d1d1?auto=format&fit=crop&q=80&w=2000',
        description: 'The main street of Gangtok, lined with shops and eateries',
        timings: 'Open 24 hours',
        howToReach: 'Accessible by local transport or on foot.',
        mapUrl: 'https://goo.gl/maps/4X5X6X7X8X9X0X1X2'
      },
      {
        id: 'nathula-pass',
        name: 'Nathula Pass',
        image: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d1d1?auto=format&fit=crop&q=80&w=2000',
        description: 'A mountain pass connecting India and Tibet',
        timings: 'Open 24 hours',
        howToReach: 'Accessible by taxi from Gangtok (permit required).',
        mapUrl: 'https://goo.gl/maps/5X6X7X8X9X0X1X2X3'
      }
    ],
    food: [
      {
        id: 'thukpa',
        name: 'Thukpa',
        image: 'https://images.unsplash.com/photo-1598198652224-1f080e63076b?auto=format&fit=crop&q=80&w=2000',
        description: 'Noodle soup with vegetables or meat',
        restaurants: [
          {
            name: 'Baker’s Cafe',
            rating: 4.5,
            location: 'MG Marg, Gangtok',
            mapUrl: 'https://goo.gl/maps/1X2X3X4X5X6X7X8X9',
            priceRange: '₹150-300'
          },
          {
            name: 'Taste of Tibet',
            rating: 4.6,
            location: 'MG Marg, Gangtok',
            mapUrl: 'https://goo.gl/maps/2X3X4X5X6X7X8X9X0',
            priceRange: '₹150-300'
          },
          {
            name: 'The Coffee Shop',
            rating: 4.4,
            location: 'MG Marg, Gangtok',
            mapUrl: 'https://goo.gl/maps/3X4X5X6X7X8X9X0X1',
            priceRange: '₹100-200'
          },
          {
            name: 'Roll House',
            rating: 4.5,
            location: 'MG Marg, Gangtok',
            mapUrl: 'https://goo.gl/maps/4X5X6X7X8X9X0X1X2',
            priceRange: '₹100-200'
          },
          {
            name: 'Himalayan Restaurant',
            rating: 4.6,
            location: 'Near MG Marg, Gangtok',
            mapUrl: 'https://goo.gl/maps/5X6X7X8X9X0X1X2X3',
            priceRange: '₹200-400'
          },
          {
            name: 'Nathula',
            rating: 4.7,
            location: 'MG Marg, Gangtok',
            mapUrl: 'https://goo.gl/maps/6X7X8X9X0X1X2X3X4',
            priceRange: '₹150-250'
          }
        ]
      }
    ],
    activities: [
      {
        id: 'cable-car-ride',
        name: 'Cable Car Ride',
        image: 'https://images.unsplash.com/photo-1566008885218-90abf9200ddb?auto=format&fit=crop&q=80&w=2000',
        description: 'Enjoy stunning views of the mountains and Gangtok',
        providers: [
          {
            name: 'Gangtok Cable Car',
            rating: 4.5,
            location: 'MG Marg, Gangtok',
            mapUrl: 'https://goo.gl/maps/7X8X9X0X1X2X3X4X5',
            priceRange: '₹300-500'
          }
        ]
      }
    ],
    backOption: {
      text: 'Back to All Destinations',
      action: 'navigateToAllDestinations()'
    }
  }
};

export type CityData = typeof cityData[keyof typeof cityData];