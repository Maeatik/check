<script>
	import { mapActions } from 'vuex';
	import { wait } from '../utils';

	export default {
		name: "UserLoader",
		mounted: function () {
			this.$nextTick(async () => {
				await this.initializeUsers();
				await wait(1500);
				await this.$router.push({name: "users"})
			});
		},
		methods: {
			...mapActions([
				'initializeUsers'
			])
		},
	}
</script>

<style scoped lang="scss">
	$primary-color: #21f34e;

	.loader {
		z-index: 1;
		height: 4px;
		width: 100%;
		position: absolute;
		top: 0;
		left: 0;
		overflow: hidden;
		background-color: #ddd;

		&:before {
			display: block;
			position: absolute;
			content: "";
			left: -200px;
			width: 200px;
			height: 4px;
			background-color: $primary-color;
			animation: loading 2s linear infinite;
		}
	}

	@keyframes loading {
		from {left: -200px; width: 30%;}
		50% {width: 30%;}
		70% {width: 70%;}
		80% { left: 50%;}
		95% {left: 120%;}
		to {left: 100%;}
	}
</style>
