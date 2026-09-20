import { defineMiddleware } from 'astro:middleware';

export const onRequest = defineMiddleware(async (context, next) => {
  const { pathname } = context.url;
  
  if (pathname.startsWith('/dashboard')) {
    const sessionCookie = context.cookies.get('sb-access-token');
    
    if (!sessionCookie) {
      return context.redirect('/login');
    }
  }

  return next();
});
