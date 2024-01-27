import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  googleLogin(req: any) {
    if (!req.user) {
      return 'No user from google'
    }

    console.log(req.user)
    return {
      message: 'User information from google',
    
      user: req.user
    }
  }
}