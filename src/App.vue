<template>
  <div>
    <h1>To do list!</h1>
    <hr>
    <ul>
      <li v-for="(item,index) in to_do" :key="index">
        <input type="checkbox" v-model="item.check">

        <input ref="editInput" v-if="item.editing" class="edit-input" type="text"  v-model="item.text" @blur="saveItem(index)" @keyup.enter="saveItem(index)">
        
        <span v-else class="todo-item" :class="{ 'checked': item.check }"   @click="editItem(index)"> {{ item.text }} </span>
        
        <button class="remove-item" @click="remove_to_do(index)">x</button>
      </li>
    </ul>

    <button @click="add_item">add item</button>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'App',
  computed: {
    ...mapState({
      to_do: state => state.to_do
    })
  },
  methods: {
    add_item() {
      this.$store.commit('add_to_do', "新的代辦清單");
    },
    remove_to_do(index) {
      this.$store.commit('remove_to_do', index)
    },
    saveItem(index) {
      this.$store.commit('saveItem', index)
    },
    editItem(index) {
      this.$store.commit('editItem', index);
      this.$nextTick(() => {
        this.$refs.editInput[0].focus();
      });
    }
  }
}
</script>

<style>
#app {
  font-family: Arial, sans-serif;
  text-align: center;
}

h1 {
  color: #333;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  margin-bottom: 10px;
}

input[type="checkbox"] {
  margin-right: 10px;
}

.todo-item {
  cursor: pointer;
  display: inline-block;
  padding: 5px 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f9f9f9;
}

.edit-input {
  padding: 4px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.remove-button {
  background-color: #ff5733;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
}

.checked {
  text-decoration: line-through;
}
</style>
