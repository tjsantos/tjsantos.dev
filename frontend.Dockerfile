FROM node:24
WORKDIR /app/frontend
COPY frontend/package.json frontend/package-lock.json ./
RUN npm ci
COPY tsconfig.base.json ../
COPY frontend/ ./
RUN npm run build

