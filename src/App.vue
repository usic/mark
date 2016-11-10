<template>
  <div id="app" class="container">
    <router-view class="view"></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data: function () {
    return {}
  },
  filters: {
    truncate: function (value, length = 20) {
      if (value.length < length) {
        return value
      }

      length = length - 3

      return value.substring(0, length) + '...'
    }
  }
}
</script>

<style lang="scss">

  body {
    min-width: 320px;
  }

  a {
    text-decoration: none;
  }

  .title {
    color: #555555;
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
      font-size: 2em;
      margin: 2px 2px 2px 0;
      height: 2em;;
      cursor: pointer;
      text-align: center;
    }

    .professions {
      li {
        font-size: 1.5em;
      }
    }

    .container {
      padding:5px;
      margin:0 auto;
      width:96%;
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
      font-size: 2em;
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

