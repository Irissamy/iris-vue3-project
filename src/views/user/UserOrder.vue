<template>
    <LoadingOverlay :active="isLoading"></LoadingOverlay>
    <div class="my-5 d-flex flex-column align-items-center">
        <div class="col-md-6 mb-4" v-for="item in orderList" :key="item.id">
            <table class="table align-middle">
                <thead>
                <th>品名</th>
                <th>數量</th>
                <th>單價</th>
                </thead>
                <tbody>
                <tr v-for="el in item.products" :key="el.id">
                    <td>{{ el.product.title }}</td>
                    <td>{{ el.qty }} / {{ el.product.unit }}</td>
                    <td class="text-end">{{ el.final_total }}</td>
                </tr>
                </tbody>
                <tfoot>
                <tr>
                    <td colspan="2" class="text-end">總計</td>
                    <td class="text-end">{{ item.total }}</td>
                </tr>
                </tfoot>
            </table>

            <table class="table">
                <tbody>
                <tr>
                    <th width="100">Email</th>
                    <td>{{ item.user.email }}</td>
                </tr>
                <tr>
                    <th>姓名</th>
                    <td>{{ item.user.name }}</td>
                </tr>
                <tr>
                    <th>收件人電話</th>
                    <td>{{ item.user.tel }}</td>
                </tr>
                <tr>
                    <th>收件人地址</th>
                    <td>{{ item.user.address }}</td>
                </tr>
                <tr>
                    <th>付款狀態</th>
                    <td>
                    <span v-if="!item.is_paid" class="text-success">付款完成</span>
                    <span v-else class="text-danger">尚未付款</span>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>

export default {
  data () {
    return {
      orderList: {},
      pagination: {},
      isLoading: false
    }
  },
  methods: {
    getOrder (page = 1) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/orders?page=${page}`
      this.$http.get(api)
        .then((res) => {
          if (res.data.success) {
            this.orderList = res.data.orders
            this.pagination = res.data.pagination
          }
        })
    }
  },
  created () {
    this.getOrder()
  }
}
</script>
