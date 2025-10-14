import google.generativeai as genai
import dotenv
import os
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

# Configure Gemini API
api_key = os.getenv("GEMINI_API_KEY")
if not api_key:
    raise ValueError("❌ GEMINI_API_KEY not found in .env file")
genai.configure(api_key=api_key)

def compute_match_score(resume_text, job_description):
    prompt = f"""
    Compare the following resume with the given job description and provide:
    1. A match score between 1 and 10.
    2. A brief justification for the score.

    Resume:
    {resume_text}

    Job Description:
    {job_description}
    """

    # Using the stable Flash-Lite model for faster processing
    model = genai.GenerativeModel("models/gemini-2.5-flash-lite")
    response = model.generate_content(prompt)

    output = response.text

    import re
    score_match = re.search(r"(\d+(?:\.\d+)?)", output)
    match = re.search(r"\b([0-9]+(?:\.[0-9]+)?)\s*/\s*10\b", output)
    

    return match.group(1), output
