import axios from "axios";

export default class ApiService {
	getUrl(url: string): string {
		return `http://192.168.116.29:5000/api${url}`;
	}

	async getPolls(): Promise<Array<Poll>> {
		const response = await axios.get<
			Array<{
				description: string;
				name: string;
				date: string;
				id: number;
				respondent_amount: number;
				rating: number;
			}>
		>(this.getUrl("/admin/polls"));

		// return response.data.map((val) => ({
		// 	id: val.id,
		// 	name: val.name,
		// 	description: val.description,
		// 	date: val.date,
		// 	responders: val.respondent_amount,
		// 	rating: val.rating,
		// 	criteria: [],
		// }));
		//@ts-ignore
		return response.data;
	}

	async createOnePoll(data: PollCreate): Promise<String> {
		const response = await axios.post<string>(this.getUrl("/admin/poll"), {
			name: data.name,
			description: data.description,
			criteria: data.criteria.join(","),
			question: data.question,
			answer: data.answer,
		});

		return response.data;
	}

	async getPoll(pollId: number): Promise<Poll> {
		const response = await axios.get<Poll>(
			this.getUrl(`/admin/poll?id=${pollId}`)
		);

		return response.data;
	}

	async updatePoll(data: PollEdit): Promise<string> {
		const criteria: string[] | undefined = data.criteria?.map(
			(e) => `${e.id};${e.name}`
		);
		console.log(criteria?.join(","));

		const response = await axios.put<string>(this.getUrl("/admin/poll"), {
			poll_id: data.id,
			name: data.name,
			description: data.description,
			criteria: criteria ? criteria.join(",") : undefined,
			question: data.question,
			answer: data.answer,
		});

		return response.data;
	}

	async deletePoll(data: number): Promise<string> {
		const response = await axios.delete<string>(
			this.getUrl("/admin/poll?id=" + data)
		);

		return response.data;
	}
	async getTemplates(): Promise<Array<Template>> {
		const response = await axios.get<Array<Template>>(
			this.getUrl("/admin/templates")
		);

		return response.data;
	}
	async getTemplateCriteria(
		templateId: number
	): Promise<Array<CriteriaTemplate>> {
		const response = await axios.get<Array<CriteriaTemplate>>(
			this.getUrl(`/admin/template?id=${templateId}`)
		);

		return response.data;
	}

	async createTemplate(data: TemplateCreate): Promise<string> {
		const response = await axios.post<string>(
			this.getUrl("/admin/template"),
			{
				name: data.name,
				criteria: data.criteria.join(","),
			}
		);

		return response.data;
	}

	async updateTemplate(data: TemplateEdit): Promise<string> {
		const response = await axios.put<string>(
			this.getUrl("/admin/template"),
			{
				template_id: data.id,
				name: data.name,
				criteria: data.criteria?.join(","),
			}
		);

		return response.data;
	}
	async deleteTemplate(data: number): Promise<string> {
		const response = await axios.delete<string>(
			this.getUrl("/admin/template?id=" + data)
		);

		return response.data;
	}
}
