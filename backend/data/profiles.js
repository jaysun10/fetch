// This file will be used as the persistent data store
// In a production environment, you would use a proper database
let profiles = [
  {
    id: 1,
    name: "Sophia",
    age: 24,
    shortDescription: "Elegant and sophisticated companion with a warm personality",
    fullDescription: "Sophia is an intelligent and charming companion who brings elegance to every encounter. With her warm smile and engaging conversation, she creates memorable experiences. She enjoys fine dining, cultural events, and meaningful connections. Available for dinner dates, social events, and sophisticated companionship.",
    profilePhoto: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=400",
    additionalPhotos: [
      "https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/1542085/pexels-photo-1542085.jpeg?auto=compress&cs=tinysrgb&w=600"
    ],
    services: ["Dinner Dates", "Social Events", "Travel Companion"],
    location: "Manhattan",
    availability: "By Appointment",
    isPremium: true,
    contactInfo: {
      whatsapp: "+1234567890",
      telegram: "@sophia_companion",
      phone: "+1234567890"
    }
  },
  {
    id: 2,
    name: "Isabella",
    age: 26,
    shortDescription: "Vivacious and adventurous with an infectious energy",
    fullDescription: "Isabella brings excitement and joy to every moment. Her adventurous spirit and vibrant personality make her the perfect companion for those seeking memorable experiences. She loves exploring the city, trying new restaurants, and engaging in stimulating conversations. Her warm and friendly nature puts everyone at ease.",
    profilePhoto: "https://images.pexels.com/photos/1391498/pexels-photo-1391498.jpeg?auto=compress&cs=tinysrgb&w=400",
    additionalPhotos: [
      "https://images.pexels.com/photos/1484794/pexels-photo-1484794.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/1462980/pexels-photo-1462980.jpeg?auto=compress&cs=tinysrgb&w=600"
    ],
    services: ["City Tours", "Entertainment Events", "Casual Dining"],
    location: "Brooklyn",
    availability: "Flexible Schedule",
    isPremium: false,
    contactInfo: {
      whatsapp: "+1234567891",
      telegram: "@isabella_fun",
      phone: "+1234567891"
    }
  },
  {
    id: 3,
    name: "Victoria",
    age: 28,
    shortDescription: "Refined and cultured with impeccable taste",
    fullDescription: "Victoria embodies sophistication and grace. With her refined tastes and cultured background, she's the ideal companion for upscale events and intimate gatherings. Her knowledge of art, literature, and fine cuisine makes for engaging conversations. She values discretion and professionalism above all.",
    profilePhoto: "https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=400",
    additionalPhotos: [
      "https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=600"
    ],
    services: ["Corporate Events", "Art Gallery Tours", "Fine Dining"],
    location: "Upper East Side",
    availability: "Premium Bookings",
    isPremium: true,
    contactInfo: {
      whatsapp: "+1234567892",
      telegram: "@victoria_elite",
      phone: "+1234567892"
    }
  },
  {
    id: 4,
    name: "Anastasia",
    age: 23,
    shortDescription: "Charming and playful with a magnetic personality",
    fullDescription: "Anastasia's magnetic charm and playful nature create an atmosphere of fun and excitement. Her youthful exuberance combined with emotional intelligence makes her wonderful company for various occasions. She enjoys dancing, live music, and creating unforgettable memories with her companions.",
    profilePhoto: "https://images.pexels.com/photos/1845534/pexels-photo-1845534.jpeg?auto=compress&cs=tinysrgb&w=400",
    additionalPhotos: [
      "https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/1378849/pexels-photo-1378849.jpeg?auto=compress&cs=tinysrgb&w=600"
    ],
    services: ["Night Life", "Concert Events", "Weekend Getaways"],
    location: "SoHo",
    availability: "Evening Preferred",
    isPremium: false,
    contactInfo: {
      whatsapp: "+1234567893",
      telegram: "@anastasia_party",
      phone: "+1234567893"
    }
  },
  {
    id: 5,
    name: "Gabriella",
    age: 27,
    shortDescription: "Worldly and intellectual with captivating stories",
    fullDescription: "Gabriella is a well-traveled intellectual who brings fascinating perspectives to every conversation. Her worldly experiences and multilingual abilities make her an exceptional companion for international visitors and cultural enthusiasts. She has a passion for literature, philosophy, and discovering hidden gems in the city.",
    profilePhoto: "https://images.pexels.com/photos/1722198/pexels-photo-1722198.jpeg?auto=compress&cs=tinysrgb&w=400",
    additionalPhotos: [
      "https://images.pexels.com/photos/1385472/pexels-photo-1385472.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/1624496/pexels-photo-1624496.jpeg?auto=compress&cs=tinysrgb&w=600"
    ],
    services: ["Cultural Tours", "Business Dinners", "Literary Events"],
    location: "Greenwich Village",
    availability: "Advance Booking",
    isPremium: true,
    contactInfo: {
      whatsapp: "+1234567894",
      telegram: "@gabriella_culture",
      phone: "+1234567894"
    }
  },
  {
    id: 6,
    name: "Celeste",
    age: 25,
    shortDescription: "Graceful and artistic with a gentle soul",
    fullDescription: "Celeste combines artistic sensibility with natural grace, creating an aura of tranquility and beauty. Her gentle nature and creative spirit make her perfect for those seeking meaningful connections and peaceful moments. She enjoys museums, quiet cafes, and thoughtful conversations about life and art.",
    profilePhoto: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400",
    additionalPhotos: [
      "https://images.pexels.com/photos/1468379/pexels-photo-1468379.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/1264210/pexels-photo-1264210.jpeg?auto=compress&cs=tinysrgb&w=600"
    ],
    services: ["Museum Tours", "Artistic Events", "Quiet Companionship"],
    location: "Chelsea",
    availability: "Daytime Flexible",
    isPremium: false,
    contactInfo: {
      whatsapp: "+1234567895",
      telegram: "@celeste_art",
      phone: "+1234567895"
    }
  }
];

// Helper functions to manage profiles
export const getProfiles = () => profiles;

export const getProfileById = (id) => profiles.find(p => p.id === parseInt(id));

export const addProfile = (profileData) => {
  const newId = Math.max(...profiles.map(p => p.id), 0) + 1;
  const newProfile = {
    id: newId,
    ...profileData
  };
  profiles.push(newProfile);
  return newProfile;
};

export const updateProfile = (id, profileData) => {
  const index = profiles.findIndex(p => p.id === parseInt(id));
  if (index !== -1) {
    profiles[index] = { ...profiles[index], ...profileData };
    return profiles[index];
  }
  return null;
};

export const deleteProfile = (id) => {
  const index = profiles.findIndex(p => p.id === parseInt(id));
  if (index !== -1) {
    const deletedProfile = profiles[index];
    profiles.splice(index, 1);
    return deletedProfile;
  }
  return null;
};

// Export the profiles array as default for backward compatibility
export { profiles };