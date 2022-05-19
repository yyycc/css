FROM node:16

# MAINTAINER  PatSnap DevOps <devops@patsnap.com>
RUN mkdir -p /usr/src/css
# COPY container_files /
COPY . /usr/src/css
WORKDIR /usr/src/css

# RUN yarn config set cache-folder /app/.yarn_caches

RUN yarn install --frozen-lockfile --ignore-engines
# RUN npm install --only=production

# build necessary, even if no static files are needed,
# since it builds the server as well
EXPOSE 3100

# start the app
CMD [ "yarn", "start" ]
