<template>
    <div id="app">
        <ul class="row faculties">
            <router-link v-for="(value, key) in professions" :id="value" class="six columns blocks" :to="{ name: 'year', params: { faculty: $route.params.faculty, profession: value }}" tag="li">
                {{ value | truncate }}
              <!--<ul>-->
                <!--<li v-for="n in 4" class="year">{{ n }}</li>-->
              <!--</ul>-->
            </router-link>
        </ul>
    </div>
</template>
<script>
export default {
  data: function () {
    return {
      professions: Array,
      faculties: {
        ФІ: [
          'Інформатика',
          'Прикладна математика',
          'Програмна інженерія'
        ],
        ФГН: [
          'Історія',
          'Культурологія',
          'Філологія',
          'Філософія'
        ],
        ФПрН: [
          'Біологія',
          'Екологія, охорона навколишнього середовища та збалансоване природокористування',
          'Фізика',
          'Хімія'
        ],
        ФЕН: [
          'Економічна теорія',
          'Маркетинг',
          'Фінанси і кредит'
        ],
        ФСНСТ: [
          'Політологія',
          'Соціальна робота',
          'Соціологія'
        ],
        ФПвН: [
          'Правознавство'
        ]
      }
    }
  },
  created () {
    this.fetchData()
  },
  watch: {
    '$route': 'fetchData'
  },
  filters: {
    truncate: function (value, length = 20) {
      if (value.length < length) {
        return value
      }

      length = length - 3

      return value.substring(0, length) + '...'
    }
  },
  methods: {
    fetchData: function () {
      var faculty = this.$route.params.faculty
      var professions = this.faculties[faculty]
      this.professions = professions
    }
  }
}
</script>
<style lang="scss">
  .faculties {
    .year {
      display: inline-block;
      margin: 0px;
      width:25%;
    }
  }
</style>
