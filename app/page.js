export default function
HomeHiveLanding() {
  return (
    <div>
      <header className="relative h-[80vh] min-h-[600px] w-full flex flex-col">
  
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1600&q=80" 
            alt="Luxury Home" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
 
        <nav className="relative z-20 flex justify-between items-center px-8 py-6 max-w-7xl mx-auto w-full text-white">
          <div className="flex items-center gap-2 text-2xl font-bold italic tracking-tighter">
         HomeHive
          </div>
          <div className="hidden md:flex gap-8 text-sm font-medium uppercase tracking-widest">
            <a href="" className="hover:text-blue-200 transition">Rentals</a>
            <a href="" className="hover:text-blue-200 transition">About</a>
            <a href="" className="hover:text-blue-200 transition">Contact</a>
          </div>
        </nav>

        <div className="relative z-10 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter leading-none mb-4 drop-shadow-2xl">
            Find Your Home <br /> Away From Home
          </h1>
          <p className="text-white text-lg md:text-xl font-light tracking-wide max-w-2xl drop-shadow-md">
            Discover curated stays designed for comfort and inspiration.
          </p>
          <button className="mt-8 bg-white text-gray-900 px-8 py-3 rounded-md font-bold uppercase shadow-lg hover:cursor pointer">
            Explore Now
          </button>
        </div>
      </header>

      <section className="py-16 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          <div className="flex flex-col items-center">
            <div className="text-3xl mb-3 text-blue-600">🛡️</div>
            <h3 className="font-bold text-sm uppercase tracking-widest mb-1">Verified Listings</h3>
            <p className="text-gray-500 text-xs">Hand picked quality homes</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-3xl mb-3 text-blue-600">💰</div>
            <h3 className="font-bold text-sm uppercase tracking-widest mb-1">No Hidden Fees</h3>
            <p className="text-gray-500 text-xs">Transparent pricing always</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-3xl mb-3 text-blue-600">🎧</div>
            <h3 className="font-bold text-sm uppercase tracking-widest mb-1">24/7 Local Support</h3>
            <p className="text-gray-500 text-xs">We're here for you, anytime</p>
          </div>
        </div>
      </section>

    
      <section className="py-20 max-w-7xl mx-auto px-6">
        <h2 className="text-2xl font-bold text-center uppercase tracking-widest mb-12">Explore Our Collections</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { name: 'Pet Friendly', img: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=400&q=80' },
            { name: 'Work From Anywhere', img: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=400&q=80' },
            { name: 'Beachfront Getaways', img: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=400&q=80' },
            { name: 'Budget Friendly Stays', img: '/family.jpg' }
          ].map((item,) => (
            <div className="group relative overflow-hidden rounded-xl aspect-[4/3] cursor-pointer shadow-md">
              <img src={item.img} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition duration-700" />
              <div className="absolute inset-0 bg-gradient flex items-end p-6">
                <p className="text-white font-bold text-sm uppercase tracking-widest">{item.name}</p>
              </div>
            </div>
          ))}
        </div>
      </section>


      <footer className="bg-[#1a2b4b] text-white py-16 px-8">
        <div className="max-w-7xl grid grid-cols-1 md:grid-cols-3 gap-12 ">
          <div>
            <div className="flex items-center gap-2 text-xl font-bold italic mb-4">
             HomeHive
            </div>
            <p className="text-gray-400 text-xs max-w-xs uppercase tracking-tighter">
              The world's easiest home rental platform. Making your next adventure feel like coming home.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-4 text-xs text-gray-400 uppercase tracking-widest">
            <ul className="space-y-2">
              <li><a href="" className="hover:text-white transition">Search</a></li>
              <li><a href="" className="hover:text-white transition">About Us</a></li>
              <li><a href="" className="hover:text-white transition">Help Center</a></li>
            </ul>
            <ul className="space-y-2">
              <li><a href="" className="hover:text-white transition">Privacy</a></li>
              <li><a href="" className="hover:text-white transition">Terms</a></li>
              <li><a href="" className="hover:text-white transition">Careers</a></li>
            </ul>
          </div>

          <div className="bg-white/10 p-6 rounded-lg border border-white/10">
            <h4 className="text-sm font-bold uppercase tracking-widest mb-4">Email Newsletter</h4>
            <div className="flex flex-col gap-2">
              <input 
                type="email" 
                placeholder="Name" 
                className="bg-white text-gray-900 px-4 py-2 rounded text-sm "
              />
              <input 
                type="email" 
                placeholder="Email address" 
                className="bg-white text-gray-900 px-4 py-2 rounded text-sm "
              />
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 rounded text-xs uppercase tracking-widest transition">
                Sign Up
              </button>
            </div>
          </div>
          <div className="text-italics font-semibold ">
            <p className="text-gray-400 text-xs uppercase tracking-widest">
              Copyright © 2026  HomeHive. All rights reserved
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

