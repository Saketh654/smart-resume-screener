import os
import google.generativeai as genai
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

# Configure API
api_key = os.getenv("GEMINI_API_KEY")
if not api_key:
    raise ValueError("❌ GEMINI_API_KEY not found in .env file")
genai.configure(api_key=api_key)

# List all available models
models = genai.list_models()
print("\nAvailable Gemini Models:")
print("-" * 50)
for model in models:
    print(f"\nModel Name: {model.name}")
    print(f"Display Name: {model.description}")
    print(f"Generation Methods: {model.supported_generation_methods}")
    print("-" * 50)