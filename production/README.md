# Tabula Rasa: Quasar + Strapi (Website)

This is a tabula rasa scaffold for a new Quasar (Vue) + Strapi (Node + MongoDB) **website**. For the web application configuration, see [this repository](https://github.com/evangrinde/tabularasa_quasar-strapi_application).

This a production configuration. For the development configuration, check the `../development` directory.

## Most recent successful build:
<!-- - 10:12PM EST 6/11/2021 -->
<!-- - macOS 11.3.1 on Apple M1 -->
<!-- - Docker Desktop 3.3.3 (Engine v20.10.6 on darwin/arm64) -->

## External Pre-Requisites
1. Configure your website domain DNS
2. Spin up your `Ubuntu 20.x.x` server
3. Initiate your domain ➡️ server connection
4. create the following server A records:
    - `@`
    - `www`
    - `cms`

## Machine Pre-Requisites
1. a non-root user w/ sudo permissions
2. Docker
3. Docker Compose
4. Node
5. NVM
6. Git

## Recommendations
- [Yarn](https://classic.yarnpkg.com/en/docs/cli/global/)
- [NVM](https://github.com/nvm-sh/nvm)
- [Vue Devtools](https://github.com/vuejs/vue-devtools)
- [Apollo Client Devtools](https://www.apollographql.com/docs/react/development-testing/developer-tooling/)

## Get Started



## Initiate quasar
- `$ pwd` : `../tabularasa_quasar-strapi_website/production`
- `$ cd quasar`
- `$ nvm use 13`
- `$ yarn`
- `$ yarn build`
- `$ qdeploy`

## Initiate strapi
- `$ pwd` : `../tabularasa_quasar-strapi_website/production`
- `$ docker-compose up -d` (or `dc up -d` with the provided alias)
- `$ docker-compose logs --tail=all -f | grep strapi` (or `log -s` with the provided alias)
- `$ docker-compose down` (or `dc down` with provided alias)
- locate `ADMIN_JWT_SECRET` in `/strapi/config/server.js` and copy the value to `/strapi-config/.env`
- `$ rsync -a strapi-config/api/ strapi/api`
- `$ rsync -a strapi-config/components/ strapi/components`
- `$ rsync -a strapi-config/config/ strapi/config`
- `$ cp strapi-config/.env strapi/`

## Pull live strapi
**⛔️ Important** : *This may not be necessary anymore...*
- `$ pwd` : `../tabularasa_quasar-strapi_website/production`
- `$ mkdir safe`
- `$ mv jwt.js ./safe`
- `$ mv package.json ./safe`
- `$ sudo chown -R ${USER}:${USER} strapi`
- `$ git remote set-url origin [strapi]`
- `$ git reset --hard origin/main`
- `$ cd strapi`
- `$ rm -R .build .cache node_modules package-lock.json yarn.lock`
- `$ pwd` : `../tabularasa_quasar-strapi_website/production`
- `$ dc up -d`
- `$ log -s`
- `$ sudo yarn build --clean`
- `$ strapilog (or log -s)`

## Configure SSL Certificates
- `$ bash init-letsencrypt.sh`
