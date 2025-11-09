# JoruriDoctor Server

Backend server for JoruriDoctor, a healthcare platform built with Node.js and Express.js.

## Overview
This server provides the API endpoints for the JoruriDoctor application, handling user authentication, doctor appointments, medical records, and other healthcare-related functionalities.

## Technologies Used
- Node.js
- Express.js
- MongoDB
- JWT Authentication
- Bcrypt
- Mongoose

## Project Structure

```
joruriDoctor-server/
├── config/             # Configuration files
│   ├── db.config.js
│   └── auth.config.js
├── controllers/        # Request handlers
│   ├── auth.controller.js
│   ├── doctor.controller.js
│   └── patient.controller.js
├── middlewares/        # Custom middleware
│   ├── auth.middleware.js
│   └── validate.middleware.js
├── models/            # Database models
│   ├── user.model.js
│   ├── doctor.model.js
│   └── appointment.model.js
├── routes/            # API routes
│   ├── auth.routes.js
│   ├── doctor.routes.js
│   └── patient.routes.js
├── services/          # Business logic
│   ├── auth.service.js
│   └── appointment.service.js
├── utils/             # Helper functions
│   ├── logger.js
│   └── validators.js
├── .env               # Environment variables
├── .gitignore
├── package.json
└── README.md
```

## Design Patterns
- MVC (Model-View-Controller)
- Repository Pattern
- Singleton Pattern (for Database connection)
- Middleware Pattern
- Factory Pattern (for creating services)

## Getting Started
1. Clone the repository
2. Install dependencies: `npm install`
3. Set up environment variables
4. Run the server: `npm start`

## Contributing
Please read CONTRIBUTING.md for details on our code of conduct and the process for submitting pull requests.

## License
This project is licensed under the MIT License - see the LICENSE.md file for details.
