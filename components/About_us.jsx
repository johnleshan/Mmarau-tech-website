'use client';

import Image from 'next/image';
import { useEffect } from 'react';
import Swiper from 'swiper';
import 'swiper/swiper-bundle.min.css';

const GDSCSection = () => {
  useEffect(() => {
    new Swiper('.swiper-container', {
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
    });
  }, []);

  return (
    <div className="bg-gray-100">
      {/* About Section */}
      <section className="max-w-7xl mx-auto px-6 py-10">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">What is GDGoC?</h2>
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="w-full md:w-1/2 mb-6 md:mb-0 relative">
            <Image src="/Images/school-logo.jpg" alt="School Logo" width={384} height={272} className="rounded-lg" />
            <Image src="/Images/Gdsclg.jpg" alt="GDSC Logo" width={384} height={272} className="absolute inset-0 opacity-65" />
          </div>
          <div className="w-full md:w-1/2">
            <p className="text-gray-700 text-lg leading-relaxed">
              Google Developer Groups on Campus (GDGoC) at Maasai Mara University is a vibrant community for students passionate about technology and innovation.
            </p>
            <ul className="list-disc pl-6 text-gray-700">
              <li>Gain hands-on experience with cutting-edge technologies.</li>
              <li>Collaborate on impactful projects that solve real-world problems.</li>
              <li>Network with like-minded peers and industry professionals.</li>
              <li>Develop essential skills to advance your tech career.</li>
              <li>Contribute to building solutions for local communities.</li>
            </ul>
          </div>
        </div>
        {/* Mission and Vision */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Mission Statement</h3>
            <p className="text-gray-700 leading-relaxed">To empower students with cutting-edge technological skills...</p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Vision Statement</h3>
            <p className="text-gray-700 leading-relaxed">To be a leading university tech community...</p>
          </div>
        </div>
      </section>

      {/* Communities Section */}
      <section className="max-w-7xl mx-auto px-6 py-10">
        <h3 className="text-xl font-semibold text-center text-gray-800 mb-6">Our Communities</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {[
            { name: "Community Main group", img: "Community Main group.jpg", link: "https://chat.whatsapp.com/EkdjwNPuJTq9bAI3LgQohy" },
            { name: "Networking & Cybersecurity", img: "networking.jpg", link: "https://chat.whatsapp.com/IoMvBAQkl1gEwLD485ZGv9" },
            { name: "Web Development", img: "web-dev.jpg", link: "https://chat.whatsapp.com/B5jWJEyuYLMEcxjpdF7FBm" },
            { name: "UI/UX Design", img: "uiux.jpg", link: "https://chat.whatsapp.com/EazND8WgmMeGilGHBeFRtd" },
            { name: "Python for Data Science", img: "python-data.jpg", link: "https://chat.whatsapp.com/GwfiySFhLYl2RoS4pMy996" }
          ].map((community, index) => (
            <div key={index} className="bg-white rounded-lg shadow p-4 flex flex-col items-center text-center">
              <Image src={`/Images/${community.img}`} alt={community.name} width={64} height={64} className="rounded-full mb-2" />
              <h4 className="text-gray-800 font-semibold">{community.name}</h4>
              <a href={community.link} className="mt-2 text-sm text-white bg-blue-500 px-4 py-2 rounded hover:bg-blue-600">Join</a>
            </div>
          ))}
        </div>
      </section>

      {/* Leaders Section */}
      <section className="max-w-7xl mx-auto px-6 py-10">
        <h3 className="text-xl font-semibold text-center text-gray-800 mb-6">Club Leaders</h3>
        <div className="swiper-container">
          <div className="swiper-wrapper">
            {[
              { name: "Michael Simiyu", role: "Team Lead", img: "Team Lead.jpg" },
              { name: "Derrick Ngari", role: "Assistant Team Lead", img: "Assistant Team Lead.jpg" },
              { name: "Lilian Njeri", role: "General Secretary", img: "General Secretary.jpg" },
              { name: "Peter Kimani", role: "Treasurer", img: "Treasurer.jpg" }
            ].map((leader, index) => (
              <div key={index} className="swiper-slide text-center">
                <Image src={`/Images/${leader.img}`} alt={leader.name} width={96} height={96} className="rounded-full mx-auto mb-2" />
                <h4 className="font-semibold text-gray-800">{leader.name}</h4>
                <p className="text-sm text-gray-600">{leader.role}</p>
              </div>
            ))}
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </section>
    </div>
  );
};

export default GDSCSection;
