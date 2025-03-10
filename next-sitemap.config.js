module.exports = {
    siteUrl: 'https://nepscape.com',
    generateRobotsTxt: true,
    robotsTxtOptions: {
        policies: [
          {
            userAgent: '*',
            allow: '/',
          },
        ],
      },
  }