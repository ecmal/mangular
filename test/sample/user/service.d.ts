export declare class UserService {
    static users: {
        name: string;
        avatar: string;
        content: string;
    }[];
    $q: any;
    constructor();
    when(): any;
    loadAllUsers(): any;
}
