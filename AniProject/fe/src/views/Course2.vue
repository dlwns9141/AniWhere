<template>
  <v-container
    fill-height
    fluid
    grid-list-xl
  >
    <v-layout wrap>
      <v-flex
        md12
        sm12
        lg4
      >
        <material-card>
          <v-flex>
              <v-img :aspect-ratio="16/9" src="https://cdn.vuetifyjs.com/images/parallax/material.jpg">
              </v-img>
          </v-flex>
          <h4 class="title font-weight-light">Daily Sales</h4>
          <p class="category d-inline-flex font-weight-light">
            <v-icon
              color="green"
              smalls
            >
              mdi-arrow-up
            </v-icon>
            <span class="green--text">55%</span>&nbsp;
            increase in today's sales
          </p>
          <template slot="actions">
            <v-icon
              class="mr-2"
              small
            >
              mdi-clock-outline
            </v-icon>
            <span class="caption grey--text font-weight-light">updated 4 minutes ago</span>
          </template>
        </material-card>
      </v-flex>
      <v-flex
        md12
        sm12
        lg4
      >
        <material-card>
          <v-flex>
              <v-img :aspect-ratio="16/9" src="https://cdn.vuetifyjs.com/images/parallax/material.jpg">
              </v-img>
          </v-flex>
          <h4 class="title font-weight-light">여행지</h4>
          <p class="category d-inline-flex font-weight-light">
            <v-icon
              color="green"
              smalls
            >
              mdi-arrow-up
            </v-icon>
            <span class="green--text">55%</span>&nbsp;
            increase in today's sales
          </p>
          <template slot="actions">
            <v-icon
              class="mr-2"
              small
            >
              mdi-clock-outline
            </v-icon>
            <span class="caption grey--text font-weight-light">updated 4 minutes ago</span>
          </template>
        </material-card>
      </v-flex>
      <v-flex
        md12
        sm12
        lg4
      >
        <material-card>
          <v-flex>
              <v-img :aspect-ratio="16/9" src="https://cdn.vuetifyjs.com/images/parallax/material.jpg">
              </v-img>
          </v-flex>
          <h4 class="title font-weight-light">여행지</h4>
          <p class="category d-inline-flex font-weight-light">
            <v-icon
              color="green"
              smalls
            >
              mdi-arrow-up
            </v-icon>
            <span class="green--text">55%</span>&nbsp;
            increase in today's sales
          </p>
          <template slot="actions">
            <v-icon
              class="mr-2"
              small
            >
              mdi-clock-outline
            </v-icon>
            <span class="caption grey--text font-weight-light">updated 4 minutes ago</span>
          </template>
        </material-card>
      </v-flex>
      <v-flex>
        <material-card
          color="orange"
          title="Employee Stats"
          text="New employees on 15th September, 2016"
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
                class="font-weight-light text-warning text--darken-3"
                v-text="header.text"
              />
            </template>
            <template
              slot="items"
              slot-scope="{ index, item }"
            >
              <td>{{ index + 1 }}</td>
              <td>{{ item.name }}</td>
              <td class="text-xs-right">{{ item.salary }}</td>
              <td class="text-xs-right">{{ item.country }}</td>
              <td class="text-xs-right">{{ item.city }}</td>
            </template>
          </v-data-table>
        </material-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      headers: [
        {
          sortable: false,
          text: 'ID',
          value: 'id'
        },
        {
          sortable: false,
          text: 'Name',
          value: 'name'
        },
        {
          sortable: false,
          text: 'Salary',
          value: 'salary',
          align: 'right'
        },
        {
          sortable: false,
          text: 'Country',
          value: 'country',
          align: 'right'
        },
        {
          sortable: false,
          text: 'City',
          value: 'city',
          align: 'right'
        }
      ],
      items: [
        {
          name: 'Dakota Rice',
          country: 'Niger',
          city: 'Oud-Tunrhout',
          salary: '$35,738'
        },
        {
          name: 'Minerva Hooper',
          country: 'Curaçao',
          city: 'Sinaai-Waas',
          salary: '$23,738'
        }, {
          name: 'Sage Rodriguez',
          country: 'Netherlands',
          city: 'Overland Park',
          salary: '$56,142'
        }, {
          name: 'Philip Chanley',
          country: 'Korea, South',
          city: 'Gloucester',
          salary: '$38,735'
        }, {
          name: 'Doris Greene',
          country: 'Malawi',
          city: 'Feldkirchen in Kārnten',
          salary: '$63,542'
        }
      ],
      tabs: 0,
      list: {
        0: false,
        1: false,
        2: false
      }
    }
  },
  methods: {
    complete (index) {
      this.list[index] = !this.list[index]
    }
  }
}
</script>
