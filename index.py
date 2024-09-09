from flask import Flask, request, render_template, jsonify
from flask_mail import Mail, Message
import json
import os

# Imprimir variables de entorno para verificar
print("MAIL_SERVER:", os.getenv('MAIL_SERVER'))
print("MAIL_PORT:", os.getenv('MAIL_PORT'))
print("MAIL_USE_TLS:", os.getenv('MAIL_USE_TLS'))
print("MAIL_USERNAME:", os.getenv('MAIL_USERNAME'))
print("MAIL_DEFAULT_SENDER:", os.getenv('MAIL_DEFAULT_SENDER'))

app = Flask(__name__)
app.config.from_object('config.DevelopmentConfig')

mail = Mail(app)

# Rutas para páginas principales
@app.route('/')
def index():
    return render_template('index.html')

@app.route('/services')
def services():
    return render_template('services.html')

@app.route('/teach')
def teach():
    return render_template('teach.html')

@app.route('/blog')
def blog():
    return render_template('blog.html')

@app.route('/blogs/<entry_name>')
def blog_entry(entry_name):
    return render_template(f'blogs/{entry_name}.html')

@app.route('/contact')
def contact():
    return render_template('contact.html')

@app.route('/carla')
def carla():
    return render_template('carla.html')

# Ruta para manejar el formulario
@app.route('/submit_form', methods=['POST'])
def submit_form():
    if request.method == 'POST':
        name_lastname = request.form['name_lastname']
        email = request.form['email']
        cv_file = request.files['cv']

        if cv_file and cv_file.filename.endswith('.pdf'):
            try:
                # Crear el mensaje de correo al destinatario fijo (RRHH)
                msg_to_rrhh = Message("Nuevo CV recibido",
                                      recipients=["sdgualteros@gmail.com"])
                msg_to_rrhh.body = f"Se ha recibido un nuevo CV de {name_lastname} ({email})."
                msg_to_rrhh.attach(cv_file.filename, "application/pdf", cv_file.read())
                mail.send(msg_to_rrhh)

                # Correo de confirmación al remitente (aplicante)
                msg_to_applicant = Message("Confirmation of application receipt.",
                                           recipients=[email])  # Email del aplicante
                msg_to_applicant.body = f"Hi! {name_lastname},\n\nThank you for submitting your application. We have received your CV and will contact you soon.\n\nBest regards,,\nLearnTutors Team"
                mail.send(msg_to_applicant)

                return render_template('teach.html', message="CV enviado con éxito")
            except Exception as e:
                print("Error:", e)
                return render_template('teach.html', message=f"Error al enviar el CV: {e}")
        else:
            return render_template('teach.html', message="Por favor, sube un archivo PDF válido")
    else:
        return 'Método no permitido'

# Ruta para servir archivos JSON de traducción
@app.route('/languages/<lang_code>.json')
def get_translation(lang_code):
    try:
        with open(f'static/languages/{lang_code}.json', 'r', encoding='utf-8') as f:
            translations = json.load(f)
        return jsonify(translations)
    except FileNotFoundError:
        return jsonify({}), 404

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)
