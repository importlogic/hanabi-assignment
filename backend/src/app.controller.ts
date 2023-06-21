import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { User } from './user.schema';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/')
    getHello(): {status: string, message: string} {
        return {
            status: 'success',
            message: 'Hi this is the backend server for Hanabi Take Home assignment. You probably landed here by mistake. You can visit the site at https://hanabi-assignment.pages.dev'
        }
    }

    @Post('/get-user')
    async getUser(@Body() data: {username: string}) {
        let userData: User;

        try{
            userData = await this.appService.getUser(data.username);
        }
        catch(err){
            console.log(err);

            return {
                status: 'failed'
            }
        }
        return {
            status: 'success',
            data: userData
        }
    }

    @Post('/set-user')
    async setUser(@Body() data: User) {
        try{
            await this.appService.setUser(data);
        }
        catch(err){
            console.log(err);

            return {
                status: 'failed'
            }
        }

        return {
            status: 'success'
        }
    }
}
