FROM oznu/homebridge:latest

COPY startup.sh startup.sh
COPY generateConfig.js generateConfig.js
COPY package.json package.json
COPY package-lock.json package-lock.json

ENV PGID 1000
ENV PUID 1000
ENV HOMEBRIDGE_CONFIG_UI 1
ENV HOMEBRIDGE_INSECURE 1

RUN chmod +x ./startup.sh
RUN npm i --production