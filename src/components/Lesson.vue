<template>
    <div id="app">
      <div v-if="loading" class="loader"></div>
      <div v-if="!loading" class="container">
        <ul class="row lessons">
            <li v-for="lesson in lessons" class="ten columns">
                {{ lesson.name | removeBrackets | truncate }} <input type="number" v-model.number="lesson.mark" onkeypress='return event.charCode >= 48 && event.charCode <= 57' />
            </li>
        </ul>
        <div id="rating">
          <h1>Рейтинг: <span> {{ rating }} </span></h1>
        </div>
      </div>
    </div>
</template>
<script>
export default {
  data: function () {
    return {
      lessons: [],
      term: 1,
      loading: true,
      rating: 0,
      apiURL: 'https://api.usic.at/api/v1/courses/subjects?program=' + this.$route.params.profession + '&year=' + this.$route.params.year + '&term=1&level=Бакалавр&type=норм'
    }
  },
  created () {
    this.fetchData()
  },
  watch: {
    lessons: {
      handler: function (val, oldVal) {
        var rating = 0
        var sumCredits = 0
        var sumMarks = 0
        for (let i in val) {
          let lesson = val[i]
          sumCredits += lesson.credits
          sumMarks += lesson.credits * lesson.mark
        }
        rating = sumMarks / sumCredits
        this.rating = rating.toFixed(2)
      },
      deep: true
    }
  },
  filters: {
    removeBrackets: function (string) {
      var newString
      if (string.indexOf('(') >= 1) {
        newString = string.substring(0, string.indexOf('('))
        return newString
      }
      return string
    },
    truncate: function (value, length = 25) {
      if (value.length < length) {
        return value
      }

      length = length - 3
      var begin = Math.round(length / 2)
      var end = length - begin
      console.log(end)
      return value.substring(0, begin) + '...' + value.slice(-end)
    }
  },
  methods: {
    fetchData: function () {
      var XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest
      var xhr = new XMLHttpRequest()
      var self = this
      xhr.open('GET', self.apiURL)
      xhr.onload = function () {
        var lessons = JSON.parse(xhr.responseText)
        var lessonsArray = []
        for (let lesson in lessons) {
          let credit = parseInt(lessons[lesson])
          let foreign = (lesson.indexOf('іноземних студентів')) >= 0
          if (!foreign && credit !== 0) {
            lessonsArray.push({name: lesson, credits: credit, mark: ''})
          }
        }
        self.loading = false
        self.lessons = lessonsArray
      }
      xhr.send()
    }
  }
}
</script>
<style lang="scss">
.loader {
    border: 16px solid #f3f3f3; /* Light grey */
    border-top: 16px solid #3498db; /* Blue */
    border-radius: 50%;
    width: 120px;
    height: 120px;
    animation: spin 1s linear infinite;
    margin:0 auto;
}

@keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}

.lessons {
  display: block;

  li {
    display: inline-block;
    margin-left: 5px;
  }

  li:first-child {
    margin-left:5px;
  }

  input {
    margin:2px;
    padding:2px;
    width:5em;
    float:right;
  }
}
</style>
