<script setup lang="ts">
import { ref } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

const drawer = ref(false);

const isCurrentPath = (path: string): boolean => {
	return route.path === path;
};
</script>

<template>
	<v-app-bar>
		<template v-slot:prepend>
			<router-link to="/" class="app-bar-title">
				The Outlast Trials - Unofficial Maps
			</router-link>
		</template>
		<v-tabs align-tabs="end">
			<v-tab to="/police-station">Police Station</v-tab>
			<v-tab to="/fun-park">Fun Park</v-tab>
			<v-tab to="/orphanage">Orphanage</v-tab>
			<v-tab to="/courthouse">Courthouse</v-tab>
			<v-tab to="/toy-factory">Toy Factory</v-tab>
			<v-tab to="/the-docks">The Docks</v-tab>
			<v-tab to="/downtown">Downtown</v-tab>
			<v-tab to="/the-suburbs">The Suburbs</v-tab>
			<v-tab to="/mansion">Mansion</v-tab>
    	</v-tabs>

		<v-app-bar-nav-icon @click="drawer = !drawer"/>
	</v-app-bar>
	<v-navigation-drawer v-model="drawer" app>
		<v-list v-if="isCurrentPath('/police-station')">
			<v-list-item title="Kill the Snitch" to="/police-station?trial=kill-the-snitch"/>
			<v-list-item title="Cancel the Autopsy" to="/police-station?trial=cancel-the-autopsy"/>
			<v-list-item title="Sabotage the Lockdown" to="/police-station?trial=sabotage-the-lockdown"/>
			<v-list-item title="Eliminate the Past" to="/police-station?trial=eliminate-the-past"/>
			<v-list-item title="Release the Prisoners" to="/police-station?trial=release-the-prisoners"/>
			<v-list-item title="Teach the Police Officer" to="/police-station?trial=teach-the-police-officer"/>
		</v-list>
		<v-list v-if="isCurrentPath('/fun-park')">
			<v-list-item title="Grind the Bad Apples" to="/fun-park?trial=grind-the-bad-apples"/>
			<v-list-item title="Punish the Miscreants" to="/fun-park?trial=punish-the-miscreants"/>
			<v-list-item title="Open the Gates" to="/fun-park?trial=open-the-gates"/>
			<v-list-item title="Deface the Futtermans" to="/fun-park?trial=deface-the-futtermans"/>
			<v-list-item title="Drill the Futterman" to="/fun-park?trial=drill-the-futterman"/>
		</v-list>
		<v-list v-if="isCurrentPath('/orphanage')">
			<v-list-item title="Cleanse the Orphans" to="/orphanage?trial=cleanse-the-orphans"/>
			<v-list-item title="Feed the Children" to="/orphanage?trial=feed-the-children"/>
			<v-list-item title="Foster the Orphans" to="/orphanage?trial=foster-the-orphans"/>
			<v-list-item title="Reunite the Family" to="/orphanage?trial=reunite-the-family"/>
			<v-list-item title="Gather the Children of God" to="/orphanage?trial=gather-the-children-of-god"/>
		</v-list>
		<v-list v-if="isCurrentPath('/courthouse')">
			<v-list-item title="Vindicate the Guilty" to="/courthouse?trial=vindicate-the-guilty"/>
			<v-list-item title="Escape the Courthouse" to="/courthouse?trial=escape-the-courthouse"/>
			<v-list-item title="Destroy the Evidence" to="/courthouse?trial=destroy-the-evidence"/>
			<v-list-item title="Fuel the Release" to="/courthouse?trial=fuel-the-release"/>
			<v-list-item title="Tilt the Scales of Justice" to="/courthouse?trial=tilt-the-scales-of-justice"/>
		</v-list>
		<v-list v-if="isCurrentPath('/toy-factory')">
			<v-list-item title="Pervert the Futterman" to="/toy-factory?trial=pervert-the-futterman"/>
			<v-list-item title="Crush the Sex Toys" to="/toy-factory?trial=crush-the-sex-toys"/>
			<v-list-item title="Incinerate the Sex Toys" to="/toy-factory?trial=incinerate-the-sex-toys"/>
			<v-list-item title="Shotdown the Factory" to="/toy-factory?trial=shotdown-the-factory"/>
		</v-list>
		<v-list v-if="isCurrentPath('/the-docks')">
			<v-list-item title="Poison the Medicine" to="/the-docks?trial=poison-the-medicine"/>
			<v-list-item title="Empty the Vault" to="/the-docks?trial=empty-the-vault"/>
			<v-list-item title="Poison the Cattle" to="/the-docks?trial=poison-the-cattle"/>
			<v-list-item title="Stash the Contraband" to="/the-docks?trial=stash-the-contraband"/>
			<v-list-item title="Cook the Informant" to="/the-docks?trial=cook-the-informant"/>
		</v-list>
		<v-list v-if="isCurrentPath('/downtown')">
			<v-list-item title="Pleasure the Prosecutor" to="/downtown?trial=pleasure-the-prosecutor"/>
			<v-list-item title="Kidnap the Mistress" to="/downtown?trial=kidnap-the-mistress"/>
			<v-list-item title="Spread the Disease" to="/downtown?trial=spread-the-disease"/>
		</v-list>
		<v-list v-if="isCurrentPath('/the-suburbs')">
			<v-list-item title="Liquidate the Union" to="/the-suburbs?trial=liquidate-the-union"/>
		</v-list>
		<v-list v-if="isCurrentPath('/mansion')">
			<v-list-item title="Farewell" to="/the-suburbs?trial=farewell"/>
		</v-list>
	</v-navigation-drawer>
</template>

<style scoped>
.v-app-bar {
	padding: 4px;
	border-bottom: 2px solid #555;
}

.app-bar-title {
	font-size: 1.5rem;
	color: #ffffff;
	text-decoration: none;
	margin-left: 12px;
}
</style>
