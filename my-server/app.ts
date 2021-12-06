import express, { Request, Response,NextFunction} from 'express';
import {StateModel} from 'my-lib';

const app = express();
const port = 3000;

app.listen(port, () => {
  console.log('My-Server is running on port '+port);
});

//Allowing cors
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:4200");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });


  
  const getFSMData = (request: Request, response: Response) => {
    let stateData: StateModel[] = [
        {
        stateName: 'PersonalDetails',
        isInitialState: true,
        transitions:[
            {
                transition:'IsEmployed_Next_Pressed',
                nextState:'JobDetails'
            },
            {
                transition:'NotIsEmployed_Next_Pressed',
                nextState:'SchoolDetails'
            },
            {
                transition:'Quit_Pressed',
                nextState:'Quit'
            }]
        },
        {
        stateName: 'JobDetails',
        isInitialState: false,
        transitions:[
            {
                transition:'Next_Pressed',
                nextState:'EndAfterJobDetails'
            },
            {
                transition:'Back_Pressed',
                nextState:'PersonalDetails'
            },
            {
                transition:'Quit_Pressed',
                nextState:'Quit'
            }]
        },
        {
        stateName: 'SchoolDetails',
        isInitialState: false,
        transitions:[
            {
                transition:'Next_Pressed',
                nextState:'EndAfterSchoolDetails'
            },
            {
                transition:'Back_Pressed',
                nextState:'PersonalDetails'
            },
            {
                transition:'Quit_Pressed',
                nextState:'Quit'
            }]
        },
        {
        stateName: 'EndAfterSchoolDetails',
        isInitialState: false,
        transitions:[
            {
                transition:'Back_Pressed',
                nextState:'SchoolDetails'
            } ,
            {
                transition:'Quit_Pressed',
                nextState:'Quit'
            }]
        },
        {
        stateName: 'EndAfterJobDetails',
        isInitialState: false,
        transitions:[
            {
                transition:'Back_Pressed',
                nextState:'JobDetails'
            },
            {
                transition:'Quit_Pressed',
                nextState:'Quit'
            }]
        },
        {
        stateName: 'Quit',
        isInitialState: false,
        transitions:[
            {
                transition:'Start_Pressed',
                nextState:'PersonalDetails'
            }]
        }];
  
    response.status(200).json(stateData);
  };
  
  app.get('/fsmData', getFSMData);