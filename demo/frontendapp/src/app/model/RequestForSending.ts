export class RequestForSending
{
    constructor(
        public name: string,
        public numberOfPeople : number,
        public nature: string,
        public location: string,
        public assignedToTeamId: number,
        public status: boolean 
    ){}
}