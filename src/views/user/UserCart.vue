<template>
  <LoadingOverlay :active="isLoading"></LoadingOverlay>
  <div class="container">
    <div class="row mt-4">
      <div class="col-md-7">
        <table class="table align-middle">
          <thead>
          <tr>
            <th>圖片</th>
            <th>商品名稱</th>
            <th>價格</th>
            <th></th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="(item) in productList" :key="item.id">
            <td style="width: 200px">
              <div v-if="item.imageUrl" style="height: 100px; background-size: cover; background-position: center; background-repeat:no-repeat;"
              :style="{backgroundImage: `url(${item.imageUrl})`}"></div>
              <div v-else style="height: 100px; background-size: cover; background-position: center; background-repeat:no-repeat; background-image:url('data:image/png;base64,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')"></div>
            </td>
            <td><a href="#" class="text-dark">{{ item.title }}</a></td>
            <td>
              <div class="h5" v-if="!item.price">{{ item.origin_price }}元</div>
              <del class="h6" v-if="item.price">原價 {{ item.origin_price }} 元</del>
              <div class="h5" v-if="item.price">現在只要 {{ item.price }} 元</div>
            </td>
            <td>
              <div class="btn-group btn-group-sm">
                <button type="button" class="btn btn-outline-secondary" @click="getProductsDetail(item)">
                  查看更多
                </button>
                <button type="button" class="btn btn-outline-danger" :disabled="this.status.loadingItem === item.id" @click="addToCart(item)">
                  <div v-if="this.status.loadingItem === item.id"
                      class="spinner-grow text-danger spinner-grow-sm" role="status">
                    <span class="visually-hidden">Loading...</span>
                  </div>
                  加到購物車
                </button>
              </div>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
      <!-- 購物車列表 -->
      <div class="col-md-5">
        <div class="sticky-top">
          <table class="table align-middle">
            <thead>
              <tr>
                <th></th>
                <th>品名</th>
                <th style="width: 110px">數量</th>
                <th>單價</th>
              </tr>
            </thead>
            <tbody>
            <template v-if="cartList.carts">
              <tr v-for="item in cartList.carts" :key="item.id">
                <td>
                  <button type="button" class="btn btn-outline-danger btn-sm"
                  :disabled="status.loadingItem === item.id" @click="deleteCart(item)">
                    <i class="bi bi-x"></i>
                  </button>
                </td>
                <td>
                  {{ item.product.title }}
                  <div class="text-success" v-if="item.coupon">
                    已套用優惠券
                  </div>
                </td>
                <td>
                  <div class="input-group input-group-sm">
                    <input type="number" min="1" class="form-control" :disabled="item.id === status.loadingItem" v-model.number="item.qty" @change="updateCart(item)">
                    <div class="input-group-text">/ {{ item.product.unit }}</div>
                  </div>
                </td>
                <td class="text-end">
                  <small v-if="item.final_total !== item.total" class="text-success">折扣價：</small>
                  {{ $filters.currency(item.final_total) }}
                </td>
              </tr>
            </template>
            </tbody>
            <tfoot>
            <tr>
              <td colspan="3" class="text-end">總計</td>
              <td class="text-end">{{ $filters.currency(cartList.total) }}</td>
            </tr>
            <tr v-if="cartList.final_total !== cartList.total">
              <td colspan="3" class="text-end text-success">折扣價</td>
              <td class="text-end text-success">{{ $filters.currency(cartList.final_total) }}</td>
            </tr>
            </tfoot>
          </table>
          <div class="input-group mb-3 input-group-sm">
            <input type="text" class="form-control" placeholder="請輸入優惠碼" v-model="cuponCode">
            <div class="input-group-append">
              <button class="btn btn-outline-secondary" type="button" @click="useCupon">
                套用優惠碼
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 送出訂單表單 -->
    <div class="my-5 row justify-content-center">
      <VForm class="col-md-6" v-slot="{ errors }"  @submit="createOrder">
        <div class="mb-3">
          <label for="email" class="form-label">Email</label>
          <VField id="email" name="email" type="email" class="form-control"
                  :class="{'is-invalid': errors['email']}"
                  rules="email|required"
                  placeholder="請輸入 Email" v-model="form.user.email"></VField>
          <VErrorMessage name="email" class="invalid-feedback"></VErrorMessage>
        </div>

        <div class="mb-3">
          <label for="name" class="form-label">收件人姓名</label>
          <VField id="name" name="姓名" type="text" class="form-control"
                  :class="{'is-invalid': errors['姓名']}"
                  rules="required"
                  placeholder="請輸入姓名" v-model="form.user.name"></VField>
          <VErrorMessage name="姓名" class="invalid-feedback"></VErrorMessage>
        </div>

        <div class="mb-3">
          <label for="tel" class="form-label">收件人電話</label>
          <VField id="tel" name="電話" type="tel" class="form-control"
                  :class="{'is-invalid': errors['電話']}"
                  rules="required"
                  placeholder="請輸入電話" v-model="form.user.tel"></VField>
          <VErrorMessage name="電話" class="invalid-feedback"></VErrorMessage>
        </div>

        <div class="mb-3">
          <label for="address" class="form-label">收件人地址</label>
          <VField id="address" name="地址" type="text" class="form-control"
                  :class="{'is-invalid': errors['地址']}"
                  rules="required"
                  placeholder="請輸入地址" v-model="form.user.address"></VField>
          <VErrorMessage name="地址" class="invalid-feedback"></VErrorMessage>
        </div>

        <div class="mb-3">
          <label for="message" class="form-label">留言</label>
          <textarea name="" id="message" class="form-control" cols="30" rows="10" v-model="form.message"></textarea>
        </div>
        <div class="text-end">
          <button class="btn btn-danger">送出訂單</button>
        </div>
      </VForm>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      productList: {},
      isLoading: false,
      status: {
        // 對應品項 id
        loadingItem: ''
      },
      cartList: {},
      cuponCode: '',
      form: {
        user: {
          name: '',
          email: '',
          tel: '',
          address: ''
        },
        message: ''
      }
    }
  },
  methods: {
    getProducts () {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all`
      this.isLoading = true
      this.$http.get(api)
        .then((res) => {
          if (res.data.success) {
            this.productList = res.data.products
            this.isLoading = false
          } else {
            console.log(res.data.messages)
          }
        })
    },
    getProductsDetail (item) {
      this.$router.push(`/userDashboard/userProduct/${item.id}`)
    },
    addToCart (item) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`
      this.status.loadingItem = item.id
      const cart = {
        product_id: item.id,
        qty: 1
      }
      this.$http.post(api, { data: cart })
        .then((res) => {
          this.getCartList()
          this.status.loadingItem = ''
        })
    },
    getCartList () {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`
      this.isLoading = true
      this.$http.get(api)
        .then((res) => {
          this.cartList = res.data.data
          this.isLoading = false
        })
    },
    updateCart (item) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${item.id}`
      this.isLoading = true
      this.status.loadingItem = item.id
      const updateData = {
        product_id: item.product_id,
        qty: item.qty
      }
      this.$http.put(api, { data: updateData })
        .then((res) => {
          this.getCartList()
          this.status.loadingItem = ''
        })
    },
    deleteCart (item) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${item.id}`
      this.status.loadingItem = item.id
      this.$http.delete(api)
        .then((res) => {
          this.getCartList()
          this.status.loadingItem = ''
        })
    },
    useCupon () {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/coupon`
      const cupon = { code: this.cuponCode }
      this.$http.post(api, { data: cupon })
        .then((res) => {
          this.getCartList()
        })
    },
    createOrder () {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/order`
      const order = this.form
      this.$http.post(api, { data: order })
        .then((res) => {
          console.log(res)
        })
    }
  },
  created () {
    this.getProducts()
    this.getCartList()
  }
}
</script>
