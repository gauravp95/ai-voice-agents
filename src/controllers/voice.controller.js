import { VapiClient } from "@vapi-ai/server-sdk";
import { config } from '../config/index.js';

const vapi = new VapiClient({
  token: config.vapiApiKey
});


export const createCall = async (req, res, next) => {
  try {
    const { customerNumber } = req.body;

    // Validate input
    if ( !customerNumber ) {
      return res.status(400).json({ success: false, message: 'Customer Phone no. is mandatory' });
    }

    const phoneNumberId = config.vapiPhoneNumberId;
    const assistantId = config.vapiAssistantId;
    
    // Create the call
    const call = await vapi.calls.create({
      phoneNumberId,
      customer: { number: customerNumber },
      assistantId
    });

    return res.status(201).json({
      success: true,
      message: 'Call created successfully',
      data: call
    });
  } catch (error) {
    next(error);
  }
}