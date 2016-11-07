<template>
    <div id="app">
        <ul class="row years">
            <router-link v-for="value in 4" :id="value" class="six columns blocks" :to="{ name: 'lesson', params: { faculty: $route.params.faculty, profession: $route.params.profession, year: value }}" tag="li">
                {{ value }}
            </router-link>
        </ul>
    </div>
</template>
<script>
export default {
  data: function () {
    return {
    }
  }
}
</script>
