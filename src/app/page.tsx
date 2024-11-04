import { Heart, Users, BookOpen, Calendar } from 'lucide-react'

export default function Home() {
  return (
    <div className="space-y-32">
      
      {/* Hero Section */}
      <section className="relative bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32">
            {/* Flex container for text and image */}
            <div className="lg:flex lg:items-center lg:justify-between">
              
              {/* Left Text Section */}
              <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 lg:mt-16 lg:px-8 xl:mt-28 lg:w-1/2">
                <div className="sm:text-center lg:text-left">
                  <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                    <span className="block">Save Lives Through</span>
                    <span className="block text-blue-600">Organ Donation</span>
                  </h1>
                  <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                    Join thousands of others in making a difference. Register as an organ donor today
                    and help save lives in your community.
                  </p>
                  <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                    <div className="rounded-md shadow">
                      <a
                        href="/register"
                        className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10"
                      >
                        Register Now
                      </a>
                    </div>
                    <div className="mt-3 sm:mt-0 sm:ml-3">
                      <a
                        href="/education"
                        className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-blue-100 hover:bg-blue-200 md:py-4 md:text-lg md:px-10"
                      >
                        Learn More
                      </a>
                    </div>
                  </div>
                </div>
              </main>
              
              {/* Right Image Section */}
              <div className="mt-10 lg:mt-0 lg:w-1/2 flex justify-center lg:justify-end">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4S1K6v_HdGl4oaNOnLMGfQJGFqiZWiEYA5A&s"  
                  alt="Organ Donation"
                  className="rounded-lg shadow-lg max-w-xs lg:max-w-md"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">
              Our Impact
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Making a difference together
            </p>
          </div>

          <div className="mt-10">
            <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              <FeatureCard
                icon={Heart}
                title="Become a Donor"
                description="Register to become an organ donor and help save lives in your community."
              />
              <FeatureCard
                icon={Users}
                title="Support Network"
                description="Connect with donor families and recipients through our support groups."
              />
              <FeatureCard
                icon={BookOpen}
                title="Education"
                description="Learn about organ donation through our comprehensive resources."
              />
              <FeatureCard
                icon={Calendar}
                title="Events"
                description="Join our awareness events and help spread the message."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="bg-blue-600">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              Making a Real Impact
            </h2>
          </div>
          <dl className="mt-10 text-center sm:max-w-3xl sm:mx-auto sm:grid sm:grid-cols-3 sm:gap-8">
            <StatisticCard number="100K+" label="Registered Donors" />
            <StatisticCard number="50K+" label="Lives Saved" />
            <StatisticCard number="200+" label="Partner Hospitals" />
          </dl>
        </div>
      </section>
    </div>
  )
}

/* FeatureCard component */
function FeatureCard({ icon: Icon, title, description }: {
  icon: any;
  title: string;
  description: string;
}) {
  return (
    <div className="relative">
      <dt>
        <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
          <Icon className="h-6 w-6" aria-hidden="true" />
        </div>
        <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{title}</p>
      </dt>
      <dd className="mt-2 ml-16 text-base text-gray-500">{description}</dd>
    </div>
  )
}

/* StatisticCard component */
function StatisticCard({ number, label }: { number: string; label: string }) {
  return (
    <div className="flex flex-col">
      <dt className="order-2 mt-2 text-lg leading-6 font-medium text-blue-200">
        {label}
      </dt>
      <dd className="order-1 text-5xl font-extrabold text-white">
        {number}
      </dd>
    </div>
  )
}
