# Smart Resume Screener

> AI-powered resume screening and analysis tool that helps recruiters find the best candidates efficiently.

## 🚀 Features

- **Bulk Resume Processing**: Upload multiple resumes in ZIP format
- **AI Analysis**: Powered by Google Gemini AI for intelligent screening
- **Match Scoring**: Get detailed match scores against job requirements
- **Automated Shortlisting**: Candidates automatically shortlisted based on criteria
- **Detailed Feedback**: Comprehensive analysis for each resume

## 🛠️ Tech Stack

### Frontend
- React 18+ with Vite
- Modern CSS (no frameworks)
- Axios for API calls

### Backend
- FastAPI (Python 3.9+)
- Google Gemini AI
- PyPDF2 for PDF parsing

## 📦 Installation

### Prerequisites
- Node.js 16+
- Python 3.9+
- Google Cloud API key

### Backend Setup
```bash
cd backend
python -m venv venv
.\venv\Scripts\activate
pip install -r requirements.txt
```

Create `.env` file in backend directory:
```env
GEMINI_API_KEY=your_api_key_here
```

### Frontend Setup
```bash
cd frontend
npm install
```

## 🚀 Running the Application

1. Start the backend server:
```bash
cd backend
.\venv\Scripts\activate
uvicorn main:app --reload
```

2. Start the frontend:
```bash
cd frontend
npm run dev
```

3. Open `http://localhost:5173` in your browser

## 📝 Usage

1. Enter or paste the job description
2. Upload a ZIP file containing resumes (PDF format)
3. Click "Analyze"
4. View results including:
   - Match scores (0-100)
   - Shortlist status
   - Detailed feedback

## 📁 Project Structure

```
smart-resume-screener/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── JobDescription.jsx
│   │   │   ├── ResultCard.jsx
│   │   │   └── UploadZip.jsx
│   │   ├── styles/
│   │   │   └── components.css
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── package.json
└── backend/
    ├── utils/
    │   ├── parser.py
    │   └── scorer.py
    ├── main.py
    └── requirements.txt
```

## 🔌 API Endpoints

### POST /analyze
Analyzes resumes against a job description.

**Request:**
- `zip_file`: ZIP containing PDFs
- `job_description`: String

**Response:**
```json
{
  "results": [
    {
      "filename": "resume1.pdf",
      "match_score": 85,
      "shortlisted": "Yes",
      "justification": {
        "for_selection": "Matches required skills...",
        "for_rejection": ""
      }
    }
  ]
}
```

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## ⚠️ Important Notes

- Keep your API keys secure
- Never commit `.env` files
- Maximum ZIP file size: 10MB
- Supported formats: PDF only

## 🙏 Acknowledgments

- Google Gemini AI
- FastAPI
- React + Vite
- All contributors
