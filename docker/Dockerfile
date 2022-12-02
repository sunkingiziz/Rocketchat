FROM node:14.19.3

RUN /bin/bash -c "chown -R node  $(npm config get prefix)/{lib/node_modules,bin,share}"

USER node

RUN npm install -g meteor --unsafe-perm

RUN mkdir -p /home/node/app && chown -R node:node /home/node/app

WORKDIR /home/node/app

# COPY --chown=node:node ./Rocket.Chat/* .

# RUN yarn

# EXPOSE 3000

# CMD [ "npm", "start" ]

