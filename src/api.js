import { apiUrl } from "./config";
import axios from "axios";

export default {
	parse: {
		resourceUrl: "parse",
		getAll() {
			return axios({
				url: `${apiUrl}/${this.resourceUrl}`,
				method: "GET"
			});
		},
		getOne(id) {
			return axios({
				url: `${apiUrl}/${this.resourceUrl}/${id}`,
				method: "GET"
			});
		},
		add(item) {
			return axios({
				url: `${apiUrl}/${this.resourceUrl}`,
				method: "POST",
				data: item
			});
		},
		edit(id, item) {
			fetch(`${apiUrl}/${this.resourceUrl}/${id}`,{
				method: "PUT",
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					"url": item.url,
					"grabtext": item.grabtext,
					"grab_date": item.grab_date
				}),
				data: item
			})
		},
		delete(id) {
			return axios({
				url: `${apiUrl}/${this.resourceUrl}/${id}`,
				method: "DELETE"
			});
		}
	}
};
