FROM node:carbon

# Create app directory

WORKDIR /usr/src/docker-react-client

# Install app dependencies

# A wildcard is used to ensure both package.json AND package-lock.json are copied

# where available (npm@5+)

COPY package*.json ./

RUN npm install 

RUN npm install socket.io
RUN npm install  socket.io-client
RUN npm install react-scripts@2.1.1 -g 

#To bundle your app’s source code inside the Docker image, use the COPY instruction:

COPY . .

#Your app binds to port 3000 so you’ll use the EXPOSE instruction to have it mapped by the docker daemon:

EXPOSE 3231

CMD ["npm", "run" , "start"]






