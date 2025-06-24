// API Configuration
const API_BASE_URL = 'http://localhost:3001';

export const API_ENDPOINTS = {
  PROFILES: `${API_BASE_URL}/api/profiles`,
  WEBSITE_SETTINGS: `${API_BASE_URL}/api/website-settings`,
} as const;

export const APP_CONFIG = {
  NAME: 'Midnight Queens',
  TAGLINE: 'Premium Adult Services',
  CONTACT: {
    WHATSAPP: '+1234567890',
    TELEGRAM: '@midnightqueens',
    PHONE: '+1234567890',
  }
} as const;

// API Helper Functions
export const apiRequest = async (url: string, options?: RequestInit) => {
  try {
    const response = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        ...options?.headers,
      },
      ...options,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('API request failed:', error);
    throw error;
  }
};

export default API_BASE_URL;