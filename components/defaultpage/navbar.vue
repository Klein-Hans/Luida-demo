<template>
  <div class="nav-bar">
    <b-toolbar flat class="tool-bar" dark fixed
      app>
			<v-btn icon>
				<v-icon>home</v-icon>
			</v-btn>
			<v-spacer></v-spacer>
			<v-toolbar-items>
				<v-btn icon class="hidden-sm-and-down">
					<v-icon>search</v-icon>
					<v-icon>message</v-icon>
				</v-btn>
				<v-btn icon @click.stop="rightDrawer = !rightDrawer" class="hidden-md-and-up">
					<v-icon>menu</v-icon>
				</v-btn>
			</v-toolbar-items>	
    </b-toolbar>
  </div>
</template>

<script>
export default {
	name: 'navbar',
	data(){
		return {
			
		}
	}
}
</script>
