<template>
  <div class="container">
    <ConfigComponent />

    <ul v-for="group of groups" :key="group.id">
      <li>{{ group.title }}: {{ group.id }}</li>
    </ul>
  </div>
</template>

<script>
import ConfigComponent from "@/components/ConfigComponent.vue";

export default {
  data() {
    return {
      groups: [],
      selectedGroups: [],
    };
  },
  methods: {
    async getGroups() {
      try {
        const response = await fetch("http://localhost:3000/groups");
        const data = await response.json();
        this.groups.push(...data);
      } catch (err) {
        console.log(err);
      }
    },
  },
  mounted() {
    this.getGroups();
  },
  components: { ConfigComponent },
};
</script>
