<template>
  <div>
    <goals-list :goals="filteredGoals"></goals-list>
    <add-goal @add-goal="addGoal"></add-goal>
  </div>
</template>

<script>
import { ref } from "vue";
import GoalsList from "./GoalsList.vue";
import AddGoal from "./AddGoal.vue";

export default {
  components: {
    GoalsList,
    AddGoal,
  },
  //Called in created() lifecycle
  setup() {
    // ref replaces data option
    const goals = ref([]);

    return {
      // Data objects can be assigned different names
      // e.g. userGoals: goals
    };
  },
};
</script>
