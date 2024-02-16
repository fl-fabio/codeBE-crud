import express from 'express';
import { User } from './models/user.interface';
import { users } from './data/users';

import {router as UserApi} from './routes/user.route';

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    res.json({ message: "Server is running!" });
});

app.use("/users", UserApi);

app.listen(3000, () => {
    console.log('Server started on port 3000');
})

