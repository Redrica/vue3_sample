<template>
  <div class="screen">
    <h2 class="screen__title">Video №11 – Teleport</h2>
    <hr>

<!--    value of "to" must be a valid DOM query selector: tag, .class, #id, [data-attribute] or reactiveProperty via :to -->
<!--    disabled attribute responsible for teleport action: when it's true – the html stays inside parent component
and when it is false – html will be teleported -->
<!--    we can use v-if rendering to show teleport's content only after teleport action-->
    <teleport to="#end-of-body" :disabled="!isTeleported" v-if="isTeleported">
      This should be at the end.

      <video :autoplay="true" :loop="true" width="250">
        <source src="../../../public/holemaker.webm" type="video/mp4"/>
      </video>
    </teleport>

<!--    if we have two (or more) teleports they will work independently, so it is possible to teleport only one
 and leave the others. I suppose it works using appendChild method so is I T. 1st one, then second,
  then first back and forth – it ends up in the end of place. -->
    <teleport to="#end-of-body" :disabled="!isTeleportedToo" v-if="isTeleportedToo">
      The second text to teleport
    </teleport>

    <div>
      This should be at he top.
    </div>
    <button @click="isTeleported = !isTeleported">{{ `${isTeleported ? 'Bring first back' : 'Teleport first!' }` }}</button>
    <button @click="isTeleportedToo = !isTeleportedToo">{{ `${isTeleportedToo ? 'Bring second back' : 'Teleport second!' }` }}</button>

  </div>
</template>

<script>
import { ref } from 'vue';
export default {
  name: 'VideoTeleport',
  setup() {
    const isTeleported = ref(false);
    const isTeleportedToo = ref(false);
    return { isTeleported, isTeleportedToo };
  },
}
</script>

<style>

</style>
