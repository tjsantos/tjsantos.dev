FROM mcr.microsoft.com/playwright:v1.55.0-noble
WORKDIR /app/e2e
COPY e2e/package.json e2e/package-lock.json ./
RUN npm ci
COPY tsconfig.base.json ../
