import pandas as pd
import os

BASE_DIR = os.path.dirname(os.path.dirname(__file__))
CSV_PATH = os.path.join(BASE_DIR, "data/students.csv")

def get_student_by_id(student_id):
    df = pd.read_csv(CSV_PATH)
    student = df[df["student_id"] == int(student_id)]

    if student.empty:
        return None

    return student.iloc[0].to_dict()
