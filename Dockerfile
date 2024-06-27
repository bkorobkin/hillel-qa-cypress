FROM cypress/included:latest

#RUN apt-get update && apt-get install -y google-chrome-stable
RUN apt-get update && apt-get install -y firefox-esr

WORKDIR /app

COPY . /app

RUN npm install

#CMD ["npx", "cypress", "run", "--browser", "chrome"]
CMD ["npx", "cypress", "run", "--browser", "firefox"]

#docker build -t cypress-chrome .
#docker run -it --rm cypress-chrome

#docker build -t cypress-firefox .
#docker run -it --rm cypress-firefox
