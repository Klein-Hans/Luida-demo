<template>
<div>
  <div class="home">
    <v-container>
      <div class="message">
        <h1 class="white--text mb-2 display-3 font-weight-bold">理科大生のための<br>プラットフォーム</h1>
        <v-container>
        <div class="grey--text lighten-5 headline font-weight-medium">RikaHubは理科大生のための開発プラットフォームです。実験からシミュレーション、オープンソースプロジェクトまで、RikaHun上でプロジェクトチームを作成することで他の理科大生と一緒にプログラミング、IoT、ビジネスに挑戦することができます。</div>
        </v-container>
        <v-btn to="/signup" nuxt color="#00C853" dark class="font-weight-black" large>
          Getting started</v-btn>
      </div>
    </v-container>
  </div>
  <div class="sub-message">
  <v-container>
    <div class="grey--text lighten-5 headline">Rikahubをチームを作成</div>
    <div class="mb-2 display-1 font-weight-bold">
      異なる分野の融合をスマートに
    </div>
    <v-btn to="/signup" nuxt color="#00C853" outline class="font-weight-black" large>
          Getting started</v-btn>
  </v-container>
  <v-container>
            <v-layout
							column
							wrap
							align-center
            >
							<v-flex xs12>
								<v-container>
									<v-layout row wrap class="overview-content">
										<v-flex xs12 md4>
											<v-card class="elevation-0 transparent">
												<v-card-text>
													<v-icon x-large class="blue--text text--lighten-2">computer</v-icon>
												</v-card-text>
												<v-card-title class="layout justify-center">
                      <div class="headline">Device Simulation</div>
                    </v-card-title>
                    <v-card-text>
                      シミュレーションを選考している学生
                    </v-card-text>
                  </v-card>
                </v-flex>
                <v-flex xs12 md4>
                  <v-card class="elevation-0 transparent">
                    <v-card-text>
                      <v-icon x-large class="blue--text text--lighten-2">flash_on</v-icon>
                    </v-card-text>
                    <v-card-title class="layout justify-center">
                      <div class="headline">Quantum Dot</div>
                    </v-card-title>
                    <v-card-text>
                      研究室では実験に注力しているがシミュレーションやプログラミングにも興味がある。
                    </v-card-text>
                  </v-card>
                </v-flex>
                <v-flex xs12 md4>
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-xs-center">
                      <v-icon x-large class="blue--text text--lighten-2">build</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline">MBE Growth</div>
                    </v-card-title>
                    <v-card-text>
                      何か新しいサービスを立ち上げたいが、メンバーが足りない。 
                    </v-card-text>
                  </v-card>
										</v-flex>
									</v-layout>
								</v-container>
							</v-flex>
						</v-layout>
        </v-container>
  </div>
</div>
</template>

<script>

export default {
  components: {
    
  }
}
</script>

<style scoped>
.home{
  height: 1000px;
  background-color: #263238;
}
.message{
  text-align: center;
  margin-top: 200px;
  font-family: 'Noto Sans JP';
}
.sub-message{
  text-align: center;
  margin-top: 50px;
  margin: 20px;
}

</style>
