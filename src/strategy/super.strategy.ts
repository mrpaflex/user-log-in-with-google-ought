import {config} from 'dotenv'
config()

export const GoogleSheet = {
    
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_SECRET,
        callbackURL: 'http://localhost:3000/google/redirect',
        scope: ['email', 'profile'],
      
}