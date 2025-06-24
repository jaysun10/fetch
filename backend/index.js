import express from 'express';
import cors from 'cors';
import { getProfiles, getProfileById, addProfile, updateProfile, deleteProfile } from './data/profiles.js';
import { websiteSettings } from './data/websiteSettings.js';

const app = express();
const PORT = 3001;
const CORS_ORIGIN = 'http://localhost:5173';

// CORS configuration
app.use(cors({
  origin: CORS_ORIGIN,
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    timestamp: new Date().toISOString(),
    environment: 'development'
  });
});

// Get all profiles
app.get('/api/profiles', (req, res) => {
  try {
    const profiles = getProfiles();
    res.json(profiles);
  } catch (error) {
    console.error('Error fetching profiles:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Get single profile by id
app.get('/api/profiles/:id', (req, res) => {
  try {
    const profile = getProfileById(req.params.id);
    if (!profile) {
      return res.status(404).json({ error: 'Profile not found' });
    }
    res.json(profile);
  } catch (error) {
    console.error('Error fetching profile:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Add new profile
app.post('/api/profiles', (req, res) => {
  try {
    const newProfile = addProfile(req.body);
    res.status(201).json(newProfile);
  } catch (error) {
    console.error('Error creating profile:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Update profile
app.put('/api/profiles/:id', (req, res) => {
  try {
    const updatedProfile = updateProfile(req.params.id, req.body);
    if (!updatedProfile) {
      return res.status(404).json({ error: 'Profile not found' });
    }
    res.json(updatedProfile);
  } catch (error) {
    console.error('Error updating profile:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Delete profile
app.delete('/api/profiles/:id', (req, res) => {
  try {
    const deletedProfile = deleteProfile(req.params.id);
    if (!deletedProfile) {
      return res.status(404).json({ error: 'Profile not found' });
    }
    res.json({ message: 'Profile deleted successfully' });
  } catch (error) {
    console.error('Error deleting profile:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Get website settings
app.get('/api/website-settings', (req, res) => {
  try {
    res.json(websiteSettings);
  } catch (error) {
    console.error('Error fetching website settings:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Update website settings
app.put('/api/website-settings', (req, res) => {
  try {
    Object.assign(websiteSettings, req.body);
    res.json(websiteSettings);
  } catch (error) {
    console.error('Error updating website settings:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
  console.log(`📡 CORS enabled for: ${CORS_ORIGIN}`);
  console.log(`🌍 Environment: development`);
});