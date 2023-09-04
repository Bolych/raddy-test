<template>
  <div>
    <div class="nav">
      Сортировка по:
      <select v-model="sort.value">
        <option :value="SORT_KEYS.NONE">Нет</option>
        <option :value="SORT_KEYS.PRICE">Цена</option>
        <option :value="SORT_KEYS.RATING">Рейтинг</option>
      </select>
      <select v-model="sort.direction">
        <option :value="DIRECTION_KEYS.MIN_TO_MAX">По возрастанию</option>
        <option :value="DIRECTION_KEYS.MAX_TO_MIN">По убыванию</option>
      </select>
    </div>
    <div class="nav">
      Фильтр по названию:
      <input type="text" v-model.trim="filters.name.value" />
    </div>
    <hr />
    <div class="elements">
      <template v-for="item in sortedItems">
        <div class="item" :key="item.id">
          <strong class="name">Название: {{ item.name }}</strong>
          <div class="price">Цена: {{ item.price }}</div>
          <div class="rating">Рейтинг: {{ item.rating }}</div>
        </div>
      </template>
    </div>
  </div>
</template>

<style>
.nav {
  margin: 10px 0;
}
.nav-el {
  margin: 10px;
}
.item {
  margin: 5px 0;
  padding: 5px;
  border: 1px solid #000;
}

select {
  margin: 0 5px;
}
</style>

<script>
const SORT_KEYS = {
  NONE: "none",
  PRICE: "price",
  RATING: "rating",
};

const DIRECTION_KEYS = {
  MIN_TO_MAX: "min-to-max",
  MAX_TO_MIN: "max-to-min",
};

export default {
  name: "HomePage",
  data() {
    return {
      SORT_KEYS,
      DIRECTION_KEYS,
      sort: {
        direction: DIRECTION_KEYS.MIN_TO_MAX,
        value: SORT_KEYS.NONE,
      },
      filters: {
        name: {
          value: "",
        },
      },
      items: [
        { id: 1, name: "Первый", price: 100, rating: 0.2 },
        { id: 2, name: "Второй", price: 101, rating: 0.5 },
        { id: 3, name: "Третий", price: 102, rating: 0.9 },
        { id: 4, name: "Четвертый", price: 50, rating: 0.6 },
          // расширяемость
        { id: 5, name: "Пятый", price: 550, rating: 1.6 },
        { id: 6, name: "Шестой", price: 350, rating: 0.2 },
        { id: 7, name: "Седьмой", price: 70, rating: 0.1 },
      ],
    };
  },
  computed: {
    sortedItems() {
      // Массив с элементами в результате
      let resultArr = this.items;
      // 1. сортировка по имени
      if (this.filters.name.value.length > 0) {
        resultArr = this.filterByName();
      }
      // if (this.filters.manufacturer.value.length > 0) {
      //   resultArr = this.filterByManufacturer(resultArr);
      // }
      // 2.1 Сортировка
      if (this.sort.value === SORT_KEYS.PRICE) {
        return this.sortByPrice(resultArr);
      }
      // 2.2 Сортировка
      if (this.sort.value === SORT_KEYS.RATING) {
        return this.sortByRating(resultArr);
      }
      //
      return resultArr;
    },
  },
  methods: {
    sortByPrice(elements = this.items) {
      // callbacks
      const sortMinToMax = (a, b) => a.price - b.price;
      const sortMaxToMin = (a, b) => b.price - a.price;
      //
      if (this.sort.direction === DIRECTION_KEYS.MIN_TO_MAX) {
        return elements.slice().sort(sortMinToMax);
      }
      //
      if (this.sort.direction === DIRECTION_KEYS.MAX_TO_MIN) {
        return elements.slice().sort(sortMaxToMin);
      }
      //
      return elements;
    },
    sortByRating(elements = this.items) {
      // callbacks
      const sortMinToMax = (a, b) => a.rating - b.rating;
      const sortMaxToMin = (a, b) => b.rating - a.rating;
      //
      if (this.sort.direction === DIRECTION_KEYS.MIN_TO_MAX) {
        return elements.slice().sort(sortMinToMax);
      }
      //
      if (this.sort.direction === DIRECTION_KEYS.MAX_TO_MIN) {
        return elements.slice().sort(sortMaxToMin);
      }
      //
      return elements;
    },
    filterByName(elements = this.items) {
      //
      const inputName = this.filters.name.value.toUpperCase();
      //
      return elements.filter(({ name }) => {
        //
        const originalName = name.toUpperCase();
        //
        return originalName.includes(inputName);
      });
    },
  },
};
</script>
