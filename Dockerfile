#stage 1: compile and build angular codebase

#Use official node image as base image
FROM node:latest as build

#Set the working directory
WORKDIR /usr/local/app/

#Addthe souce to app
COPY ./ /usr/local/app/

#install all dependancies
RUN npm install

#Generate build of application
RUN npm run build 

# stage 2 serve appwith nginx server

#use offiacial nginx imgae as base image
FROM nginx:latest


#copy the output file to replace default nginx contents
COPY --from=build /usr/local/app/dist/delivery_cube /usr/share/nginx/html


EXPOSE 80