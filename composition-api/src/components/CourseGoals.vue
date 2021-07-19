<template>
  <div>
    <goals-list :goals="filteredGoals"></goals-list>
    <add-goal @add-goal="addGoal"></add-goal>
  </div>
</template>

<script>
import { ref, computed } from "vue";
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
    // .value has to be used when
    // accessing the its value
    const goals = ref([]);

    const filteredGoals = computed(function () {
      // 'this' keyword is not used
      return goals.value.filter(
        (goal) => !goal.text.includes("Angular") && !goal.text.includes("React")
      );
    });

    function addGoal(text) {
      const newGoal = {
        id: new Date().toISOString(),
        text: text,
      };
      goals.value.push(newGoal);
    }

    // For objects that are needed in the template
    return {
      // Data objects can be assigned different names
      // e.g. userGoals: goals
      filteredGoals: filteredGoals,
      addGoal: addGoal,
    };
  },
};
</script>
