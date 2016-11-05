<template>
  <div id="app" class="container ">
    <ul class="row">
      <li v-for="faculty in faculties" class="six columns blocks">{{ faculty.text }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'app',
  data: function () {
    return {
      faculties: [
        {'name': 'фі', 'text': 'ФІ'},
        {'name': 'фпрн', 'text': 'ФПрН'},
        {'name': 'фпвн', 'text': 'ФПвН'},
        {'name': 'фен', 'text': 'ФЕН'},
        {'name': 'фгн', 'text': 'ФГН'},
        {'name': 'фснст', 'text': 'ФСНСТ'}
      ]
    }
  },
  methods: {
    log: function () {
      console.log('test')
    },
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
      margin: 2px;
      height: 1.5em;;
      cursor: pointer;
      text-align: center;
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
      margin: 2px;
      height: 2em;;
      cursor: pointer;
      text-align: center;
    }
  }

  @media (min-width: 550px) and (min-height: 768px) {
    .column:first-child, .columns:first-child {}
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

    #marks {
      li {
        display: inline-block;
        border-radius: 4px;
        border: 2px solid #cecece;
        vertical-align: middle;
        list-style: none;
        font-size: 1.5em;
        margin: 4px 4px 4px 0;
        cursor: pointer;
        text-align: center;
        width: 200px;
        height: 80px;
      }
      li:hover {
        border: 2px solid #8A2BE2;
      }
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
        margin: 20px;
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

