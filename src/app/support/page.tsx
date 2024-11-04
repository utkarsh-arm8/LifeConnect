// app/support/page.tsx
import { Users, Phone, Calendar, MessageSquare } from 'lucide-react'

export default function Support() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Support Services</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          We're here to support donors, recipients, and their families throughout their journey.
          Connect with our support services and community.
        </p>
      </div>

      {/* Support Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <SupportCard
          title="Support Groups"
          description="Join our regular support group meetings to connect with others who understand your journey."
          icon={Users}
          actionText="Find a Group"
          actionUrl="#groups"
        />
        <SupportCard
          title="Counseling Services"
          description="Access professional counseling services specialized in transplant-related support."
          icon={MessageSquare}
          actionText="Schedule Session"
          actionUrl="#counseling"
        />
        <SupportCard
          title="24/7 Helpline"
          description="Our helpline is always available for immediate support and guidance."
          icon={Phone}
          actionText="Call Now"
          actionUrl="tel:1-800-555-0000"
        />
        <SupportCard
          title="Mentorship Program"
          description="Connect with experienced mentors who can guide you through your journey."
          icon={Calendar}
          actionText="Join Program"
          actionUrl="#mentorship"
        />
      </div>

      {/* Resources Section */}
      <div className="bg-gray-50 rounded-lg p-8 mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Helpful Resources</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resources.map((resource, index) => (
            <ResourceLink key={index} {...resource} />
          ))}
        </div>
      </div>

      {/* Contact Form */}
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Get in Touch</h2>
        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
            <textarea
              name="message"
              id="message"
              rows={4}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            ></textarea>
          </div>
          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

function SupportCard({ title, description, icon: Icon, actionText, actionUrl }: {
  title: string
  description: string
  icon: any
  actionText: string
  actionUrl: string
}) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
      <div className="flex items-center mb-4">
        <Icon className="h-6 w-6 text-blue-600 mr-2" />
        <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
      </div>
      <p className="text-gray-600 mb-4">{description}</p>
      <a
        href={actionUrl}
        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-blue-600 bg-blue-50 hover:bg-blue-100"
      >
        {actionText}
      </a>
    </div>
  )
}

function ResourceLink({ title, description, url }: {
  title: string
  description: string
  url: string
}) {
  return (
    <a
      href={url}
      className="block p-6 bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
    >
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </a>
  )
}

const resources = [
  {
    title: "Donor Family Guide",
    description: "A comprehensive guide for families of organ donors.",
    url: "#donor-guide"
  },
  {
    title: "Recipient Handbook",
    description: "Essential information for transplant recipients.",
    url: "#recipient-handbook"
  },
  {
    title: "Financial Resources",
    description: "Information about financial assistance and support.",
    url: "#financial"
  },
  {
    title: "Legal Resources",
    description: "Understanding your rights and legal considerations.",
    url: "#legal"
  },
  {
    title: "Mental Health Resources",
    description: "Support for emotional and psychological well-being.",
    url: "#mental-health"
  },
  {
    title: "Recovery Guidelines",
    description: "Tips and guidelines for post-transplant recovery.",
    url: "#recovery"
  }
]