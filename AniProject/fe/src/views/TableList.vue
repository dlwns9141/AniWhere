<template>
  <v-container
    fill-height
    fluid
    grid-list-xl
  >
    <v-layout
      justify-center
      wrap
    >
      <v-flex
        md12
      >
        <material-card
          color="green"
          title="코스 이름"
          text="부가 설명"
        >
          <v-data-table
            :headers="headers"
            :items="places"
            hide-actions
          >
            <template
              slot="headerCell"
              slot-scope="{ header }"
            >
              <span
                class="subheading font-weight-light text-success text--darken-3"
                v-text="header.text"
              />
            </template>
            <template
              v-slot:items="places"
            >
              <td>{{ places.item.movie }}</td>
              <td>{{ places.item.place }}</td>
              <td>{{ places.item.content }}</td>
            </template>
          </v-data-table>
        </material-card>
      </v-flex>

    </v-layout>
  </v-container>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      places: [],
      headers: [
      {
        sortable: false,
        text: '영화 이름',
        value: 'movie'
      },
      {
        sortable: false,
        text: '장소',
        value: 'place'
      },
      {
        sortable: false,
        text: '설명',
        value: 'content'
      }
    ]
    }
  },
  mounted () {
    axios.get('http://localhost:3000/')
      .then((r) => {
        this.places = r.data.users
        console.log(r)
      })
      .catch((e) => {
        console.error(e.message)
      })
  }
}
</script>
