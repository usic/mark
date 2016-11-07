<template>
    <div id="app">
        <ul class="row lessons">
            <li v-for="(value, key) in lessons" :data-weight="value" class="six columns">
                {{ key }}
            </li>
        </ul>
      <div>
        Rating is: {{ rating }}
      </div>
    </div>
</template>
<script>
export default {
  data: function () {
    return {
      lessons: Array,
      term: 1,
      rating: 0,
      apiURL: 'https://api.usic.at/api/v1/courses/subjects?program=' + this.$route.params.profession + '&year=' + this.$route.params.year + '&term=1&level=Бакалавр&type=норм'
    }
  },
  created () {
    console.log(this.$route.params)
    this.fetchData()
  },
  methods: {
    fetchData: function () {
      var XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest
      var xhr = new XMLHttpRequest()
      var self = this
      xhr.open('GET', self.apiURL)
      xhr.onload = function () {
        self.lessons = JSON.parse(xhr.responseText)
        console.log(self.lessons)
      }
      xhr.send()
    }
  }
}
</script>
