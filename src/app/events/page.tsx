
import { Calendar, MapPin, Clock, Users } from 'lucide-react'

export default function Events() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Upcoming Events</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Join us at our upcoming events to learn more about organ donation,
          connect with our community, and help spread awareness.
        </p>
      </div>

      {/* Featured Event */}
      <div className="bg-blue-50 rounded-lg p-8 mb-16">
        <div className="max-w-3xl mx-auto">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 mb-4">
            Featured Event
          </span>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Annual Donor Recognition Ceremony</h2>
          <p className="text-gray-600 mb-6">
            Join us for our annual ceremony honoring organ donors and their families.
            The event will feature inspiring stories, memorial tributes, and a candle-lighting ceremony.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <EventDetail icon={Calendar} text="November 25, 2024" />
            <EventDetail icon={Clock} text="2:00 PM - 5:00 PM" />
            <EventDetail icon={MapPin} text="City Convention Center" />
            <EventDetail icon={Users} text="Expected: 500+ Attendees" />
          </div>
          <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700">
            Register for Event
          </button>
        </div>
      </div>

      {/* Upcoming Events Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {upcomingEvents.map((event, index) => (
          <EventCard key={index} {...event} />
        ))}
      </div>

      {/* Host an Event Section */}
      <div className="bg-gray-50 rounded-lg p-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Host an Event</h2>
          <p className="text-gray-600 mb-8">
            Interested in organizing an awareness event in your community?
            We'll provide you with resources and support to make it successful.
          </p>
          <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700">
            Host an Event
          </button>
        </div>
      </div>
    </div>
  );
}

// EventDetail component to render individual event details with icon and text
function EventDetail({ icon: Icon, text }: { icon: React.ComponentType; text: string }) {
  return (
    <div className="flex items-center">
      <Icon className="w-6 h-6 text-blue-600 mr-2" />
      <span className="text-gray-700">{text}</span>
    </div>
  );
}

// EventCard component to render a card for each upcoming event
function EventCard({ title, date, location, description }: { title: string; date: string; location: string; description: string }) {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6">
      <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="flex items-center mb-2">
        <Calendar className="w-5 h-5 text-blue-600 mr-2" />
        <span className="text-gray-700">{date}</span>
      </div>
      <div className="flex items-center">
        <MapPin className="w-5 h-5 text-blue-600 mr-2" />
        <span className="text-gray-700">{location}</span>
      </div>
    </div>
  );
}

// Sample data for upcoming events
const upcomingEvents = [
  {
    title: 'Community Organ Donation Walkathon',
    date: 'October 12, 2024',
    location: 'Downtown Park',
    description: 'Join us for a walkathon to raise awareness and support organ donation efforts in the community.',
  },
  {
    title: 'Organ Donation Educational Seminar',
    date: 'November 5, 2024',
    location: 'Health Center Auditorium',
    description: 'An informative seminar on the process, benefits, and myths surrounding organ donation.',
  },
  {
    title: 'Organ Donor Registration Drive',
    date: 'December 1, 2024',
    location: 'City Mall',
    description: 'A registration drive to encourage people to sign up as organ donors and help save lives.',
  },
];

