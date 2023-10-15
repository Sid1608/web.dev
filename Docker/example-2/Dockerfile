FROM node:12

WORKDIR /app

COPY package*.json ./

RUN npm install   
# results are commited to commited to docker image as a layer

COPY . .

ENV PORT=8080

EXPOSE 8080

CMD ["npm","start"]  
#exec form


# docker run -p 5000:8080 -t docker/example:2.0 
# docker volume create shared-stuff