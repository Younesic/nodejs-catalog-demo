import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/health', (_req, res) => {
  res.json({ status: 'ok', service: 'nodejs-catalog-demo' });
});

// Only listen when run directly (not imported for testing)
if (process.argv[1]?.endsWith('index.js')) {
  app.listen(PORT, () => {
    console.log(`🚀 nodejs-catalog-demo listening on http://localhost:${PORT}`);
  });
}

export default app;
