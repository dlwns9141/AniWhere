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
              <v-img :aspect-ratio="16/9" src="AniProject\fe\src\img\howl\test1.png">
              </v-img>
          </v-flex>
          <h4 class="title font-weight-light">장소 이름</h4>
          <p class="category d-inline-flex font-weight-light">
            <v-icon
              color="green"
              smalls
            >
              mdi-arrow-up
            </v-icon>
            <span class="green--text">특징</span>&nbsp;
            내용
          </p>
          <template slot="actions">
            <v-icon
              class="mr-2"
              small
            >
              mdi-clock-outline
            </v-icon>
            <span class="caption grey--text font-weight-light">예상 소요 시간 : xx분</span>
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
          <h4 class="title font-weight-light">장소 이름</h4>
          <p class="category d-inline-flex font-weight-light">
            <v-icon
              color="green"
              smalls
            >
              mdi-arrow-up
            </v-icon>
            <span class="green--text">특징</span>&nbsp;
            내용
          </p>
          <template slot="actions">
            <v-icon
              class="mr-2"
              small
            >
              mdi-clock-outline
            </v-icon>
            <span class="caption grey--text font-weight-light">예상 소요 시간 : xx분</span>
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
          <h4 class="title font-weight-light">장소 이름</h4>
          <p class="category d-inline-flex font-weight-light">
            <v-icon
              color="green"
              smalls
            >
              mdi-arrow-up
            </v-icon>
            <span class="green--text">특징</span>&nbsp;
            내용
          </p>
          <template slot="actions">
            <v-icon
              class="mr-2"
              small
            >
              mdi-clock-outline
            </v-icon>
            <span class="caption grey--text font-weight-light">예상 소요 시간 : xx분</span>
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
          <h4 class="title font-weight-light">장소 이름</h4>
          <p class="category d-inline-flex font-weight-light">
            <v-icon
              color="green"
              smalls
            >
              mdi-arrow-up
            </v-icon>
            <span class="green--text">특징</span>&nbsp;
            내용
          </p>
          <template slot="actions">
            <v-icon
              class="mr-2"
              small
            >
              mdi-clock-outline
            </v-icon>
            <span class="caption grey--text font-weight-light">예상 소요 시간 : xx분</span>
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
          <h4 class="title font-weight-light">장소 이름</h4>
          <p class="category d-inline-flex font-weight-light">
            <v-icon
              color="green"
              smalls
            >
              mdi-arrow-up
            </v-icon>
            <span class="green--text">특징</span>&nbsp;
            내용
          </p>
          <template slot="actions">
            <v-icon
              class="mr-2"
              small
            >
              mdi-clock-outline
            </v-icon>
            <span class="caption grey--text font-weight-light">예상 소요 시간 : xx분</span>
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
          <h4 class="title font-weight-light">장소 이름</h4>
          <p class="category d-inline-flex font-weight-light">
            <v-icon
              color="green"
              smalls
            >
              mdi-arrow-up
            </v-icon>
            <span class="green--text">특징</span>&nbsp;
            내용
          </p>
          <template slot="actions">
            <v-icon
              class="mr-2"
              small
            >
              mdi-clock-outline
            </v-icon>
            <span class="caption grey--text font-weight-light">예상 소요 시간 : xx분</span>
          </template>
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
