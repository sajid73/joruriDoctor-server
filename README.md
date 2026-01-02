# JoruriDoctor Server

Backend server for `JoruriDoctor`, a healthcare platform built with Node.js and Express.js.

## Overview
This server provides the API endpoints for the JoruriDoctor application, handling user authentication, doctor appointments, medical records, and other healthcare-related functionalities.

## Technologies Used
- Node.js
- Express.js
- Nodemon
- JWT
- Bcryptjs
- MongoDB
- Mongoose

## Project Structure

```
joruriDoctor-server/
├── controllers/        # Request handlers
│   ├── admin.controller.js
│   ├── appointment.controller.js
│   ├── auth.controller.js
│   ├── doctor.controller.js
│   ├── patient.controller.js
│   └── user.controller.js
├── models/            # Database models
│   ├── appointmentModel.js
│   ├── doctorModel.js
│   ├── patientModel.js
│   └── userModel.js
├── routes/            # API routes
│   ├── admin.routes.js
│   ├── appointment.routes.js
│   ├── doctor.routes.js
│   ├── patient.routes.js
│   └── user.routes.js
├── utils/          # Business logic
│   └── authUtil.js
├── .gitignore
├── app.js
├── config.env               # Environment variables
├── package.json
├── README.md
├── server.js             # Configuration file
```

## Getting Started
1. Clone the repository
2. Install dependencies: `npm install`
3. Set up environment variables
4. Run the server: `npm start`