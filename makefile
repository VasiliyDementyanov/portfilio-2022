
include .env
$(eval export $(shell sed -ne 's/ *#.*$$//; /./ s/=.*$$// p' .env))

build-copy-front:
	npm run build --prefix front-end
	mkdir -p ./back-end/cmd/back-end/dist/ && rsync -av ./front-end/build/ ./back-end/cmd/back-end/dist/ --delete

run-back-end-dev:
	cd ./back-end/cmd/back-end && go run main.go