FROM node:18

WORKDIR /app

COPY package*.json ./

RUN npm install --target_arch=x64 --target_platform=linux --target_libc=glibc

RUN npm i -g @nestjs/cli

COPY . .

RUN npx prisma generate

RUN npm run build

CMD ["npm", "run", "start"]