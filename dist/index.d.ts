import { Option } from 'funfix-core';
import { Address, RawAddress } from 'address';
export declare class StudentBenefitGroup {
    id: string;
    owner: string;
    pledge: string;
    data: StudentBenefitGroupData;
    members: number;
    static fromRaw(raw: RawStudentBenefitGroup): StudentBenefitGroup;
    static toRaw(group: StudentBenefitGroup): {
        id: string;
        owner: string;
        pledge: string;
        data: RawStudentBenefitGroupData;
        members: number;
    };
    constructor(id: string, owner: string, pledge: string, data: StudentBenefitGroupData, members: number);
}
export interface RawStudentBenefitGroup {
    id: string;
    owner: string;
    pledge: string;
    data: RawStudentBenefitGroupData;
    members: number;
}
export declare class StudentBenefitGroupData {
    id: string;
    name: Option<string>;
    description: Option<string>;
    website: Option<string>;
    email: Option<string>;
    facebook: Option<string>;
    twitter: Option<string>;
    address: Address;
    static fromRaw(raw: RawStudentBenefitGroupData): StudentBenefitGroupData;
    static toRaw(data: StudentBenefitGroupData): RawStudentBenefitGroupData;
    constructor(id: string, name?: Option<string>, description?: Option<string>, website?: Option<string>, email?: Option<string>, facebook?: Option<string>, twitter?: Option<string>, address?: Address);
    toRaw(): RawStudentBenefitGroupData;
}
export interface RawStudentBenefitGroupData {
    address: RawAddress;
    description?: string;
    email?: string;
    facebook?: string;
    id: string;
    name?: string;
    twitter?: string;
    website?: string;
}
export declare class StudentBenefitGroupSubscription {
    id: string;
    owner: string;
    group: string;
    constructor(id: string, owner: string, group: string);
}
