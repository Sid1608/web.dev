FROM golang:1.20.10-alpine3.18
WORKDIR /test
COPY . /test
RUN go build /test
EXPOSE 8000
ENTRYPOINT ["./dockergin"]

# in order to run golang application we need os, golang installation
# alpine denotes linux/ubuntu os
# https://hub.docker.com/_/golang
# COPY source destination
# ENTRYPOINT [ "executable" ]

#docker build -t name .  t here denotes tag

#docker ps => show running images


#  docker ps
# CONTAINER ID   IMAGE              COMMAND                  CREATED         STATUS         PORTS                    NAMES
# e84156982a84   firstdocker        "./dockergin"            5 minutes ago   Up 5 minutes   0.0.0.0:8000->8000/tcp   angry_lederberg

# to run in background 
# docker run -p 8000:8000 -d -t firstdocker
# b723773bca7a45f214fad4431d114cd88cc205e76ae1f16e4b4ce14854b3612a