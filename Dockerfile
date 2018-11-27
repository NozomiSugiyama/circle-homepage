FROM nginx
WORKDIR /
RUN apt update
RUN apt-get install -y gnupg git curl
RUN curl -sL https://deb.nodesource.com/setup_10.x | bash -
RUN apt-get install -y nodejs
RUN npm install -g yarn
COPY . /circle-homepage
WORKDIR /circle-homepage
RUN yarn
RUN yarn lint
RUN yarn build
RUN cp -r /circle-homepage/build/es5-bundled/* /usr/share/nginx/html/
