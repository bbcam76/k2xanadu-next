import createMiddleware from 'next-intl/middleware'
export default createMiddleware({
  locales: ['en','sv','no','da','fi'],
  defaultLocale: 'en'
})
export const config = { matcher: ['/((?!_next|.*\\..*).*)'] }
