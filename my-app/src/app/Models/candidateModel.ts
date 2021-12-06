import { employmentStatusEnum } from "../Utils/enums";

export class CandidateModel
{
    firstName: string;
    lastName: string;
    employmentStatus: employmentStatusEnum;
    instituteName:string;
    degreeDetails:string;
    employerName:string;
    jobTitle:string;

    constructor()
    {
        this.firstName = '';
        this.lastName = '';
        this.employmentStatus = employmentStatusEnum.none;
        this.instituteName = '';
        this.degreeDetails = '';
        this.employerName = '';
        this.jobTitle = '';
    }
}