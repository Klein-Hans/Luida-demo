<template>
<v-card>
	<v-list two-line>
		<template v-for="(item, index) in items">
			<v-list-tile
			:key="item.title"
			ripple
			>
				<v-list-tile-content>
					<v-list-tile-title>{{ item.title }}</v-list-tile-title>
					<v-list-tile-sub-title class="text--primary">{{ item.content }}</v-list-tile-sub-title>
					<v-list-tile-sub-title>
						<div class="text-xs-center">
    				<v-chip color="indigo darken-1" text-color="white" v-for="(tag, i) in item.tags" :key="i">{{ item.tags[i] }}</v-chip>
  				</div>
					</v-list-tile-sub-title>
				</v-list-tile-content>
				<v-list-tile-action>
					<v-list-tile-action-text>{{ item.action }}</v-list-tile-action-text>
					<v-icon
						color="yellow darken-2"
					>
						star
					</v-icon>
				</v-list-tile-action>
			</v-list-tile>
		</template>
	</v-list>
</v-card>
    
</template>

<script>
export default {
	data(){
		return {
			items: [
				{
					title: "test",
					content: "hello world",
					id: "1",
					tags: ["python", "ruby"],
					date: "2h ago"
				},
				{
					title: "test",
					content: "hello world",
					id: "1",
					tags: ["python", "ruby"],
					date: "1h ago"
				}
			]
		}
	}
}
</script>
