<script setup>

const props = defineProps(['link']);

</script>

<template>

    <a class="btn" :href="props.link" target="_blank">
        <slot></slot>
    </a>

</template>

<style scoped lang="scss">


.btn {
  position: relative;
  padding: 1rem;
  border-radius: 7px;
  border: 1px solid $primary-color;
  text-transform: uppercase;
  font-weight: 600;
  letter-spacing: 2px;
  background: $background-btn;
  color: #fff;
  overflow: hidden;
  box-shadow: 0 0 0 0 transparent;
  -webkit-transition: all 0.2s ease-in;
  -moz-transition: all 0.2s ease-in;
  transition: all 0.2s ease-in;
  width: fit-content;
  cursor: pointer;
  gap: 0.5rem;

  display: flex;
  align-items: center;
  justify-content: center;
}

.btn:hover {
  background: $primary-color;
  box-shadow: 0 0 10px 5px $secondary-color;
  -webkit-transition: all 0.2s ease-out;
  -moz-transition: all 0.2s ease-out;
  transition: all 0.2s ease-out;
  border: 1px solid $background-btn;
}

.btn:hover::before {
  -webkit-animation: sh02 0.5s 0s linear;
  -moz-animation: sh02 0.5s 0s linear;
  animation: sh02 0.5s 0s linear;
}

.btn::before {
  content: '';
  display: block;
  width: 0px;
  height: 86%;
  position: absolute;
  top: 7%;
  left: 0%;
  opacity: 0;
  background: #fff;
  box-shadow: 0 0 50px 30px #fff;
  -webkit-transform: skewX(-20deg);
  -moz-transform: skewX(-20deg);
  -ms-transform: skewX(-20deg);
  -o-transform: skewX(-20deg);
  transform: skewX(-20deg);
}

@keyframes sh02 {
  from {
    opacity: 0;
    left: 0%;
  }

  50% {
    opacity: 1;
  }

  to {
    opacity: 0;
    left: 100%;
  }
}

.btn:active {
  box-shadow: 0 0 0 0 transparent;
  -webkit-transition: box-shadow 0.2s ease-in;
  -moz-transition: box-shadow 0.2s ease-in;
  transition: box-shadow 0.2s ease-in;
}


</style>