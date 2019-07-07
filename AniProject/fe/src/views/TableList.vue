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
            :items="items"
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
              slot="items"
              slot-scope="{ item }"
            >
              <td>{{ item.name }}</td>
              <td>{{ item.country }}</td>
              <td>{{ item.city }}</td>
              <td class="text-xs-right">{{ item.salary }}</td>
            </template>
          </v-data-table>
        </material-card>
      </v-flex>

    </v-layout>
  </v-container>
</template>

<script>
export default {
  data: () => ({
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
    ],
    items: [
      {
        movie: 'Dakota Rice',
        place: 'Niger',
        content: 'Oud-Tunrhout'
      },
      {
        movie: 'Minerva Hooper',
        place: 'Curaçao',
        content: 'Sinaai-Waas'
      }, {
        movie: 'Sage Rodriguez',
        place: 'Netherlands',
        content: 'Overland Park'
      }, {
        movie: 'Philip Chanley',
        place: 'Korea, South',
        content: 'Gloucester'
      }, {
        movie: 'Doris Greene',
        place: 'Malawi',
        content: 'Feldkirchen in Kārnten'
      }, {
        movie: 'Mason Porter',
        place: 'Chile',
        content: 'Gloucester'
      }
    ]
  })
}
</script>
