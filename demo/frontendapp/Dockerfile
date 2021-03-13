# stage 1
FROM node as builder

WORKDIR /frontendapp
COPY . .
RUN npm install @angular/cli -g
RUN npm i
# A head-of-time compilation
RUN ng build --prod

# stage 2
FROM nginx:1.17.1-alpine
RUN rm -rf /usr/share/nginx/html/*
COPY --from=builder frontendapp/dist/FrontEnd-app /usr/share/nginx/html/
CMD ["nginx", "-g", "daemon off;"]

