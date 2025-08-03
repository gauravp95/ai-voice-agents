import dotenv from 'dotenv';
dotenv.config();

export const config = {
  port: process.env.PORT || 5000,
  env: process.env.NODE_ENV || 'development',
  vapiApiKey: process.env.VAPI_API_KEY,
  vapiPhoneNumberId: process.env.VAPI_PHONE_NUMBER_ID,
  vapiAssistantId: process.env.VAPI_ASSISTANT_ID
};
