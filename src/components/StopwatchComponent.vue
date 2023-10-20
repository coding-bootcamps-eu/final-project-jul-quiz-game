<template>
    <p :class="{ invisible: !showStopwatch }">
      Stopwatch:{{ formatTime(timePassed) }}
    </p>
  </template>
  
  <script>
  export default {
    data() {
      return {
        timePassed: 0,
        showStopwatch: false,
      };
    },
    methods: {
      startTimer() {
        this.interval = setInterval(() => {
          this.timePassed += 1;
        }, 1000);
      },
      stopTimer() {
        clearInterval(this.interval);
      },
      formatTime(seconds) {
        const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        const remainingSeconds = seconds % 60;
        return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(
          2,
          "0"
        )}:${String(remainingSeconds).padStart(2, "0")}`;
      },
    },
    created() {
      this.startTimer();
    },
    beforeUnmount() {
      this.stopTimer();
    },
  };
  </script>
  