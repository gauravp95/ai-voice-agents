# AI Voice Agent

This project is a Node.js application that provides an API to initiate voice calls to customers using the Vapi API. The application is built with Express.js and utilizes the Vapi SDK to interact with the Vapi service.

## Features

- **Outbound Voice Calls:** Initiate voice calls to any phone number.
- **Vapi Integration:** Seamlessly integrates with the Vapi API to manage call creation and voice assistant interactions.
- **Secure and Robust:** Includes security features like Helmet and rate limiting to protect the API.
- **Easy to Configure:** Simple configuration through environment variables.

## Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/en/) (v14 or later)
- [npm](https://www.npmjs.com/)

## Getting Started

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/ai-voice-agent.git
   cd ai-voice-agent
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Set up environment variables:**

   Create a `.env` file in the root of the project and add the following variables:

   ```env
   VAPI_API_KEY=your_vapi_api_key
   VAPI_PHONE_NUMBER_ID=your_vapi_phone_number_id
   VAPI_ASSISTANT_ID=your_vapi_assistant_id
   ```

   - `VAPI_API_KEY`: Your Vapi API key.
   - `VAPI_PHONE_NUMBER_ID`: The ID of the phone number to use for the outbound call.
   - `VAPI_ASSISTANT_ID`: The ID of the Vapi assistant to use for the call.

4. **Start the server:**

   ```bash
   npm start
   ```

   The server will start on port 5000 by default.

## API Endpoints

### `POST /api/v1/voice-call`

This endpoint initiates a voice call to a customer.

**Request Body:**

```json
{
  "customerNumber": "+1234567890"
}
```

**Response:**

- **201 Created:** If the call is created successfully.
- **400 Bad Request:** If the `customerNumber` is not provided.
- **500 Internal Server Error:** If there is an issue with the Vapi API or the server.

## Project Structure

```
.
├── src
│   ├── app.js
│   ├── server.js
│   ├── config
│   │   └── index.js
│   ├── controllers
│   │   ├── health.controller.js
│   │   └── voice.controller.js
│   ├── middlewares
│   │   └── error.middleware.js
│   └── routes
│       └── v1
│           └── index.js
├── .env.example
├── .gitignore
├── package.json
└── README.md
```

## Dependencies

- [express](https://expressjs.com/): Fast, unopinionated, minimalist web framework for Node.js.
- [@vapi-ai/server-sdk](https://www.npmjs.com/package/@vapi-ai/server-sdk): Vapi AI Server SDK for Node.js.
- [cors](https://www.npmjs.com/package/cors): Node.js CORS middleware.
- [helmet](https://helmetjs.github.io/): Secure Express apps by setting various HTTP headers.
- [morgan](https://www.npmjs.com/package/morgan): HTTP request logger middleware for Node.js.
- [express-rate-limit](https://www.npmjs.com/package/express-rate-limit): Basic rate-limiting middleware for Express.
- [dotenv](https://www.npmjs.com/package/dotenv): Loads environment variables from a `.env` file.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.