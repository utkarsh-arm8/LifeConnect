// app/education/page.tsx
import { BookOpen, Brain, Heart, Users } from 'lucide-react'

export default function Education() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Learn About Organ Donation</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Understanding organ donation is the first step towards making an informed decision.
          Explore our educational resources to learn more.
        </p>
      </div>

      {/* Educational Resources */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        <ResourceCard
          icon={BookOpen}
          title="Basic Information"
          description="Learn the fundamentals of organ donation and how the process works."
          topics={[
            "What is organ donation?",
            "Types of donation",
            "The donation process",
            "Common myths and facts"
          ]}
        />
        <ResourceCard
          icon={Brain}
          title="Medical Aspects"
          description="Understand the medical considerations and requirements for organ donation."
          topics={[
            "Medical eligibility",
            "Organ matching process",
            "Recovery and transplantation",
            "Success rates and outcomes"
          ]}
        />
        <ResourceCard
          icon={Heart}
          title="Impact Stories"
          description="Read real stories from donors, recipients, and their families."
          topics={[
            "Donor testimonials",
            "Recipient success stories",
            "Family experiences",
            "Healthcare perspectives"
          ]}
        />
      </div>

      {/* FAQ Section */}
      <div className="bg-gray-50 rounded-lg p-8 mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <FAQ key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center bg-blue-50 rounded-lg p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to Make a Difference?</h2>
        <p className="text-gray-600 mb-6">
          Join thousands of others who have already registered as organ donors.
        </p>
        <a
          href="/register"
          className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
        >
          Register Now
        </a>
      </div>
    </div>
  )
}

function ResourceCard({ icon: Icon, title, description, topics }: {
  icon: any
  title: string
  description: string
  topics: string[]
}) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
      <div className="flex items-center mb-4">
        <Icon className="h-6 w-6 text-blue-600 mr-2" />
        <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
      </div>
      <p className="text-gray-600 mb-4">{description}</p>
      <ul className="space-y-2">
        {topics.map((topic, index) => (
          <li key={index} className="flex items-center text-gray-700">
            <span className="h-1.5 w-1.5 bg-blue-600 rounded-full mr-2"></span>
            {topic}
          </li>
        ))}
      </ul>
    </div>
  )
}

function FAQ({ question, answer }: { question: string; answer: string }) {
  return (
    <div className="border-b border-gray-200 pb-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{question}</h3>
      <p className="text-gray-600">{answer}</p>
    </div>
  )
}

const faqs = [
  {
    question: "Who can become an organ donor?",
    answer: "Almost anyone can be a potential donor regardless of age, race, or medical history. The medical suitability for organ donation is determined at the time of death."
  },
  {
    question: "Does my religion support organ donation?",
    answer: "Most major religions support organ donation as an act of charity and generosity. Consult with your religious advisor for specific guidance."
  },
  {
    question: "Will organ donation affect my funeral arrangements?",
    answer: "No, organ donation does not affect funeral arrangements. Open-casket funerals are still possible, and there are no additional costs to the donor's family."
  },
  {
    question: "Can I choose which organs to donate?",
    answer: "Yes, you can specify which organs you wish to donate during the registration process. You can also update your preferences at any time."
  }
]