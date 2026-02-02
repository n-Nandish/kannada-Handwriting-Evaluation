
Kannada Handwriting Evaluation System

Project Description:
This project is a web-based demo system to evaluate Kannada handwritten text images.
Users can upload an image of handwritten Kannada text, and the backend processes
the image and returns an evaluation message. Currently, the evaluation is demo-based
and can be extended using OCR and Machine Learning.

Technologies Used:
Frontend:
- HTML
- CSS
- JavaScript

Backend:
- Python
- Flask
- Flask-CORS
- Pillow (PIL)

Folder Structure:
project-folder/
|-- app.py
|-- uploads/
|-- static/
|   |-- script.js
|   |-- style.css
|-- index.html

How to Run the Project:
1. Install dependencies:
   pip install flask flask-cors pillow

2. Run the backend server:
   python app.py

3. Open index.html in a browser and upload a Kannada handwriting image.

Sample Output:
"ಮೌಲ್ಯಮಾಪನ ಮುಗಿದಿದೆ! (ಡೆಮೊ ಫಲಿತಾಂಶ)"

Future Enhancements:
- Kannada OCR using Tesseract
- Machine Learning based scoring
- Character-wise feedback
- Student login and result history

Author:
Nandish Kubasad
BE – Artificial Intelligence & Machine Learning
VTU
