export default function Footer() {
  const year = new Date().getFullYear();
  return (
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
  );
}