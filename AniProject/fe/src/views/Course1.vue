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
          <h4 class="title font-weight-light">마쓰야마 도고온천</h4>
          <p class="category d-inline-flex font-weight-light">
            <v-icon
              color="green"
              smalls
            >
              mdi-arrow-up
            </v-icon>
            <span class="green--text">특징</span>&nbsp;
            센이 일하던 온천
          </p>
          <template slot="actions">
            <v-icon
              class="mr-2"
              small
            >
              mdi-clock-outline
            </v-icon>
            <span class="caption grey--text font-weight-light">예상 소요 시간 : 40분</span>
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
          <h4 class="title font-weight-light">야마가타현 아유카와마을 삼나무</h4>
          <p class="category d-inline-flex font-weight-light">
            <v-icon
              color="green"
              smalls
            >
              mdi-arrow-up
            </v-icon>
            <span class="green--text">특징</span>&nbsp;
            토토로의 큰 나무
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
          <h4 class="title font-weight-light">도모노우라 항</h4>
          <p class="category d-inline-flex font-weight-light">
            <v-icon
              color="green"
              smalls
            >
              mdi-arrow-up
            </v-icon>
            <span class="green--text">특징</span>&nbsp;
            미야자기 하야오가 포뇨를 구상한 곳
          </p>
          <template slot="actions">
            <v-icon
              class="mr-2"
              small
            >
              mdi-clock-outline
            </v-icon>
            <span class="caption grey--text font-weight-light">예상 소요 시간 : 90분</span>
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
          <h4 class="title font-weight-light">히에 신사</h4>
          <p class="category d-inline-flex font-weight-light">
            <v-icon
              color="green"
              smalls
            >
              mdi-arrow-up
            </v-icon>
            <span class="green--text">특징</span>&nbsp;
            미츠하가 살던 곳의 도리이가 있는 신사
          </p>
          <template slot="actions">
            <v-icon
              class="mr-2"
              small
            >
              mdi-clock-outline
            </v-icon>
            <span class="caption grey--text font-weight-light">예상 소요 시간 : 30분</span>
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
          <h4 class="title font-weight-light">스가 신사</h4>
          <p class="category d-inline-flex font-weight-light">
            <v-icon
              color="green"
              smalls
            >
              mdi-arrow-up
            </v-icon>
            <span class="green--text">특징</span>&nbsp;
            타키와 미츠하가 재회하는 계단
          </p>
          <template slot="actions">
            <v-icon
              class="mr-2"
              small
            >
              mdi-clock-outline
            </v-icon>
            <span class="caption grey--text font-weight-light">예상 소요 시간 : 50분</span>
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
          <h4 class="title font-weight-light">히다후루카와 역</h4>
          <p class="category d-inline-flex font-weight-light">
            <v-icon
              color="green"
              smalls
            >
              mdi-arrow-up
            </v-icon>
            <span class="green--text">특징</span>&nbsp;
            미츠하의 흔적을 찾기 위해 들른 곳
          </p>
          <template slot="actions">
            <v-icon
              class="mr-2"
              small
            >
              mdi-clock-outline
            </v-icon>
            <span class="caption grey--text font-weight-light">예상 소요 시간 : 40분</span>
          </template>
        </material-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import axios from 'axios'
export default {
    mounted () {
    axios.get('http://localhost:3000')
      .then((r) => {
        this.places = r.data.users
        console.log(this.places)
      })
      .catch((e) => {
        console.error(e.message)
      })
  },
  data () {
    return {
      places: [],
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
