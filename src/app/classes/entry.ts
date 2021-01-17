
export class Patient {
    constructor(public resourceType: string,
                public id: number,
                public fullUrl: string,
                public gender: string,
                public birthDate: string,
                public name: string) {}
}
