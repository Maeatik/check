<template>
	<div class="panel panel-primary" style="margin-top: 10px">
		<div class="panel-heading" style="background-color: #21f33d">Редактирование текста</div>
		<div class="panel-body">
			<form @submit="handleSubmit">
				<div class="form-group">
					<label for="grabtext">Текст</label>
					<input type="text" class="form-control" id="grabtext" v-model="grabtext">
				</div>

				<button type="submit" class="btn btn-primary pull-right" style="background-color: #21f33d">Сохранить</button>
			</form>
		</div>
	</div>
</template>

<script>
	import {mapActions, mapState} from "vuex";

	export default {
		data() {
			return {
				id: parseInt(this.$route.params.id),
				url: this.$route.params.url,
				grabtext: this.$route.params.grabtext,
				grab_date: this.$route.params.grab_date,
			};
		},
		created() {
			if (this.id !== 0 && this.parse) {
				this.url = this.parse.url;
				this.grabtext = this.parse.grabtext;
				this.grab_date = this.parse.grab_date;
			}
		},
		methods: {
			async handleSubmit(e) {
				e.preventDefault();
				const item = {
					url: this.url,
					grabtext: this.grabtext,
					grab_date:  this.grab_date,
				};
				if (this.id !== 0) {
					item.id = this.id;
					await this.editItem(item);
					await this.$router.push({name: "loader"});
				} else {
					await this.addItem(item);
					await this.$router.push({name: "loader"});
				}

			},
			...mapActions([
				'addItem',
				'editItem'
			])
		},
		computed: {

			parse() {
				return this.id !== 0 ?
					this.$store.state.parse.find(item => item.id === this.id) :
					null;
			},
			...mapState({
				parse: state => state.parse,
			}),
		}
	}
</script>
