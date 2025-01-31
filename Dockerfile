FROM node:18-alpine AS build 

#set the working directory 
WORKDIR /app

#Dependency Installation 
COPY package.json package-lock.json ./ 

RUN npm install 

#Copy the rest of the project files 
COPY . . 

RUN npm run build 

#Using a lightweight web server (NGINX) for serving static files 
FROM nginx:alpine 

COPY --from=build /app/dist /usr/share/nginx/html 

EXPOSE 80 

CMD ["nginx", "-g", "daemon off;"]
