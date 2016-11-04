<template>
  <div id="app" class="container">
    <!--<ul id="marks">-->
    <!--<li v-for="faculty in faculties" class="column three" :id="faculty.name" v-on:click="log">{{ faculty.text }}</li>-->
    <!--</ul>-->
    <h2>{{ getTrimester() }}</h2>
    <div class="row faculty">ФПрН</div>
    <div class="row">
      <span class="three columns specialty">
        <div class="row">біологія</div>
        <div class="row year">
          <span class="three columns">1</span>
          <span class="three columns">2</span>
          <span class="three columns">3</span>
          <span class="three columns">4</span>
        </div>
        <div class="row tremester">
          <span class="four columns">1</span>
          <span class="four columns">2</span>
          <span class="four columns">3</span>
        </div>
      </span>
      <span class="three columns specialty">
        <div class="row">екологія</div>
         <div class="row year">
          <span class="three columns">1</span>
          <span class="three columns">2</span>
          <span class="three columns">3</span>
          <span class="three columns">4</span>
        </div>
        <div class="row tremester">
          <span class="four columns">1</span>
          <span class="four columns">2</span>
          <span class="four columns">3</span>
        </div>
      </span>
      <span class="three columns specialty">
        <div class="row">фізика</div>
         <div class="row year">
          <span class="three columns">1</span>
          <span class="three columns">2</span>
          <span class="three columns">3</span>
          <span class="three columns">4</span>
        </div>
        <div class="row tremester">
          <span class="four columns">1</span>
          <span class="four columns">2</span>
          <span class="four columns">3</span>
        </div>
      </span>
      <span class="three columns specialty">
        <div class="row">хімія</div>
        <div class="row year">
          <span class="three columns">1</span>
          <span class="three columns">2</span>
          <span class="three columns">3</span>
          <span class="three columns">4</span>
        </div>
        <div class="row tremester">
          <span class="four columns">1</span>
          <span class="four columns">2</span>
          <span class="four columns">3</span>
        </div>
      </span>
    </div>
    <div class="row faculty">ФПрН</div>
    <div class="row">
      <span class="three columns specialty">
        <div class="row">біологія</div>
        <div class="row year">
          <span class="three columns">1</span>
          <span class="three columns">2</span>
          <span class="three columns">3</span>
          <span class="three columns">4</span>
        </div>
        <div class="row tremester">
          <span class="four columns">1</span>
          <span class="four columns">2</span>
          <span class="four columns">3</span>
        </div>
      </span>
      <span class="three columns specialty">
        <div class="row">екологія</div>
         <div class="row year">
          <span class="three columns">1</span>
          <span class="three columns">2</span>
          <span class="three columns">3</span>
          <span class="three columns">4</span>
        </div>
        <div class="row tremester">
          <span class="four columns">1</span>
          <span class="four columns">2</span>
          <span class="four columns">3</span>
        </div>
      </span>
      <span class="three columns specialty">
        <div class="row">фізика</div>
         <div class="row year">
          <span class="three columns">1</span>
          <span class="three columns">2</span>
          <span class="three columns">3</span>
          <span class="three columns">4</span>
        </div>
        <div class="row tremester">
          <span class="four columns">1</span>
          <span class="four columns">2</span>
          <span class="four columns">3</span>
        </div>
      </span>
      <span class="three columns specialty">
        <div class="row">хімія</div>
        <div class="row year">
          <span class="three columns">1</span>
          <span class="three columns">2</span>
          <span class="three columns">3</span>
          <span class="three columns">4</span>
        </div>
        <div class="row tremester">
          <span class="four columns">1</span>
          <span class="four columns">2</span>
          <span class="four columns">3</span>
        </div>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data: function () {
    return {
      faculties: [
        {'name': 'фі', 'text': 'Інформатикам'},
        {'name': 'фпрн', 'text': 'Природничникам'},
        {'name': 'фпвн', 'text': 'Правникам'},
        {'name': 'фен', 'text': 'Економістам'},
        {'name': 'фгн', 'text': 'Гуманітаріям'},
        {'name': 'фснст', 'text': 'Соціологам'}
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
  body {
    min-width: 320px;
  }

  .faculty {
    font-size: 2em;
  }

  .specialty {
    border: 1px solid #0FA0CE;
  }

  .year {
    span {
      text-align: center;
      background-color: #555555;
    }
  }

  .tremester {
    span {
      text-align: center;
      background-color: #0FA0CE;
    }
  }

  .blocks {
    display: inline-block;
    border-radius: 4px;
    border: 2px solid #cecece;
    vertical-align: middle;
    list-style: none;
    font-size: 2em;
    margin: 20px;
    cursor: pointer;
    text-align: center;
  }

  li:hover {
    border: 2px solid #8A2BE2;
  }

  /* Larger than mobile */
  @media (min-width: 400px) {

  }

  @media (min-width: 550px) {
    #marks {
      li {
        display: inline-block;
        border-radius: 4px;
        border: 2px solid #cecece;
        vertical-align: middle;
        list-style: none;
        font-size: 1.5em;
        margin: 20px;
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

