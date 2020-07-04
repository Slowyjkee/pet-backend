import {catchAsync} from "./error";
import Pet from "../models/pet";

export const createPet  = catchAsync(async (req, res, next) => {
    const newPet = await Pet.create({
        name:req.body.name,
        type:req.body.type,
        gender:req.body.gender,
        ages:req.body.ages,
        avatar:'avatar.png',
        background:'background.png',
        ownerId:req.user._id
    });
    res.status(200).json(newPet)
});


export const getUserPets  = catchAsync(async (req, res, next) => {
    const id = req.params.id;
    const pets = await Pet.find({ownerId: id});
    res.status(200).json({
        status:'success',
        data:pets
    })
});

export const getAllPets  = catchAsync(async (req, res, next) => {
    const pets = await Pet.find();
    res.status(200).json({
        status:'success',
        data:pets
    })
});

export const getPet  = catchAsync(async (req, res, next) => {
    const {id} = req.params;
    const pet = await Pet.findById(id);
    res.status(200).json(pet)
});
