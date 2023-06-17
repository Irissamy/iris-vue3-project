<template>
  <div>
    <LoadingOverlay :active="isLoading"></LoadingOverlay>
    <div class="text-end mt-4">
      <button class="btn btn-primary" @click="openCuponModal(true)">
        建立新的優惠券
      </button>
    </div>
    <table class="table mt-4">
      <thead>
      <tr>
        <th>名稱</th>
        <th>折扣百分比</th>
        <th>到期日</th>
        <th>是否啟用</th>
        <th>編輯</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="item in cuponList" :key="item.id">
        <td>{{ item.title }}</td>
        <td>{{ item.percent }}%</td>
        <td>{{ $filters.date(item.due_date) }}</td>
        <td>
          <span v-if="item.is_enabled === 1" class="text-success">啟用</span>
          <span v-if="item.is_enabled === 0" class="text-muted">未啟用</span>
        </td>
        <td>
          <div class="btn-group">
            <button class="btn btn-outline-primary btn-sm" @click="openCuponModal(false,item)">編輯</button>
            <button class="btn btn-outline-danger btn-sm" @click="delCuponModal(item)">刪除</button>
          </div>
        </td>
      </tr>
      </tbody>
    </table>
    <CuponModal ref="cuponModal" :tempCupon="tempCupon" @update-cupon="updateCupon"></CuponModal>
    <DeleteModal ref="deleteModal" :delete-item="tempCupon" @delete-product="deleteCupon"></DeleteModal>
  </div>
</template>

<script>
import CuponModal from '@/components/CuponModal.vue'
import DeleteModal from '@/components/DeleteModal.vue'

export default {
  components: {
    CuponModal,
    DeleteModal
  },
  props: {
    config: Object
  },
  data () {
    return {
      cuponList: {},
      tempCupon: {
        title: '',
        is_enabled: 0,
        percent: 100,
        code: ''
      },
      pagination: {},
      isLoading: false,
      isNew: false
    }
  },
  methods: {
    openCuponModal (isNew, item) {
      this.isNew = isNew
      if (this.isNew) {
        this.tempCupon = {
          due_date: new Date().getTime() / 1000
        }
      } else {
        this.tempCupon = { ...item }
      }
      this.$refs.cuponModal.showModal()
    },
    delCuponModal (item) {
      this.tempCupon = { ...item }
      this.$refs.deleteModal.showModal()
    },
    getCupon () {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/coupons`
      this.isLoading = true
      this.$http.get(api)
        .then((res) => {
          this.cuponList = res.data.coupons
          this.isLoading = false
        })
    },
    updateCupon (item) {
      this.tempCupon = item
      let api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/coupon`
      let httpMethods = 'post'
      if (!this.isNew) {
        api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/coupon/${item.id}`
        httpMethods = 'put'
      }

      this.$http[httpMethods](api, { data: this.tempCupon })
        .then((res) => {
          this.getCupon()
          this.$refs.cuponModal.hideModal()
        })
    },
    deleteCupon () {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/coupon/${this.tempCupon.id}`
      this.$http.delete(api)
        .then((res) => {
          this.getCupon()
          this.$refs.deleteModal.hideModal()
        })
    }
  },
  created () {
    this.getCupon()
  }

}
</script>
