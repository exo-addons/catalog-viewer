<template>
  <div id="app">
    <h1 class="title">  The list of Addons :</h1>
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
            DownloadUrl
          </th>
        </tr> 
      </thead>
      <tbody>
        <tr v-for="list in lists" :key="list.name">
          <td>
            {{list.name}}
          </td> 
          <td>
            {{list.version}}
          </td> 
          <td>
            {{list.unstable}}
          </td>
          <td>
            {{list.compatibility}}
          </td>
          <td> 
            <a :href="list.downloadUrl">path: {{list.downloadUrl}}</a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>

export default {
  name: 'App',
  props: ['lists']
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
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

td {
  background-color: #f9f9f9;
}

th, td {
  min-width: 120px;
  padding: 10px 20px;
}

th.active {
  color: #fff;
}

th.active .arrow {
  opacity: 1;
}

.arrow {
  display: inline-block;
  vertical-align: middle;
  width: 0;
  height: 0;
  margin-left: 5px;
  opacity: 0.66;
}

.arrow.asc {
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-bottom: 4px solid #fff;
}

.arrow.dsc {
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-top: 4px solid #fff;
}
.title{
  font-size: 34px;
  font-weight: bold;
  color: #578dc9;
  line-height: 30px;
  word-wrap: normal;
}
</style>
