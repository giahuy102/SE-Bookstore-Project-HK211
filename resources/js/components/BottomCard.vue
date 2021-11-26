<template>
  <div class="card">
        <div class="card-body">
          <div class="card-title"><b>{{this.title}}</b></div>
          <!-- <ul class="list-group list-group-flush">
            <li class="list-group-item">Novel</li>
            <li class="list-group-item">Science fiction</li>
            <li class="list-group-item">Manga</li>
          </ul> -->
          <table class="list-group list-group-flush">
            <tr  class="list-group-item">
                <td>{{this.itemList[0].name}}    </td> <td> {{this.itemList[0].value}}  </td>
            </tr> 

            <tr  class="list-group-item">
                <td> {{this.itemList[1].name}}   </td> <td> {{this.itemList[1].value}} </td>
            </tr>

            <tr  class="list-group-item">
                <td> {{this.itemList[2].name}}   </td> <td> {{this.itemList[2].value}} </td>
            </tr>
        </table>
        </div>
        
      </div>
</template>

<script>
export default {
    props: ['title', 'itemList']
}
</script>

<style>

</style>
