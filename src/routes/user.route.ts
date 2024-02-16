import { Router } from "express";

export const router = Router();

import { User } from "../models/user.interface";
import { users } from "../data/users";


router.get('/', (req, res) => {
    console.log(users);
    res.json(users);
});

router.get('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const user = users.find(user => user.id === id);
    res.json(user);
});

router.post('/', (req, res) => {
    const user: User = req.body;
    const newID = users.reduce((max, user) => Math.max(max, user.id), 0) + 1;
    users.push({ ...user, id: newID });
    res.json({ ...user, id: newID });
});

router.delete('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = users.findIndex(user => user.id === id);
    if (index !== -1) {
        users.splice(index, 1);
        res.json({ message: 'User deleted successfully' });
    } else {
        res.status(404).json({ message: 'User not found' });
    }
});


router.patch('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const user = users.find(user => user.id === id);
    if (user) {
        Object.assign(user, req.body);
        res.status(200).json(user);
    } else {
        res.status(404).json({ message: 'User not found' });
    }
});