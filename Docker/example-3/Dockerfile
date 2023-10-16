FROM golang:1.20.5-alpine3.18

WORKDIR /app

COPY . /app

RUN go build /app

ENTRYPOINT [ "./docker-example-3" ]


# docker build -t docker-example-3 .  creates image 
# docker run -t docker-example-3    run image