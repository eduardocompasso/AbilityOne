import { Link } from 'react-router-dom';

export const HeroSection = () => (
  <section className="py-8" aria-label="AbilityOne Hero Section">
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row items-center md:items-stretch gap-8">
        <div className="flex-1 min-w-[300px] flex items-center justify-center">
          <img 
            src="/src/assets/images/heroBG.jpeg" 
            alt="Elderly woman working with fabric, representing skilled people with disabilities" 
            className="object-cover w-full h-72 md:h-full rounded-lg shadow-md" 
          />
        </div>
        <div className="flex-1 flex flex-col justify-center items-start md:pl-12">
          <p className="text-xl md:text-2xl font-bold text-primary mb-8 max-w-xl">
            The skills and capabilities of people who are blind, low vision, visually impaired, or have significant disabilities - to create, innovate, and solve problems - are at the heart of American manufacturing and services.
          </p>
          <div className="max-w-xl w-full flex justify-end">
            <Link
              to="/ability-one-program"
              className="inline-block bg-primary text-white font-bold py-3 px-8 rounded-md hover:bg-primary-light transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              aria-label="Learn more about the AbilityOne Program"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </div>
  </section>
) 