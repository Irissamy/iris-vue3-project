<template>
    <div class="text-end">
        <button class="btn btn-primary" type="button" @click="openModal(true)">新增項目</button>
        <!-- <button class="btn btn-primary" type="button" @click="$refs.productModal.showModal()">新增項目</button> -->
    </div>
    <table class="table mt-4">
        <thead>
            <tr>
            <th width="120">分類</th>
            <th>產品名稱</th>
            <th width="120">原價</th>
            <th width="120">售價</th>
            <th width="100">是否啟用</th>
            <th width="200">編輯</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="item in productList" :key="item.id">
            <td>{{ item.category }}</td>
            <td>{{ item.title }}</td>
            <td class="text-right">
                {{ item.origin_price }}
            </td>
            <td class="text-right">
                {{ item.price }}
            </td>
            <td>
                <span class="text-success" :class="{ 'text-muted': item.is_enabled === undefined | 0  }">{{ item.is_enabled === 1 ? '啟用' : '未啟用 '}}</span>
            </td>
            <td>
                <div class="btn-group">
                <button class="btn btn-outline-primary btn-sm" @click="openModal(false,item)">編輯</button>
                <button class="btn btn-outline-danger btn-sm" @click="deleteModal(item)">刪除</button>
                </div>
            </td>
            </tr>
        </tbody>
    </table>
    <PaginationBar></PaginationBar>
    <ProductModal ref="productModal" :product="addProductList" @add-product="updateProduct"></ProductModal>
    <DeleteModal ref="deleteModal" :delete-item="addProductList" @delete-product="deleteProduct"></DeleteModal>
</template>

<script>
import PaginationBar from '@/components/PaginationBar.vue'
import ProductModal from '@/components/ProductModal.vue'
import DeleteModal from '@/components/DeleteModal.vue'

export default {
  components: {
    PaginationBar,
    ProductModal,
    DeleteModal
  },
  data () {
    return {
      productList: [],
      pagination: {},
      addProductList: {},
      isNew: false
    }
  },
  methods: {
    getProductList () {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/products`
      this.$http.get(api)
        .then((res) => {
          this.productList = res.data.products
          this.pagination = res.data.pagination
        })
    },
    openModal (isNew, item) {
      if (isNew) {
        this.addProductList = {}
      } else {
        this.addProductList = { ...item } // 展開物件
      }
      this.isNew = isNew
      this.$refs.productModal.showModal()
    },
    deleteModal (item) {
      this.addProductList = { ...item }
      this.$refs.deleteModal.showModal()
    },
    updateProduct (item) {
      console.log(item)
      this.addProductList = item
      // 新增
      let api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product`
      let httpMethods = 'post'

      // 編輯
      if (!this.isNew) {
        api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product/${item.id}`
        httpMethods = 'put'
      }
      this.$http[httpMethods](api, { data: this.addProductList })
        .then((res) => {
          this.getProductList()
          this.$refs.productModal.hideModal()
        })
    },
    deleteProduct (item) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product/${this.addProductList.id}`
      this.$http.delete(api)
        .then((res) => {
          this.getProductList()
          this.$refs.deleteModal.hideModal()
        })
    }
  },
  created () {
    this.getProductList()
  }
}
</script>
