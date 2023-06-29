<template>
    <table class="table mt-4">
    <thead>
    <tr>
      <th>購買時間</th>
      <th>Email</th>
      <th>購買款項</th>
      <th>應付金額</th>
      <th>是否付款</th>
      <th>編輯</th>
    </tr>
    </thead>
    <tbody>
      <tr v-for="item in orderList" :key="item.id">
        <td>{{ item.create_at }}</td>
        <td>{{ item.user.email }}</td>
        <td>
          <ul class="list-unstyled">
            <li v-for="el in item.products" :key="el.id">
              {{ el.product.title }}
             / 數量：{{ el.product.num }}
            </li>
          </ul>
        </td>
        <td class="text-right">{{ item.total }}</td>
        <td>
          <div class="form-check form-switch">
            <input class="form-check-input" type="checkbox" v-model="item.is_paid">
            <label class="form-check-label">
              <span v-if="item.is_paid">已付款</span>
              <span v-else>未付款</span>
            </label>
          </div>
        </td>
        <td>
          <div class="btn-group">
            <button class="btn btn-outline-primary btn-sm">檢視</button>
            <button class="btn btn-outline-danger btn-sm">刪除</button>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>

export default {
  data () {
    return {
      orderList: [],
      pagination: {}
    }
  },
  methods: {
    getOrderList (page = 1) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/orders/?page=${page}`
      this.$http.get(api)
        .then((res) => {
          if (res.data.success) {
            this.orderList = res.data.orders
          } else {
            console.log(res.data.messages)
          }
        })
    }
  },
  created () {
    this.getOrderList()
  }

}
</script>
