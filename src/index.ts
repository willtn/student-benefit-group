import { Option } from 'funfix-core';
import { Address, RawAddress } from 'address';

export class StudentBenefitGroup {
  constructor(
    public id: string,
    public owner: string,
    public pledge: string,
    public data: StudentBenefitGroupData,
    public members: number
  ) { }
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
    public id: string,
    public name: Option<string> = Option.none(),
    public description: Option<string> = Option.none(),
    public website: Option<string> = Option.none(),
    public email: Option<string> = Option.none(),
    public facebook: Option<string> = Option.none(),
    public twitter: Option<string> = Option.none(),
    public address: Address = new Address('')
  ) { }
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
    public id: string,
    public owner: string, // subscriber
    public group: string // subscribee
  ) { }
}
