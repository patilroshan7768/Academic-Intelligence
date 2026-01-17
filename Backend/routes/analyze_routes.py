from flask import Blueprint, jsonify
from services.csv_service import get_student_by_id
from services.model_service import run_models
import numpy as np

analyze_bp = Blueprint("analyze", __name__)

@analyze_bp.route("/analyze/<student_id>", methods=["GET"])
def analyze_student(student_id):
    student = get_student_by_id(student_id)

    if not student:
        return jsonify({"error": "Student not found"}), 404

    # Feature vector (must match model training order)
    features = [
        float(student["math_score"]),
        float(student["reading_score"]),
        float(student["writing_score"]),
        float(student["average_score"])
    ]

    predictions = run_models(features)

    # Convert all numpy values to native Python types
    response = {
        "student_id": int(student["student_id"]),
        "math_score": float(student["math_score"]),
        "reading_score": float(student["reading_score"]),
        "writing_score": float(student["writing_score"]),
        "average_score": float(student["average_score"]),
        "performance_level": str(student["performance_level"]),
    }

    # Convert prediction outputs safely
    for key, value in predictions.items():
        if isinstance(value, (np.integer, np.floating)):
            response[key] = value.item()
        else:
            response[key] = str(value)

    return jsonify(response)
