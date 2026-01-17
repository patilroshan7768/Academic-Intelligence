import joblib
import os

BASE_DIR = os.path.dirname(os.path.dirname(__file__))

performance_model = joblib.load(os.path.join(BASE_DIR, "models/performance_model.pkl"))
risk_model = joblib.load(os.path.join(BASE_DIR, "models/risk_model.pkl"))
overall_model = joblib.load(os.path.join(BASE_DIR, "models/overall_model.pkl"))
improve_model = joblib.load(os.path.join(BASE_DIR, "models/improve_model.pkl"))

def run_models(features):
    performance = performance_model.predict([features])[0]
    risk = risk_model.predict([features])[0]
    overall = overall_model.predict([features])[0]
    support = improve_model.predict([features])[0]

    return {
        "performance_category": performance,
        "risk_status": risk,
        "overall_decision": overall,
        "needs_support": support
    }
