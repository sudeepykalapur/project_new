import api from './api';

export const requirementService = {
    async createRequirement(requirementData) {
        const response = await api.post('/clinic/requirements', requirementData);
        return response.data;
    },

    async getRequirements() {
        const response = await api.get('/clinic/requirements');
        return response.data;
    },

    async updateRequirement(id, requirementData) {
        const response = await api.put(`/clinic/requirements/${id}`, requirementData);
        return response.data;
    },
};