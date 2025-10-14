from fastapi import FastAPI, UploadFile, Form
from fastapi.middleware.cors import CORSMiddleware
from utils.parser import extract_text_from_pdf
from utils.scorer import compute_match_score
import os

app = FastAPI()

# Enable React CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def root():
    return {"message": "Smart Resume Screener API Running 🚀"}

@app.post("/analyze")
async def analyze_resume(resume: UploadFile, job_description: str = Form(...)):
    contents = await resume.read()
    file_path = f"temp/{resume.filename}"
    os.makedirs("temp", exist_ok=True)
    with open(file_path, "wb") as f:
        f.write(contents)
    
    resume_text = extract_text_from_pdf(file_path)
    score, justification = compute_match_score(resume_text, job_description)
    
    return {
        "filename": resume.filename,
        "score": score,
        "justification": justification
    }
