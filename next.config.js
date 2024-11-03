module.exports = {
    i18n: {
        locales: ['en', 'es'],
        defaultLocale: 'en',
    },
    images:{
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'res.cloudinary.com',
                pathname: '/elrioslab/image/upload/**'
            }
        ]
    },
}