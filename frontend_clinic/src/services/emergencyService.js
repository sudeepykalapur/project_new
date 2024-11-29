import api from './api';

export const emergencyService = {
    createEmergencyRequest: async (data) => {
        try {
            const response = await api.post('/emergency/request', data);
            return response.data;
        } catch (error) {
            throw new Error(error.response?.data?.message || 'Failed to create emergency request');
        }
    },

    getEmergencyRequests: async () => {
        try {
            const response = await api.get('/emergency/requests');
            return response.data;
        } catch (error) {
            throw new Error(error.response?.data?.message || 'Failed to fetch emergency requests');
        }
    },

    notifyDonors: async (data) => {
        try {
            const response = await api.post('/emergency/notify-donors', data);
            return response.data;
        } catch (error) {
            throw new Error(error.response?.data?.message || 'Failed to notify donors');
        }
    }
};
