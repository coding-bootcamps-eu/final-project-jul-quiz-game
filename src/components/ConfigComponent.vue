<template>
  <main class="main">
    <section>
      <div class="checkbox-section">
        <p>Choose a quiz by topic</p>
        <div class="checkbox-container">
          <input type="checkbox" id="checkbox" />
          <label for="checkbox" class="checkbox-button">Basic HTML CSS</label>
        </div>
      </div>
      <div class="checkbox-container">
        <input type="checkbox" class="btn-css" />
        <label for="checkbox" class="checkbox-button">Basic JavaScript</label>
      </div>
    </section>
    <section>
      <p>Choose a quiz by length</p>
      <div class="form-container">
        <select v-model="quantity">
          <option value="20">20 questions</option>
          <option value="15">15 questions</option>
          <option value="10">10 questions</option>
          <option value="15">5 questions</option>
        </select>
      </div>
    </section>
    <section>
      <button class="btn-start">Start</button>
    </section>
  </main>
</template>

<style>
.main > * + * {
  max-width: 60ch;
  margin: 0 auto;
  margin-top: 1.5rem;
  margin-bottom: 2.5rem;
}

input[type="checkbox"] {
  display: none;
}

label.checkbox-button {
  margin-top: 0.5rem;
  display: inline-block;
  cursor: pointer;
  font-size: 1rem;
  padding: 0.5rem 1rem;
  backdrop-filter: blur(21px) saturate(172%);
  -webkit-backdrop-filter: blur(21px) saturate(172%);
  background-color: rgba(163, 175, 245, 0.8);
  border-radius: 12px;
  border: 1px solid rgba(209, 213, 219, 0.3);
}

input[type="checkbox"]:checked + label.checkbox-button {
  background-color: #4464ad;
}

.form-container {
  margin-top: 0.5rem;
  cursor: pointer;
  font-size: 1rem;
  padding: 0.5rem 1rem;
  backdrop-filter: blur(21px) saturate(172%);
  -webkit-backdrop-filter: blur(21px) saturate(172%);
  background-color: rgba(163, 175, 245, 0.8);
  border-radius: 12px;
  border: 1px solid rgba(209, 213, 219, 0.3);
}

.btn-start {
  cursor: pointer;
  font-size: 1rem;
  padding: 0.5rem 1rem;
  backdrop-filter: blur(21px) saturate(172%);
  -webkit-backdrop-filter: blur(21px) saturate(172%);
  background-color: rgba(163, 175, 245, 0.8);
  border-radius: 12px;
  border: 1px solid rgba(209, 213, 219, 0.3);
}
</style>

<script>
export default {
  data() {
    return {
      quantity: 20,
    };
  },
};
</script>
