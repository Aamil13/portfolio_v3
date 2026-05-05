This portfolio runs on Next.js with a MongoDB backend (Mongoose). Portfolio content is loaded from the database, so you can update content without editing frontend files.

## Getting Started

1. Create environment file:

```bash
cp .env.example .env.local
```

2. Add your Mongo connection string to `.env.local`:

```bash
MONGODB_URI=your_mongodb_connection_string
```

3. Install dependencies and run the development server:

```bash
npm install
npm run dev
```

4. Ensure portfolio document exists in your MongoDB database.

Open [http://localhost:3002](http://localhost:3002) with your browser.

## API Endpoints

- `GET /api/portfolio` - get portfolio document from MongoDB
- `PUT /api/portfolio` - update portfolio document

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
