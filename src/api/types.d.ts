interface Poll {
	id: number;
	name: string;
	description: string;
	date: Date;
	responders: number;
	rating: number;
	criteria: { criteria_id: number; criteria_name: string }[];
}

interface PollCreate {
	name: string;
	description: string;
	criteria: string[];
	question: string;
	answer: boolean;
}

interface PollEdit {
	id: number;
	name?: string;
	description?: string;
	criteria?: { id: number; name: string }[];
	question?: string;
	answer?: boolean;
}

interface Template {
	id: number;
	name: string;
}
interface Criterion {
	id: number;
	pollId: number;
	name: string;
	points: Array<number>;
	csat: number;
}
interface TemplateEdit {
	id: number;
	name?: string;
	criteria?: string[];
}
interface TemplateCreate {
	name: string;
	criteria: Array<string>;
}
interface CriteriaTemplate {
	id: string;
	templateId: string;
	name: string;
}
