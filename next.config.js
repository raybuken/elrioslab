module.exports = {
    i18n: {
        locales: ['en', 'es'],
        defaultLocale: 'es'
    },
    images:{
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'res.cloudinary.com',
                pathname: '/elrioslab/image/upload/**'
            }
        ]
    }
}