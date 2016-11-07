<template>
    <div id="app">
        <ul class="row faculties">
            <router-link v-for="(value, key) in faculties" :id="key" class="six columns blocks" :to="{ name: 'profession', params: { faculty: key }}" tag="li">
                {{ key  }}
            </router-link>
        </ul>
    </div>
</template>
<script>
export default{
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
  }
}
</script>
<style lang="scss">
</style>