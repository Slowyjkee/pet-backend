import express from 'express'
import {createPet, getAllPets, getPet, getUserPets} from "../controllers/pet";
import {checkStatus, RouteProtect} from "../controllers/user";
const router = express.Router();


router.get('/getUserPets/:id',  getUserPets);

//MAIN ROUTES

router
    .route('/')
    .get(getAllPets)
    .post(RouteProtect, createPet);
router
    .route('/:id')
    .get(getPet);
module.exports = router;
