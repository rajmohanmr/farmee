# Crop Recommendation System

## Project Description

This project is a crop recommendation system designed to help farmers and gardeners make informed decisions about what crops to plant based on various factors such as soil type, climate conditions, and user preferences. The system utilizes machine learning models to predict optimal crop choices and fertilizer recommendations, and provides a user-friendly interface for interacting with these models.  It also incorporates a disease detection component to help users identify and manage crop diseases.

## Technologies Used

### Backend (Django)

*   **Django:** A high-level Python web framework that facilitates rapid development and clean, pragmatic design.
*   **Django REST Framework:** A powerful and flexible toolkit for building Web APIs.
*   **SQLite:** A C-language library that implements a small, fast, self-contained, high-reliability, full-featured, SQL database engine. (For development; consider a more robust database like PostgreSQL for production)

### Frontend (React)

*   **React:** A JavaScript library for building user interfaces, focusing on single-page applications.
*   **React Router:**  A standard library for routing in React, enabling navigation between different views.
*   **CSS:**  Cascading Style Sheets for styling the user interface.

### Machine Learning Models

The system uses several machine learning models for different prediction tasks:

*   **Crop Recommendation Model:** Predicts the most suitable crop(s) based on input features (e.g., soil type, NPK values, pH).  *(Details about the specific algorithm used, e.g., Random Forest, are not available from the file list but would be included here if known.)*
*   **Fertilizer Recommendation Model:** Recommends the appropriate fertilizer type and dosage for a given crop and soil condition. *(Details about the algorithm are not available.)*
*   **Disease Detection Model:**  Identifies potential diseases in crops from uploaded images. *(The file `diseasedetect.keras` suggests a Keras/TensorFlow model, likely a Convolutional Neural Network (CNN), but this would need confirmation.)*


## Setup Instructions

### Backend (Django)

1.  **Clone the repository:**
```
bash
    git clone <repository_url>
    cd <project_directory>  # Assuming 'project_directory' contains manage.py
    
```
2.  **Create and activate a virtual environment (recommended):**
```
bash
    python3 -m venv venv
    source venv/bin/activate  # On Windows: venv\Scripts\activate
    
```
3.  **Install backend dependencies:**
```
bash
    pip install -r requirements.txt  
    
```

4.  **Navigate to the Django project directory and apply migrations:**
```
bash
    python manage.py migrate
    
```
5.  **(Optional) Create a superuser for accessing the Django admin interface:**
```
bash
    python manage.py createsuperuser
    
```
6.  **Run the development server:**
```
bash
    python manage.py runserver
    
```
The backend API should now be accessible at `http://127.0.0.1:8000/`.

### Frontend (React)

1.  **Navigate to the frontend directory:**
```
bash
    cd Frontend/croprecommend
    
```
2.  **Install frontend dependencies:**
```
bash
    npm install
    
```
3.  **Start the development server:**
```
bash
    npm start
    
```
The frontend application should now be running at `http://localhost:3000`.

## Running the Project

1.  Ensure both the backend (Django) and frontend (React) development servers are running in separate terminals, following the steps in the Setup Instructions.

2.  Access the frontend application in your web browser (usually at `http://localhost:3000`).  You should be able to interact with the crop recommendation system through the user interface.

## Notes

*   **(Important)** This README assumes the existence of a `requirements.txt` file in the project's root directory, listing all necessary Python packages for the backend.  Make sure to create this file with a complete list of dependencies.  For the frontend, dependencies are managed by `package.json` in the `Frontend/croprecommend` directory.
*   For a production deployment, you would need to configure a production-ready database (e.g., PostgreSQL), a web server (e.g., Nginx or Apache), and a process manager (e.g., Gunicorn or uWSGI) for the backend. The frontend would typically be built and served as static files by the web server.  Cloud services like Heroku, AWS, or Google Cloud Platform could also be used for deployment.
*   Error handling and security measures (e.g., input validation, authentication) should be implemented thoroughly before deploying the system in a real-world setting.
*   The performance and accuracy of the machine learning models depend on the quality and quantity of the training data used. Continuous monitoring and retraining with new data may be necessary to maintain optimal performance.
*   This system currently uses file uploads for disease detection.  Consider implementing more efficient and scalable methods for handling image data if the system is expected to handle a large number of requests.  
*   **(Further Development)** Areas for improvement could include: expanding the dataset for the ML models, integrating weather data, providing more detailed crop information, incorporating user feedback mechanisms, and enhancing the user interface.