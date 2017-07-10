export class Contact {
constructor(public name: string,
             public email: string,
             public phone: number,
             public current_location: string,
             public total_experience: number,
             public current_organization: string,
             public job_role: string,
             public gender: string,
             public social_profile_link: URL,
             public dateofbirth: Date,
             public resume_upload: File){}
}
