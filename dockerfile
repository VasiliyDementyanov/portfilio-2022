# go builder
FROM golang:1.19.2-alpine3.15 as goBuilder
LABEL stage=builder maintainer="Dementyanov Vasiliy <vv.dementianov@gmail.com>"
# ENV GO111MODULE=on
RUN apk update && apk add --no-cache git
WORKDIR /go/src/github.com/VasiliyDementyanov/portfolio-2022/back-end
COPY ./back-end/ .
RUN go mod download
WORKDIR /go/src/github.com/VasiliyDementyanov/portfolio-2022/back-end/cmd/back-end
RUN CGO_ENABLED=0 GOOS=linux go build -a -installsuffix cgo -o back-end .

# react builder
FROM node:16.18.0-alpine3.15 as reactBuilder
LABEL stage=builder maintainer="Dementyanov Vasiliy <vv.dementianov@gmail.com>"

COPY ./front-end/package.json /tmp/package.json
COPY ./front-end/package-lock.json /tmp/package-lock.json
RUN cd /tmp && npm install
RUN mkdir -p /home/node/portfolio-2022/front-end && cp -a /tmp/node_modules /home/node/portfolio-2022/front-end/

WORKDIR /home/node/portfolio-2022/front-end
COPY ./front-end/ .
#RUN chown -R node:node /home/node/portfolio-2022

#USER node

#RUN npm install
RUN npm run build

# run
FROM alpine:3.15
LABEL maintainer="Dementyanov Vasiliy <vv.dementianov@gmail.com>"
RUN apk --no-cache add ca-certificates libcap

ARG DOCKER_USER

ARG USERNAME=${DOCKER_USER}
ARG GROUPNAME=${DOCKER_USER}

RUN addgroup -S $GROUPNAME
RUN adduser -G $GROUPNAME -s /bin/sh -D $USERNAME
#RUN echo "builder ALL=(ALL) NOPASSWD:ALL" >> /etc/sudoers

WORKDIR /opt/portfolio-2022

COPY --from=goBuilder /go/src/github.com/VasiliyDementyanov/portfolio-2022/back-end/cmd/back-end/back-end .
COPY --from=goBuilder /go/src/github.com/VasiliyDementyanov/portfolio-2022/back-end/.certificates/ ./.certificates

COPY --from=reactBuilder /home/node/portfolio-2022/front-end/build/ ./dist

RUN chown -R $USERNAME:$GROUPNAME /opt/portfolio-2022
RUN chmod -R 755 /opt/portfolio-2022
RUN chmod a+x /opt/portfolio-2022/back-end

RUN setcap CAP_NET_BIND_SERVICE=+eip ./back-end