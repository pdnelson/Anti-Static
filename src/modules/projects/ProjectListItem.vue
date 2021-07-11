<template>
    <div class="proj-heading">
        <div class="proj-name"> {{project.name}}</div> 
        <div class="proj-year">{{project.year}}</div> 
    </div>
</template>

<script>
export default {
  props: {
    project: {
      type: Object
    }
  }
};
</script>

<style scoped>
    .proj-heading {
        margin: auto;
        width: 90%;
        padding: 20px;
        border-radius: 25px;
        border: 1px solid white;
        margin-bottom: 10px;
        cursor: pointer;
        transition: box-shadow 0.2s linear;
        transition: background-color 0.2s linear;
    }

    .proj-heading:hover {
        box-shadow: 0px 0px 8px black;
        background-color: grey;
    }

    .proj-name {
        float: left;
        vertical-align: middle;
        line-height: 5px;
        opacity: 1;
    }

    .proj-year {
        float: right;
        vertical-align: middle;
        line-height: 5px;
        opacity: 1;
    }

    @media screen and (max-width: 620px) {
        .proj-heading {
            font-size: 10pt;
        }
    }
</style>