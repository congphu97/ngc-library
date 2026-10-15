import { NgcIAvatar } from "@app/@ngc/ngc-avatar";

interface IStatus {
	ACTIVE: 1;
	INACTIVE: 2;
	PENDING: 3;
}

export type NgcIMemberStatus = 1 | 2 | 3;

export interface NgcIMember {
	id: number;
	name?: string;
	order?: number;
	avatar?: NgcIAvatar;
	status?: NgcIMemberStatus;
}

export class NgcMember {

	public static readonly MEMBER_STATUS: IStatus = { ACTIVE: 1, INACTIVE: 2, PENDING: 3 };

}
