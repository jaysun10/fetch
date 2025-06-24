import express from 'express';
import cors from 'cors';
import { profiles } from './data/profiles.js';
import { websiteSettings } from './data/websiteSettings.js';

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

// Get all profiles
app.get('/api/profiles', (req, res) => {
  res.json(profiles);
});

// Get single profile by id
app.get('/api/profiles/:id', (req, res) => {
  const profile = profiles.find(p => p.id === parseInt(req.params.id));
  if (!profile) {
    return res.status(404).json({ error: 'Profile not found' });
  }
  res.json(profile);
});

// Add new profile
app.post('/api/profiles', (req, res) => {
  const newProfile = {
    id: Math.max(...profiles.map(p => p.id)) + 1,
    ...req.body
  };
  profiles.push(newProfile);
  res.status(201).json(newProfile);
});

// Update profile
app.put('/api/profiles/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const profileIndex = profiles.findIndex(p => p.id === id);
  
  if (profileIndex === -1) {
    return res.status(404).json({ error: 'Profile not found' });
  }
  
  profiles[profileIndex] = { ...profiles[profileIndex], ...req.body };
  res.json(profiles[profileIndex]);
});

// Delete profile
app.delete('/api/profiles/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const profileIndex = profiles.findIndex(p => p.id === id);
  
  if (profileIndex === -1) {
    return res.status(404).json({ error: 'Profile not found' });
  }
  
  profiles.splice(profileIndex, 1);
  res.json({ message: 'Profile deleted successfully' });
});

// Get website settings
app.get('/api/website-settings', (req, res) => {
  res.json(websiteSettings);
});

// Update website settings
app.put('/api/website-settings', (req, res) => {
  Object.assign(websiteSettings, req.body);
  res.json(websiteSettings);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});