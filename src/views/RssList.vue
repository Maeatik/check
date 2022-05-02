<template>
	<div class="panel panel-primary" style="margin-top: 10px">
		<div class="panel-heading" style="background-color: #21f33d; font-family: Montserrat">MortyGrab</div>
		<table class="table table-striped">
			<thead>
			<tr>
				<th>№</th>
				<th style="width: 15%">Ссылка страницы</th>
				<th style="width: 75%">Собранный текст</th>
				<th style="width: 10%">Дата</th>
				<th style="width: 20px"></th>
			</tr>
			</thead>
			<tbody>
			<tr v-for="item in parse" :key=item.id>
				<td>{{item.id}}</td>
				<td>{{item.url}}</td>
				<td>{{item.grabtext}}</td>
				<td>{{item.grab_date}}</td>
				<td><button type="button" class="btn btn-sm btn-link" @click="handleRemoveClick($event, item.id)">
					<span class="glyphicon glyphicon-remove"></span>
				</button></td>
			</tr>
			</tbody>
		</table>
	</div>

</template>
<script>

	import {mapActions, mapState} from 'vuex';

	export default {
		name: 'parse',
		computed: {
			...mapState({
				parse: state => state.parse,
			})
		},
		methods: {
			async handleRemoveClick(e, id) {
				await this.removeItem(id);
				await this.$router.push({name: "loader"});
			},

			...mapActions([
				'removeItem',
			])
		},
	}
</script>
