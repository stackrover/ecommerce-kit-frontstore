export const appConfig = {
  APP_NAME: process.env.NEXT_PUBLIC_APP_NAME || "StackRover E-commerce kit",
  APP_DESCRIPTION:
    process.env.NEXT_PUBLIC_APP_DESCRIPTION ||
    "A full-stack e-commerce kit built with Next.js, Tailwind CSS, and TypeScript.",

  API_URL: process.env.API_URL || "http://localhost:4000/api",
  API_KEY: process.env.API_KEY || "your_api_key_here",
};
