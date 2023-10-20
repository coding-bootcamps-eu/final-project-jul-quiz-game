<template>
  <div>
    <p>Ich bin data aus dem Store: {{ adminStore.test }}</p>
    <p>
      Ich bin computed property aus dem Store (getter):
      {{ adminStore.TestUpperCase }}
    </p>
    <hr />
  </div>
  <main>
    <section>
      <p>question listing</p>
    </section>
    <section>
      <p>create new entry</p>
    </section>
  </main>
</template>

<script>
import { useAdminStore } from "../stores/AdminStore";
import { mapStores } from "pinia";
export default {
  computed: {
    ...mapStores(useAdminStore),
  },
};
</script>
