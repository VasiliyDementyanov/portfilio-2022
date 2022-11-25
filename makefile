
include .env
$(eval export $(shell sed -ne 's/ *#.*$$//; /./ s/=.*$$// p' .env))

# local dev #

run-front-end-dev:
	npm run start --prefix front-end

run-back-end-dev:
	cd ./back-end/cmd/back-end && go run main.go

run-back-end:
	./back-end/cmd/back-end/back-end

build-copy-front:
	npm run build --prefix front-end
	mkdir -p ./back-end/cmd/back-end/dist/ && rsync -av ./front-end/build/ ./back-end/cmd/back-end/dist/ --delete

build-back-end: 
	cd ./back-end/cmd/back-end && go build -o back-end main.go 
	sudo setcap CAP_NET_BIND_SERVICE=+eip ./back-end/cmd/back-end/back-end

# remote server #

deploy-on-server: copy-on-server start-docker-on-server

copy-on-server:	
	sshpass -p "${SERVER_PASSWORD}" ssh -t ${SERVER_USER}@${SERVER_IP} -p ${SERVER_PORT} \
	 'echo ${SERVER_PASSWORD} | sudo -S mkdir -p /opt/portfolio-2022 && \
	  sudo chmod -R 755 /opt/portfolio-2022 && \
		sudo chown -R ${SERVER_USER}:${SERVER_USER} /opt/portfolio-2022'
	sshpass -p "${SERVER_PASSWORD}" rsync -ae "ssh -p ${SERVER_PORT}" --exclude=front-end/node_modules --progress ./ ${SERVER_USER}@${SERVER_IP}:/opt/portfolio-2022 --delete

start-docker-on-server:
	#sshpass -p "${SERVER_PASSWORD}" ssh -t ${SERVER_USER}@${SERVER_IP} -p ${SERVER_PORT} 'cd /opt/portfolio-2022;docker-compose down'
	sshpass -p "${SERVER_PASSWORD}" ssh -t ${SERVER_USER}@${SERVER_IP} -p ${SERVER_PORT} 'cd /opt/portfolio-2022;docker-compose up -d --build'
	sshpass -p "${SERVER_PASSWORD}" ssh -t ${SERVER_USER}@${SERVER_IP} -p ${SERVER_PORT} 'cd /opt/portfolio-2022;docker image prune --filter label=stage=builder --force'