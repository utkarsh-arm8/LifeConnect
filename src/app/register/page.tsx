// app/register/page.tsx
'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Loader2 } from 'lucide-react'

const registrationSchema = z.object({
  firstName: z.string().min(2, 'First name is required'),
  lastName: z.string().min(2, 'Last name is required'),
  email: z.string().email('Invalid email address'),
  dateOfBirth: z.string().min(1, 'Date of birth is required'),
  phone: z.string().min(10, 'Valid phone number is required'),
  address: z.string().min(5, 'Address is required'),
  city: z.string().min(2, 'City is required'),
  state: z.string().min(2, 'State is required'),
  zipCode: z.string().min(5, 'Valid ZIP code is required'),
  emergencyContactName: z.string().min(2, 'Emergency contact name is required'),
  emergencyContactPhone: z.string().min(10, 'Valid emergency contact phone is required'),
  organPreferences: z.array(z.string()).min(1, 'Please select at least one organ'),
  medicalHistory: z.string().optional(),
  consent: z.boolean().refine((val) => val === true, {
    message: 'You must consent to organ donation',
  }),
})

type RegistrationForm = z.infer<typeof registrationSchema>

const organOptions = [
  { value: 'heart', label: 'Heart' },
  { value: 'lungs', label: 'Lungs' },
  { value: 'liver', label: 'Liver' },
  { value: 'kidneys', label: 'Kidneys' },
  { value: 'pancreas', label: 'Pancreas' },
  { value: 'corneas', label: 'Corneas' },
  { value: 'tissue', label: 'Tissue' },
]

export default function Register() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<RegistrationForm>({
    resolver: zodResolver(registrationSchema),
    defaultValues: {
      organPreferences: [],
    },
  })

  const onSubmit = async (data: RegistrationForm) => {
    setIsSubmitting(true)
    try {
      // Here you would typically send the data to your backend
      await new Promise(resolve => setTimeout(resolve, 1000)) // Simulated API call
      setIsSuccess(true)
    } catch (error) {
      console.error('Registration failed:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSuccess) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-green-50 p-4 rounded-md">
          <h2 className="text-2xl font-bold text-green-800">Registration Successful!</h2>
          <p className="mt-2 text-green-700">
            Thank you for registering as an organ donor. You will receive a confirmation email shortly.
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white shadow-sm rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <h1 className="text-3xl font-bold text-gray-900">Register as an Organ Donor</h1>
            <p className="mt-2 text-gray-600">
              Fill out the form below to register your intent to become an organ donor.
            </p>

            <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-6">
              {/* Personal Information */}
              <div className="bg-gray-50 p-4 rounded-md">
                <h2 className="text-xl font-semibold text-gray-900">Personal Information</h2>
                <div className="mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                      First Name
                    </label>
                    <input
                      type="text"
                      {...register('firstName')}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    />
                    {errors.firstName && (
                      <p className="mt-1 text-sm text-red-600">{errors.firstName.message}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                      Last Name
                    </label>
                    <input
                      type="text"
                      {...register('lastName')}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    />
                    {errors.lastName && (
                      <p className="mt-1 text-sm text-red-600">{errors.lastName.message}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                      Email Address
                    </label>
                    <input
                      type="email"
                      {...register('email')}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      {...register('phone')}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    />
                    {errors.phone && (
                      <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="dateOfBirth" className="block text-sm font-medium text-gray-700">
                      Date of Birth
                    </label>
                    <input
                      type="date"
                      {...register('dateOfBirth')}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    />
                    {errors.dateOfBirth && (
                      <p className="mt-1 text-sm text-red-600">{errors.dateOfBirth.message}</p>
                    )}
                  </div>
                </div>
              </div>

              {/* Address Information */}
              <div className="bg-gray-50 p-4 rounded-md">
                <h2 className="text-xl font-semibold text-gray-900">Address</h2>
                <div className="mt-4 space-y-4">
                  <div>
                    <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                      Street Address
                    </label>
                    <input
                      type="text"
                      {...register('address')}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    />
                    {errors.address && (
                      <p className="mt-1 text-sm text-red-600">{errors.address.message}</p>
                    )}
                  </div>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                    <div>
                      <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                        City
                      </label>
                      <input
                        type="text"
                        {...register('city')}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      />
                      {errors.city && (
                        <p className="mt-1 text-sm text-red-600">{errors.city.message}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="state" className="block text-sm font-medium text-gray-700">
                        State
                      </label>
                      <input
                        type="text"
                        {...register('state')}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      />
                      {errors.state && (
                        <p className="mt-1 text-sm text-red-600">{errors.state.message}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700">
                        ZIP Code
                      </label>
                      <input
                        type="text"
                        {...register('zipCode')}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      />
                      {errors.zipCode && (
                        <p className="mt-1 text-sm text-red-600">{errors.zipCode.message}</p>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Emergency Contact */}
              <div className="bg-gray-50 p-4 rounded-md">
                <h2 className="text-xl font-semibold text-gray-900">Emergency Contact</h2>
                <div className="mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="emergencyContactName" className="block text-sm font-medium text-gray-700">
                      Contact Name
                    </label>
                    <input
                      type="text"
                      {...register('emergencyContactName')}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    />
                    {errors.emergencyContactName && (
                      <p className="mt-1 text-sm text-red-600">{errors.emergencyContactName.message}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="emergencyContactPhone" className="block text-sm font-medium text-gray-700">
                      Contact Phone
                    </label>
                    <input
                      type="tel"
                      {...register('emergencyContactPhone')}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    />
                    {errors.emergencyContactPhone && (
                      <p className="mt-1 text-sm text-red-600">{errors.emergencyContactPhone.message}</p>
                    )}
                  </div>
                </div>
              </div>

              {/* Organ Preferences */}
              <div className="bg-gray-50 p-4 rounded-md">
                <h2 className="text-xl font-semibold text-gray-900">Organ Preferences</h2>
                <p className="mt-1 text-sm text-gray-500">
                  Select which organs you would like to donate.
                </p>
                <div className="mt-4 space-y-4">
                  {organOptions.map((organ) => (
                    <div key={organ.value} className="flex items-center">
                      <input
                        type="checkbox"
                        {...register('organPreferences')}
                        value={organ.value}
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      />
                      <label htmlFor={organ.value} className="ml-3 block text-sm font-medium text-gray-700">
                        {organ.label}
                      </label>
                    </div>
                  ))}
                  {errors.organPreferences && (
                    <p className="mt-1 text-sm text-red-600">{errors.organPreferences.message}</p>
                  )}
                </div>
              </div>

              {/* Medical History */}
              <div className="bg-gray-50 p-4 rounded-md">
                <h2 className="text-xl font-semibold text-gray-900">Medical History</h2>
                <p className="mt-1 text-sm text-gray-500">
                  Optional: Please provide any relevant medical history.
                </p>
                <div className="mt-4">
                  <textarea
                    {...register('medicalHistory')}
                    rows={4}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
              </div>

              {/* Consent */}
              <div className="bg-gray-50 p-4 rounded-md">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      type="checkbox"
                      {...register('consent')}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="consent" className="font-medium text-gray-700">
                      I consent to organ donation
                    </label>
                    <p className="text-gray-500">
                      I understand and agree to the terms of organ donation as specified in the donor registry.
                    </p>
                    {errors.consent && (
                      <p className="mt-1 text-sm text-red-600">{errors.consent.message}</p>
                    )}
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="flex justify-end">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Registering...
                    </>
                  ) : (
                    'Complete Registration'
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}