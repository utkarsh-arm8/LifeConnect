// lib/mockData.ts
export const mockEvents = [
    {
      id: '1',
      title: 'Annual Donor Recognition Ceremony',
      description: 'Join us for our annual ceremony honoring organ donors and their families.',
      date: '2024-09-15',
      time: '2:00 PM - 5:00 PM',
      location: 'City Convention Center',
      capacity: 500,
      isFeatured: true,
    },
    {
      id: '2',
      title: 'Organ Donation Awareness Workshop',
      description: 'Learn about the importance of organ donation and how to register.',
      date: '2024-10-01',
      time: '1:00 PM - 3:00 PM',
      location: 'Community Center',
      capacity: 100,
      isFeatured: false,
    },
  ]
  
  export const mockResources = [
    {
      id: '1',
      title: 'Donor Family Guide',
      description: 'A comprehensive guide for families of organ donors.',
      url: '/resources/donor-guide',
      category: 'Guides',
    },
    {
      id: '2',
      title: 'Recipient Handbook',
      description: 'Essential information for transplant recipients.',
      url: '/resources/recipient-handbook',
      category: 'Guides',
    },
  ]
  
  // lib/api.ts
  const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api'
  
  export async function fetchEvents() {
    // For development, return mock data
    if (process.env.NODE_ENV === 'development') {
      return mockEvents
    }
    
    const response = await fetch(`${API_BASE_URL}/events`)
    if (!response.ok) {
      throw new Error('Failed to fetch events')
    }
    return response.json()
  }
  
  export async function fetchResources() {
    // For development, return mock data
    if (process.env.NODE_ENV === 'development') {
      return mockResources
    }
  
    const response = await fetch(`${API_BASE_URL}/resources`)
    if (!response.ok) {
      throw new Error('Failed to fetch resources')
    }
    return response.json()
  }
  
  export async function registerUser(userData: any) {
    const response = await fetch(`${API_BASE_URL}/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    })
    
    if (!response.ok) {
      throw new Error('Registration failed')
    }
    return response.json()
  }
  
  export async function sendSupportMessage(messageData: any) {
    const response = await fetch(`${API_BASE_URL}/support`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(messageData),
    })
    
    if (!response.ok) {
      throw new Error('Failed to send message')
    }
    return response.json()
  }