import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

const api = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json'
    }
});

api.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export const donorService = {
    register: (data) => api.post('/auth/register', { ...data, role: 'donor' }),
    login: (credentials) => api.post('/auth/login', credentials),
    updateProfile: (data) => api.put('/donor/profile', data),
    getDonationHistory: () => api.get('/donor/donations'),
    registerForCamp: (campId) => api.post(`/donor/camps/${campId}/register`)
};

export default api;