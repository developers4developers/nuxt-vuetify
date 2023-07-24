<script setup>
import BaselineIcon from '~icons/ic/baseline-add-to-drive'
</script>

<template>
  <v-container>
    <v-row>
      <v-col>
        <v-sheet
          class="pa-4 d-flex align-center flex-column"
          color="grey-lighten-3"
          rounded="lg"
        >
          <div>
            @invictus.codes/nuxt-vuetify by <a href="https://invictus.codes">
            invictus.codes
          </a>
            <v-icon :icon="BaselineIcon"/>
          </div>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>
