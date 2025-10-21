import { useState } from 'react';
import { motion } from 'framer-motion';

export default function App() {
  const [page, setPage] = useState('home');

  const projects = [
    {
      title: 'AI Chat Assistant',
      desc: 'A chatbot built using GPT-4 API that helps answer user queries in real time.',
      link: '#'
    },
    {
      title: 'Weather App',
      desc: 'A sleek web app that shows live weather updates using OpenWeather API.',
      link: '#'
    },
    {
      title: 'Task Manager',
      desc: 'A productivity app to manage daily tasks with authentication and analytics.',
      link: '#'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Navbar */}
      <nav className="flex justify-between items-center p-6 shadow bg-white sticky top-0 z-10">
        <h1 className="text-2xl font-bold text-blue-600">My Portfolio</h1>
        <div className="space-x-4">
          <button onClick={() => setPage('home')} className="px-3 py-1">Home</button>
          <button onClick={() => setPage('projects')} className="px-3 py-1">Projects</button>
          <button onClick={() => setPage('contact')} className="px-3 py-1">Contact</button>
        </div>
      </nav>

      {/* Content */}
      <main className="p-10 max-w-4xl mx-auto">
        {page === 'home' && (
          <section className="text-center space-y-4">
            <h2 className="text-4xl font-semibold">Hi, I'm Jenil 👋</h2>
            <p className="text-lg text-gray-700">
              I’m a passionate developer building creative and efficient web solutions.
            </p>
            <button onClick={() => setPage('projects')} className="mt-4 px-5 py-2 bg-blue-600 text-white rounded">View My Projects</button>
          </section>
        )}

        {page === 'projects' && (
          <section className="space-y-8">
            <h2 className="text-3xl font-semibold text-center">Projects</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {projects.map((proj, idx) => (
                <div key={idx} className="p-4 bg-white rounded shadow">
                  <h3 className="text-xl font-bold text-blue-600">{proj.title}</h3>
                  <p className="text-gray-700 mt-2">{proj.desc}</p>
                  <a href={proj.link} className="text-blue-500 underline text-sm mt-2 inline-block">View Project</a>
                </div>
              ))}
            </div>
          </section>
        )}

        {page === 'contact' && (
          <section className="text-center space-y-4 max-w-md mx-auto">
            <h2 className="text-3xl font-semibold">Contact Me</h2>
            <p className="text-gray-700">Have a project idea or want to collaborate? Let's connect!</p>
            <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert('Form submitted — later connect to backend'); }}>
              <input type="text" placeholder="Your Name" className="w-full p-2 border rounded" required />
              <input type="email" placeholder="Your Email" className="w-full p-2 border rounded" required />
              <textarea placeholder="Your Message" className="w-full p-2 border rounded h-24" required></textarea>
              <button type="submit" className="w-full px-4 py-2 bg-blue-600 text-white rounded">Send Message</button>
            </form>
          </section>
        )}
      </main>

      <footer className="text-center py-6 text-gray-500">
        © {new Date().getFullYear()} Jenil Katudia. All rights reserved.
      </footer>
    </div>
  );
}
