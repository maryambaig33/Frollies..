import { GoogleGenAI, Type } from "@google/genai";
import { FlavorRecommendation } from '../types';

const getClient = () => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    throw new Error("API Key not found");
  }
  return new GoogleGenAI({ apiKey });
};

export const generateFlavorCombination = async (mood: string, preferences: string): Promise<FlavorRecommendation> => {
  try {
    const ai = getClient();
    
    const prompt = `
      Create a unique, whimsical frozen yogurt or smoothie flavor combination based on the user's mood and preferences.
      Mood: ${mood}
      Preferences: ${preferences}
      
      Return a fun name, a mouth-watering description, a list of ingredients, and a short fun fact about one of the ingredients.
      Ensure the tone is playful, colorful, and exciting, fitting for a brand called "Frollies".
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            name: { type: Type.STRING, description: "A creative, fun name for the flavor creation" },
            description: { type: Type.STRING, description: "A delicious 1-2 sentence description" },
            ingredients: { 
              type: Type.ARRAY, 
              items: { type: Type.STRING },
              description: "List of 3-5 ingredients" 
            },
            funFact: { type: Type.STRING, description: "A short, interesting fact about an ingredient" }
          },
          required: ["name", "description", "ingredients", "funFact"]
        }
      }
    });

    const text = response.text;
    if (!text) throw new Error("No response from AI");
    
    return JSON.parse(text) as FlavorRecommendation;
  } catch (error) {
    console.error("Error generating flavor:", error);
    throw error;
  }
};