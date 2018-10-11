<template>
  <div id="app">
    <h1 class="title">  Addons catalog </h1>
    <table>
      <thead>
        <tr>
          <th>
            Name
          </th>
          <th>
            Version
          </th>
          <th>
            Unstable
          </th>
          <th>
            Compatibility
          </th>
          <th>
            Download
          </th>
        </tr> 
      </thead>
      <tbody>
        <tr v-for="addon in addons" :key="addon.name">
          <td>
            {{addon.name}}
          </td> 
          <td>
            {{addon.version}}
          </td> 
          <td>
            {{addon.unstable}}
          </td>
          <td>
            {{addon.compatibility}}
          </td>
          <td> 
            <a :href="addon.downloadUrl" ><i class="uiIconDownload"></i></a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>

export default {
  name: 'App',
  props: ['addons']
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
body {
  font-family: Helvetica Neue, Arial, sans-serif;
  font-size: 14px;
  color: #444;
}

table {
  border: 2px solid #578dc9;
  border-radius: 3px;
  background-color: #fff;
}

th {
  background-color: #578dc9;
  color: #f9f9f9;
}

td {
  background-color: #f9f9f9;
}

th, td {
  min-width: 120px;
  padding: 10px 20px;
}

.title{
  font-size: 34px;
  font-weight: bold;
  color: #578dc9;
  line-height: 30px;
  word-wrap: normal;
}
@font-face {
  font-family: 'PLF-FONT-ICONS';
  src: url('fonts/PLF-FONT-ICONS.eot?-m9uidt');
  src: url('fonts/PLF-FONT-ICONS.eot?#iefix-m9uidt') format('embedded-opentype'), url('fonts/PLF-FONT-ICONS.ttf?-m9uidt') format('truetype'), url('fonts/PLF-FONT-ICONS.woff?-m9uidt') format('woff'), url('fonts/PLF-FONT-ICONS.svg?-m9uidt#PLF-FONT-ICONS') format('svg');
  font-weight: normal;
  font-style: normal;
}
[class^="uiIcon"]  {
    font-family: "PLF-FONT-ICONS";
    font-style: normal;
    font-variant: normal;
    font-weight: normal;
    line-height: 1;
    text-transform: none;
    color: #578dc9;
    font-size: 14px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    display: inline-block;
    position: relative;
    top: 1px;
}
.uiIconDownload:before {
    content: "\e784";
}
</style>
