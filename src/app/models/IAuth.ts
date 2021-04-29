
export interface IUser {
    firstName : string;
    email : string;
    password : string;


}

export interface IStatus {
    single : boolean;
    married : boolean;
    divorced : boolean;
  //  widowed : boolean;

}

export interface IGenders {
    female : boolean;
    male : boolean;
    bi : boolean;

}

export interface IFilters {
    identifiedAs : Array<IGenders>;
    interestedOn : Array<IGenders>;
    birthdate: string;
    ageRangeInteresStart : number;
    ageRangeInteresEnd : number;
    status : Array<IStatus>;
}

export class IFilters {
    identifiedAs : Array<IGenders>;
    interestedOn : Array<IGenders>;
    birthdate: string;
    ageRangeInteresStart : number;
    ageRangeInteresEnd : number;
    status : Array<IStatus>;
}

export interface IPersonalFilters {
    gender ?: Array<IGenders>;
    d_birthdata ?: string;
    n_status ?: string;
    n_havekids ?: string;
    n_nationality ?: string
    n_area ?: string;
    n_livingin ?: string
    n_interestedon ?:string;    
    t_character ?: any[];

    t_lookingfor ?: any[];
    t_hobbies ?: any[];
    n_hotherinfo ?: string;

    n_hairs ?: string;
    n_eyes ?: string
    n_physic ?: string;
    n_height ?: any;

    n_smoking ?: string;
    n_drinking ?: string
    n_eating ?: any[];
    n_travelling ?: any[];
    n_movies ?: any[];
    n_reading ?: any[];
    n_sport ?: any[];

    n_education ?: string;
    n_religion ?: string;
    n_working   ?: string;
    // ageRangeInteresEnd : number;
    // status : Array<IStatus>;
}