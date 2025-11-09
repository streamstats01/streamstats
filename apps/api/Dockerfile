FROM node:20-alpine AS deps
WORKDIR /app
COPY package*.json ./
# Use npm install so it works even without a lockfile (you can switch to npm ci later)
RUN npm install --production

FROM node:20-alpine
WORKDIR /app
ENV NODE_ENV=production
COPY --from=deps /app/node_modules ./node_modules
COPY . .
EXPOSE 3000
CMD ["npm", "start"]
