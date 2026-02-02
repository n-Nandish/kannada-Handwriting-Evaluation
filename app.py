from flask import Flask, request, jsonify
from flask_cors import CORS
from PIL import Image
import os

app = Flask(__name__)
CORS(app)

@app.route('/evaluate', methods=['POST'])
def evaluate():
    if 'file' not in request.files:
        return jsonify({'result': 'ಫೈಲ್ ಕಾಣಿಸುತ್ತಿಲ್ಲ!'}), 400

    file = request.files['file']
    filepath = os.path.join('uploads', file.filename)
    file.save(filepath)

    # 👉 Here you integrate your ML model to analyze the handwriting image
    # predicted_text = model.predict(filepath)
    # score = evaluate_text(predicted_text)

    return jsonify({'result': 'ಮೌಲ್ಯಮಾಪನ ಮುಗಿದಿದೆ! (ಡೆಮೊ ಫಲಿತಾಂಶ)'})

if __name__ == '__main__':
    if not os.path.exists('uploads'):
        os.mkdir('uploads')
    app.run(debug=True)
