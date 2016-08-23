module.exports = {
// Development configuration options
    db: 'mongodb://localhost:27017/mean-book',
    sessionSecret: 'developmentSessionSecret',
    google: {
        clientID: '459479244564-92k56529hvsjck72nbvipvict8trgmj7.apps.googleusercontent.com',
        clientSecret: 'ViQmxT8lIgG0HJ5Uo-edFJCf',
        callbackURL: 'http://localhost:3000/oauth/google/callback'
    }
};