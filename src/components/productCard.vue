<template>
    <div>
            <div>
  <b-card :title="product.price.toString()"
          img-src="https://picsum.photos/600/300/?image=25"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 20rem;"
          class="mb-2">
    <p class="card-text">
      {{product.desc}}
    </p>
    <b-button href="#" variant="primary">Learn More</b-button>
  </b-card>
</div>
    </div>
</template>
<script>
export default {
    name:'product-card',
    components:{

    },
    props:['product']

}
</script>
