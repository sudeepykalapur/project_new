import Requirement from '../models/Requirement.js';

export const createRequirement = async (req, res) => {
    try {
        const requirement = new Requirement({
            ...req.body,
            clinic: req.user._id
        });
        await requirement.save();
        res.status(201).json(requirement);
    } catch (error) {
        res.status(500).json({ message: 'Error creating requirement', error: error.message });
    }
};

export const getRequirements = async (req, res) => {
    try {
        const requirements = await Requirement.find({ clinic: req.user._id });
        res.json(requirements);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching requirements', error: error.message });
    }
};

export const updateRequirement = async (req, res) => {
    try {
        const requirement = await Requirement.findOneAndUpdate(
            { _id: req.params.id, clinic: req.user._id },
            req.body,
            { new: true }
        );
        if (!requirement) {
            return res.status(404).json({ message: 'Requirement not found' });
        }
        res.json(requirement);
    } catch (error) {
        res.status(500).json({ message: 'Error updating requirement', error: error.message });
    }
};