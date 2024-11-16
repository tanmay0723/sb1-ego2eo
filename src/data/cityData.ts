export const cityData = {
  goa: {
    id: 'goa',
    name: 'Goa',
    description: 'Beach paradise with vibrant nightlife',
    coverImage: 'https://i.pinimg.com/564x/d5/a4/d5/d5a4d56e1476e3298a0085d6e3947433.jpg',
    bestTimeToVisit: 'November to March',
    howToReach: 'Dabolim Airport or Madgaon Railway Station',
    places: [
      {
        id: 'baga-beach',
        name: 'Baga Beach',
        image: 'https://i.pinimg.com/564x/09/d8/36/09d836cff4484550a75c6155888dbbba.jpg',
        description: 'Famous for water sports and nightlife',
        timings: '24 hours',
        history: 'Baga Beach derives its name from the Baga Creek. It emerged as a popular tourist destination in the 1960s when hippies discovered its pristine shores.',
        howToReach: 'Take a taxi from Dabolim Airport (45 mins) or local bus from Mapusa',
        mapUrl: 'https://goo.gl/maps/QZKHYxhKUE9YN1Uw8'
      },
      {
        id: 'fort-aguada',
        name: 'Fort Aguada',
        image: '	https://i.pinimg.com/736x/af/a4/5a/afa45a7ff060ac8f9e7383916f75e820.jpg',
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
        image: 'https://i.pinimg.com/564x/41/88/46/41884604312499b0fc1c3314ad49858a.jpg',
        description: 'Known for its vibrant nightlife and flea markets',
        timings: '24 hours',
        howToReach: 'Accessible by taxi or local transport.',
        mapUrl: 'https://goo.gl/maps/4X5X6X7X8X9X0X1X2'
      },
      {
        id: 'chapora-fort',
        name: 'Chapora Fort',
        image: 'https://i.pinimg.com/564x/2e/4a/26/2e4a26cd9b591c0af4fe1895eb2db543.jpg',
        description: 'Famous for its scenic views and historical significance',
        timings: 'Open 24 hours',
        howToReach: 'Accessible by taxi or local transport.',
        mapUrl: 'https://goo.gl/maps/5X6X7X8X9X0X1X2X3'
      },
      {
        id: 'dudhsagar-waterfalls',
        name: 'Dudhsagar Waterfalls',
        image: '	https://i.pinimg.com/564x/52/96/ac/5296acae83b3c4377bbbbc8cd1e5d138.jpg',
        description: 'One of the tallest waterfalls in India, located in the Bhagwan Mahavir Wildlife Sanctuary',
        timings: 'Best visited from June to January',
        howToReach: 'Accessible via jeep safari from Mollem National Park.',
        mapUrl: 'https://goo.gl/maps/6X7X8X9X0X1X2X3X4'
      },
      {
        id: 'basilica-of-bom-jesus',
        name: 'Basilica of Bom Jesus',
        image: '	https://i.pinimg.com/564x/26/91/0b/26910bbd42cc461c0bb4229faf6a6030.jpg',
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
        image: '	https://i.pinimg.com/564x/0a/ad/41/0aad41c0bf5348eedad2cd453ee58f7d.jpg',
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
        image: '	https://i.pinimg.com/736x/cc/a5/8d/cca58d2687f6b10e79664a07dda9301e.jpg',
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
        image: 'https://i.pinimg.com/564x/e4/80/c7/e480c71d1fa3142aca634e5347c615c2.jpg',
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
        image: '	https://i.pinimg.com/564x/2f/f5/b0/2ff5b0cf680dd1bd05f68145d5660b46.jpg',
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
        image: '	https://i.pinimg.com/564x/3c/c0/68/3cc06805b9d29e63dba7543642444ca6.jpg',
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
        image: '	https://i.pinimg.com/564x/8b/4e/50/8b4e5057c509dd28c133df6823a90aa7.jpg',
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
    coverImage: 'https://i.pinimg.com/564x/36/d8/74/36d874809e17991213e45b57645f91fd.jpg',
    bestTimeToVisit: 'March to June for pleasant weather, December to February for snow',
    howToReach: 'Shimla Airport or Kalka Railway Station',
    places: [
      {
        id: 'mall-road',
        name: 'Mall Road',
        image: 'https://i.pinimg.com/564x/15/b5/f7/15b5f757e7db7431379ac00514a81eef.jpg',
        description: 'The main street lined with shops and eateries',
        timings: 'Open 24 hours',
        history: 'Developed during the British era, it remains a popular tourist spot.',
        howToReach: 'Accessible by local transport or on foot from various hotels.',
        mapUrl: 'https://goo.gl/maps/1X2X3X4X5X6X7X8X9'
      },
      {
        id: 'jakhoo-temple',
        name: 'Jakhoo Temple',
        image: 'https://i.pinimg.com/736x/fe/84/64/fe8464dc9bbd7b6c944279ceb3e3cbeb.jpg',
        description: 'An ancient temple dedicated to Lord Hanuman',
        timings: '6:00 AM to 8:00 PM',
        history: 'Believed to be the highest point in Shimla, it offers panoramic views.',
        howToReach: 'Accessible by taxi or a short trek from the city center.',
        mapUrl: 'https://goo.gl/maps/2X3X4X5X6X7X8X9X0'
      },
      {
        id: 'ridge',
        name: 'The Ridge',
        image: '	https://i.pinimg.com/564x/0c/8b/a7/0c8ba7a386f38b9d32d29e74ecb0ee13.jpg',
        description: 'A large open space in the heart of Shimla, offering stunning views',
        timings: 'Open 24 hours',
        howToReach: 'Accessible by local transport or on foot.',
        mapUrl: 'https://goo.gl/maps/3X4X5X6X7X8X9X0X1'
      },
      {
        id: 'christ-church',
        name: 'Christ Church',
        image: '	https://i.pinimg.com/736x/a0/1a/5f/a01a5f45b4f77c2d5361002c8d3ddb9c.jpg',
        description: 'The second oldest church in North India',
        timings: '6:00 AM to 8:00 PM',
        history: 'Built in 1857, it is known for its beautiful stained glass windows.',
        howToReach: 'Located on the Mall Road, accessible by local transport.',
        mapUrl: 'https://goo.gl/maps/4X5X6X7X8X9X0X1X2'
      },
      {
        id: 'kufri',
        name: 'Kufri',
        image: '	https://i.pinimg.com/564x/cf/34/5f/cf345fac131de65a385958f5e703db7f.jpg',
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
        image: '	https://i.pinimg.com/736x/ad/df/10/addf10b34621f023f039e2d16c4665db.jpg',
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
        image: 'https://i.pinimg.com/564x/e8/35/ed/e835ed89023c2a6d2d1933321d59efc4.jpg',
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
        image: '	https://i.pinimg.com/564x/03/d4/b1/03d4b1563efdbd8325785d856f812bb9.jpg',
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
        image: '	https://i.pinimg.com/564x/0f/ab/d9/0fabd993fa53e3b27846ec7f533636f1.jpg',
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
    coverImage: 'https://i.pinimg.com/736x/28/9b/95/289b95a6b9f5e5c381e9bbd2bcf8bf0d.jpg',
    bestTimeToVisit: 'March to June and September to December',
    howToReach: 'Bagdogra Airport or New Jalpaiguri Railway Station',
    places: [
      {
        id: 'batasia-loop',
        name: 'Batasia Loop',
        image: 'https://i.pinimg.com/564x/63/99/55/6399555adb8f2bc71e1332a04778cf62.jpg',
        description: 'A spiral railway track with a beautiful garden',
        timings: 'Open 24 hours',
        history: 'Constructed to help the toy train navigate the steep gradient.',
        howToReach: 'Accessible by taxi or local transport from Darjeeling town.',
        mapUrl: 'https://goo.gl/maps/1X2X3X4X5X6X7X8X9'
      },
      {
        id: 'tea-gardens',
        name: 'Tea Gardens',
        image: 'https://i.pinimg.com/564x/9b/85/41/9b8541c721649fc3b6836138c891a605.jpg',
        description: 'Famous for its lush green tea plantations',
        timings: '8:00 AM to 5:00 PM',
        history: 'Darjeeling tea is renowned worldwide for its unique flavor and aroma.',
        howToReach: 'Accessible by taxi or guided tours from the town.',
        mapUrl: 'https://goo.gl/maps/2X3X4X5X6X7X8X9X0'
      },
      {
        id: 'darjeeling-himalayan-railway',
        name: 'Darjeeling Himalayan Railway',
        image: '	https://i.pinimg.com/564x/af/6c/ea/af6cea466375b4f1bab5409bd0332a79.jpg',
        description: 'A UNESCO World Heritage Site, famous for its scenic train ride',
        timings: 'Timings vary, check local schedules',
        howToReach: 'Board from Darjeeling Railway Station.',
        mapUrl: 'https://goo.gl/maps/3X4X5X6X7X8X9X0X1'
      },
      {
        id: 'observatory-hill',
        name: 'Observatory Hill',
        image: 'https://i.pinimg.com/564x/e4/ae/d7/e4aed7b00a42191429d1ce400f065b5a.jpg',
        description: 'Offers panoramic views of the Kanchenjunga range',
        timings: 'Open 24 hours',
        howToReach: 'Accessible by local transport or on foot.',
        mapUrl: 'https://goo.gl/maps/4X5X6X7X8X9X0X1X2'
      },
      {
        id: 'peace-pagoda',
        name: 'Peace Pagoda',
        image: 'https://i.pinimg.com/564x/8d/4e/fc/8d4efc41c0a46976df253b9108add9a7.jpg',
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
        image: '	https://i.pinimg.com/564x/47/b3/7e/47b37e61b9d0bfae411344447f80167b.jpg',
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
        image: '	https://i.pinimg.com/564x/23/3b/3f/233b3faacd8d14ab28ccfd11137360d8.jpg',
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
        image: 'https://i.pinimg.com/564x/bc/e3/bc/bce3bc608b3341c5d8a3e4c125375f77.jpg',
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
        image: 'https://i.pinimg.com/564x/ed/9c/c8/ed9cc8a6ba685d157b419af7367606e6.jpg',
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
    coverImage: 'Gangtok',
    bestTimeToVisit: 'March to June and September to December',
    howToReach: 'Bagdogra Airport or New Jalpaiguri Railway Station',
    places: [
      {
        id: 'tsomgo-lake',
        name: 'Tsomgo Lake',
        image: 'https://i.pinimg.com/564x/99/c7/82/99c782f002b5e92761c9bd35b63eb598.jpg',
        description: 'A glacial lake surrounded by snow-capped mountains',
        timings: 'Open 24 hours',
        history: 'A sacred lake for the local people, it is a popular tourist destination.',
        howToReach: 'Accessible by taxi from Gangtok.',
        mapUrl: 'https://goo.gl/maps/1X2X3X4X5X6X7X8X9'
      },
      {
        id: 'rumtek-monastery',
        name: 'Rumtek Monastery',
        image: 'https://i.pinimg.com/564x/25/4e/c8/254ec8dfc3a39973c384f2b180d92cdf.jpg',
        description: 'One of the largest monasteries in Sikkim',
        timings: '6:00 AM to 6:00 PM',
        history: 'Built in the 1960s, it is a center of Tibetan Buddhism and a significant pilgrimage site.',
        howToReach: 'Accessible by taxi from Gangtok.',
        mapUrl: 'https://goo.gl/maps/2X3X4X5X6X7X8X9X0'
      },
      {
        id: 'buddha-park',
        name: 'Buddha Park',
        image: 'https://i.pinimg.com/564x/8b/76/b7/8b76b71a167f1bf0ad79f03e941a6177.jpg',
        description: 'A beautiful park featuring a giant statue of Buddha',
        timings: 'Open 24 hours',
        howToReach: 'Accessible by taxi or local transport.',
        mapUrl: 'https://goo.gl/maps/3X4X5X6X7X8X9X0X1'
      },
      {
        id: 'mg-road',
        name: 'MG Road',
        image: 'https://i.pinimg.com/564x/1b/b6/59/1bb659d2931ebde7dde0113ceac5d3f0.jpg',
        description: 'The main street of Gangtok, lined with shops and eateries',
        timings: 'Open 24 hours',
        howToReach: 'Accessible by local transport or on foot.',
        mapUrl: 'https://goo.gl/maps/4X5X6X7X8X9X0X1X2'
      },
      {
        id: 'nathula-pass',
        name: 'Nathula Pass',
        image: 'vhttps://i.pinimg.com/736x/9d/dd/84/9ddd84a035be0d03244f6e9756ac6edc.jpg',
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
        image: 'https://i.pinimg.com/564x/0a/fc/ca/0afcca6bd3a21ed7b5fd18753dbe9e9b.jpg',
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
        image: 'https://i.pinimg.com/564x/af/8b/47/af8b47448bae272565e8d8aab79efe3a.jpg',
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