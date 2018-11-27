FROM nginx
WORKDIR /
RUN apt update
RUN apt-get install -y gnupg git
RUN curl -sL https://deb.nodesource.com/setup_10.x | bash -
RUN apt-get install -y nodejs
RUN npm install -g yarn
COPY . /circle-homepage
WORKDIR /circle-homepage
RUN yarn
RUN yarn lint
RUN yarn build
RUN cp /circle-homepage/build/* /usr/share/nginx/html/
