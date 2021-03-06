import { Option } from 'funfix-core';
import { Address, RawAddress } from 'address';

export class StudentBenefitGroup {
  public static fromRaw(raw: RawStudentBenefitGroup): StudentBenefitGroup {
    return new StudentBenefitGroup(raw.id, raw.owner, raw.pledge, StudentBenefitGroupData.fromRaw(raw.data), raw.members);
  }

  public static toRaw(group: StudentBenefitGroup) {
    return {
      id: group.id,
      owner: group.owner,
      pledge: group.pledge,
      data: group.data.toRaw(),
      members: group.members
    };
  }

  constructor(
    public id: string = 'AAAAAAAAAAAAAAAAAAAAAA',
    public owner: string = 'AAAAAAAAAAAAAAAAAAAAAA',
    public pledge: string = 'AAAAAAAAAAAAAAAAAAAAAA',
    public data: StudentBenefitGroupData = new StudentBenefitGroupData(),
    public members: number = 0
  ) { }
}

export interface RawStudentBenefitGroup {
  id: string;
  owner: string;
  pledge: string;
  data: RawStudentBenefitGroupData;
  members: number;
}

export class StudentBenefitGroupData {
  public static fromRaw(raw: RawStudentBenefitGroupData): StudentBenefitGroupData {
    return new StudentBenefitGroupData(raw.id, Option.of(raw.name), Option.of(raw.description), Option.of(raw.website), Option.of(raw.email), Option.of(raw.facebook), Option.of(raw.twitter), Address.fromRaw(raw.address));
  }

  public static toRaw(data: StudentBenefitGroupData): RawStudentBenefitGroupData {
    return {
      address: Address.toRaw(data.address),
      description: data.description.orUndefined(),
      email: data.email.orUndefined(),
      facebook: data.facebook.orUndefined(),
      id: data.id,
      name: data.name.orUndefined(),
      twitter: data.twitter.orUndefined(),
      website: data.website.orUndefined()
    };
  }

  constructor(
    public id: string = 'AAAAAAAAAAAAAAAAAAAAAA',
    public name: Option<string> = Option.none(),
    public description: Option<string> = Option.none(),
    public website: Option<string> = Option.none(),
    public email: Option<string> = Option.none(),
    public facebook: Option<string> = Option.none(),
    public twitter: Option<string> = Option.none(),
    public address: Address = new Address()
  ) { }

  public toRaw() {
    return StudentBenefitGroupData.toRaw(this);
  }
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

export class StudentBenefitGroupSubscription {
  constructor(
    public id: string = 'AAAAAAAAAAAAAAAAAAAAAA',
    public owner: string = 'AAAAAAAAAAAAAAAAAAAAAA', // subscriber
    public group: string = 'AAAAAAAAAAAAAAAAAAAAAA' // subscribee
  ) { }
}
