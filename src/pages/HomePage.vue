<template>
  <div class="container">
    <div class="row my-2">
      <div class="col-md-2">
        <label for="sortBy" class="form-label">Сортировка по:</label>
      </div>
      <div class="col-md-4">
        <select id="sortBy" v-model="sortBy" class="form-control">
          <option value="none">Нет</option>
          <option value="price">Цена</option>
          <option value="rating">Рейтинг</option>
        </select>
      </div>

      <div class="col-md-4">
        <select id="sortDirection" v-model="sortDirection" class="form-control">
          <option value="min-to-max">По возрастанию</option>
          <option value="max-to-min">По убыванию</option>
        </select>
      </div>
    </div>
    <div class="row my-2">
      <div class="col-md-2">
        <label for="filterName" class="form-label">Фильтр по названию:</label>
      </div>
      <div class="col-md-4">
        <input id="filterName" type="text" v-model="filterName" class="form-control" />
      </div>
    </div>

    <div class="row elements">
      <div v-for="item in sortedAndFilteredItems" :key="item.id" class="col-md-12 ">
        <div class="card">
          <div class="card-body">
            <h6 class="card-title" >Название: {{ item.name }}</h6>
            <p class="card-text">Цена: {{ item.price }}</p>
            <p class="card-text">Рейтинг: {{ item.rating }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.card-body {
  padding: 0.2em;
}
.card-title {
  margin: 0;
}
.card-text {
  margin: 0;
}
</style>

<script>
  export default {
    name: "HomePage",
    data() {
      return {
        sortBy: "none",
        sortDirection: "min-to-max",
        filterName: "",
        items: [
          { id: 1, name: "Первый", price: 100, rating: 0.2 },
          { id: 2, name: "Второй", price: 101, rating: 0.5 },
          { id: 3, name: "Третий", price: 101, rating: 0.9 },
          { id: 4, name: "Четвертый", price: 50, rating: 0.6 },
            // расширяемость
          { id: 5, name: "Пятый", price: 550, rating: 1.6 },
          { id: 6, name: "Шестой", price: 350, rating: 0.2 },
          { id: 7, name: "Седьмой", price: 70, rating: 0.1 },

        ],
      };
    },
    computed: {
      sortedAndFilteredItems() {
        let items = [...this.items];

        if (this.filterName !== "") {
          const filter = this.filterName.toLowerCase();
          items = items.filter((item) =>
              item.name.toLowerCase().includes(filter)
          );
        }

        if (this.sortBy !== "none") {
          items.sort((a, b) => {
            if (this.sortDirection === "min-to-max") {
              return a[this.sortBy] - b[this.sortBy];
            } else {
              return b[this.sortBy] - a[this.sortBy];
            }
          });
        }

        return items;
      },
    },
  };
  </script>

