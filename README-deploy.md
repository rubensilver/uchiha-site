
Deploy steps (Render):
1. Push repo to GitHub.
2. On Render create New -> Web Service -> Connect repo.
3. Environment: Docker. Dockerfile path: ./Dockerfile
4. Set env vars from .env.example.
5. Build command: npm install && npm run build
6. Start command: npm start
