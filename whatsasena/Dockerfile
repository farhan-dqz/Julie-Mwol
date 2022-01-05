FROM fusuf/whatsasena:latest

RUN git clone https://github.com/BANDICOOT-OS/abhikutti /root/niyababy
WORKDIR /root/niyababy/
ENV TZ=Europe/Istanbul
RUN npm install supervisor -g
RUN yarn install --no-audit

CMD ["node", "bot.js"]
