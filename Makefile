compile:
	echo "Compiling browser bot"
	sudo docker build -t registry-1.docker.io/sagroberto/flask_app .
	sudo docker push registry-1.docker.io/sagroberto/flask_app