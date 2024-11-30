import Donor from "../models/donor.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";

export const DonorController = {
    register: asyncHandler(async (req, res) => {
        const { name, email, password, bloodGroup, phone, address } = req.body;

        // Validate if all required fields are present
        if (!name || !email || !password || !bloodGroup || !phone || !address) {
            throw new ApiError(400, "All fields are required");
        }

        // Check if user already exists
        const existingDonor = await Donor.findOne({ email });
        if (existingDonor) {
            throw new ApiError(409, "Donor with email already exists");
        }

        // Create new donor
        const donor = await Donor.create({
            name,
            email,
            password,
            bloodGroup,
            phone,
            address
        });

        // Remove password from response
        const createdDonor = await Donor.findById(donor._id).select("-password");

        return res.status(201).json(
            new ApiResponse(201, createdDonor, "Donor registered successfully")
        );
    }),

    getProfile: asyncHandler(async (req, res) => {
        const donor = await Donor.findById(req.donor._id).select("-password");
        return res.status(200).json(
            new ApiResponse(200, donor, "Donor profile fetched successfully")
        );
    }),

    updateProfile: asyncHandler(async (req, res) => {
        const { name, phone, address } = req.body;
        const donor = await Donor.findByIdAndUpdate(
            req.donor._id,
            {
                $set: {
                    name,
                    phone,
                    address
                }
            },
            { new: true }
        ).select("-password");

        return res.status(200).json(
            new ApiResponse(200, donor, "Donor profile updated successfully")
        );
    }),

    getNearbyCamps: asyncHandler(async (req, res) => {
        // This would typically involve geospatial queries
        // For now, returning a placeholder response
        return res.status(200).json(
            new ApiResponse(200, [], "Nearby camps fetched successfully")
        );
    }),

    registerForCamp: asyncHandler(async (req, res) => {
        const { campId } = req.body;

        if (!campId) {
            throw new ApiError(400, "Camp ID is required");
        }

        // Add logic to register donor for camp
        // This would typically involve updating both donor and camp documents

        return res.status(200).json(
            new ApiResponse(200, {}, "Successfully registered for camp")
        );
    })
};