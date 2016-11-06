<template xmlns:v-on="http://www.w3.org/1999/xhtml">
  <div id="app" class="container ">
    <ul class="row faculties">
      <li v-for="(value, key) in faculties" class="six columns blocks" v-on:click="chooseFaculty" :id="key"
          v-if="!facultyChoose" @click="facultyChoose = true">{{ key }}
      </li>
    </ul>

    <ul class="row professions" v-if="facultyChoose">
      <li v-for="(value, key) in professions" class="eight columns">{{ value|truncate }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'app',
  data: function () {
    return {
      facultyChoose: false,
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
    getTrimester: function () {
      var date = new Date()
      if (date.getMonth() > 8 && date.getMonth() < 11) {
        return 1
      } else if (date.getMonth() > 0 && date.getMonth() < 3) {
        return 2
      } else if (date.getMonth() > 3 && date.getMonth() < 5) {
        return 3
      } else {
        return 0
      }
    },
    chooseFaculty: function (event) {
      var faculty = event.target.id
      this.professions = (this.faculties[faculty])
    }
  }
}
</script>

<style lang="scss">

  .faculty_tail {
    height: 10em;
    display: inline-block;
  }

  body {
    min-width: 320px;
  }

  .blocks {
    display: inline-block;
    border-radius: 4px;
    border: 2px solid #cecece;
    vertical-align: middle;
    list-style: none;
    font-size: 3em;
    margin: 4px 4px 4px 0;
    height: 5em;;
    cursor: pointer;
    text-align: center;
  }

  header {
    h1 {
      span {
        display: none;
      }
    }
  }

  /* Larger than mobile */
  @media (min-width: 320px) {
    .blocks {
      display: inline-block;
      border-radius: 6px;
      border: 2px solid #cecece;
      vertical-align: middle;
      list-style: none;
      font-size: 2.9em;
      margin: 2px 2px 2px 0;
      height: 1.5em;;
      cursor: pointer;
      text-align: center;
    }

    .professions {
      li {
        font-size: 1.5em;
      }
    }
  }

  /* Larger than mobile */
  @media (min-width: 400px) {

    .blocks {
      display: inline-block;
      border-radius: 6px;
      border: 2px solid #cecece;
      vertical-align: middle;
      list-style: none;
      font-size: 2.9em;
      margin: 2px 2px 2px 0;
      height: 2em;;
      cursor: pointer;
      text-align: center;
    }
  }

  @media (min-width: 550px) and (min-height: 768px) {
    .column:first-child, .columns:first-child {
    }
    header {
      h1 {
        span {
          display: inline-block;
          font-size: 0.4em;
        }
      }
    }

    .blocks {
      display: inline-block;
      border-radius: 6px;
      border: 2px solid #cecece;
      vertical-align: middle;
      list-style: none;
      font-size: 3em;
      margin: 4px 4px 4px 0;
      height: 5em;;
      cursor: pointer;
      text-align: center;
    }
  }

  /* Larger than tablet */
  @media (min-width: 750px) {
    header {
      h1 {
        span {
          display: inline-block;
          font-size: 0.5em;
        }
      }
    }
    .blocks {
      display: inline-block;
      border-radius: 6px;
      border: 2px solid #cecece;
      vertical-align: middle;
      list-style: none;
      font-size: 3em;
      margin: 4px 4px 4px 0;
      height: 4.5em;;
      cursor: pointer;
      text-align: center;
    }
  }

  /* Larger than desktop */
  @media (min-width: 1000px) {
  }

  @media (min-width: 1200px) {
    #marks {
      li {
        display: inline-block;
        border-radius: 4px;
        border: 2px solid #cecece;
        vertical-align: middle;
        list-style: none;
        font-size: 2em;
        margin: 20px 20px 20px 0;
        cursor: pointer;
        text-align: center;
        width: 10em;
        height: 5em;
      }
      li:hover {
        border: 2px solid #8A2BE2;
      }
    }
  }

</style>

