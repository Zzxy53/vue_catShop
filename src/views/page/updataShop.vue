<template>
  <div class="checkout-container">
    <breadcrumbs title="商品发布" text="商品发布"></breadcrumbs>
    <div class="updataShop">
      <div class="card">
        <div class="headTitle">
          <h4>商品发布</h4>
          <p>请填写下列的商品详细信息</p>
        </div>
        <div class="formMain">
          <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="名称">
              <el-input v-model="form.name" placeholder="请填写物品名称，将在主页显示"></el-input>
            </el-form-item>
            <el-form-item label="简介">
              <el-input type="textarea" v-model="form.desc" placeholder="请填写物品简介，将在商品详细页显示"></el-input>
            </el-form-item>
            <el-form-item label="标价">
              <el-input-number v-model="form.money" @change="handleChange" :min="1" label="价格"></el-input-number>
            </el-form-item>
            <el-form-item label="数量">
              <el-input-number v-model="form.num" @change="handleChange" :min="1" label="数量"></el-input-number>
            </el-form-item>
            <el-form-item label="分类">
              <el-select v-model="form.region" placeholder="请选择活动区域">
                <el-option v-for="(item, index) in typeList" :key="index" :label="item.title" value="item.title"> </el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="图片上传">
              <el-upload action="#" list-type="picture-card" :auto-upload="false" accept="image/*" ref="files">
                <i slot="default" class="el-icon-plus"></i>
                <div slot="file" slot-scope="{ file }">
                  <img class="el-upload-list__item-thumbnail" :src="file.url" alt="" />
                  <span class="el-upload-list__item-actions">
                    <span class="el-upload-list__item-preview" @click="handlePictureCardPreview(file)">
                      <i class="el-icon-zoom-in"></i>
                    </span>
                    <span v-if="!disabled" class="el-upload-list__item-delete" @click="handleDownload(file)">
                      <i class="el-icon-download"></i>
                    </span>
                    <span v-if="!disabled" class="el-upload-list__item-delete" @click="handleRemove(file)">
                      <i class="el-icon-delete"></i>
                    </span>
                  </span>
                </div>
              </el-upload>
            </el-form-item>

            <button class="submit">提 交</button>
          </el-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import breadcrumbs from '@/components/assembly/breadcrumbs-area.vue'

export default {
  components: {
    breadcrumbs
  },
  data() {
    return {
      form: {
        num: 1,
        money: 1,
        region: '日常用品'
      },
      disabled: false,
      typeList: [{ title: '日常用品' }, { title: '代步工具' }, { title: '衣裤鞋帽' }, { title: '书籍教材' }, { title: '数码产品' }, { title: '租借' }, { title: '兼职' }, { title: '其他' }]
    }
  },
  created() {},
  methods: {
    handleChange(value) {
      console.log(value)
    },
    handleRemove(file) {
      this.$refs.files.handleRemove(file)
      console.log(file)
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url
      this.dialogVisible = true
    },
    handleDownload(file) {
      console.log(file)
    }
  }
}
</script>

<style lang="less" scoped>
.updataShop {
  height: 900px;
  padding: 100px 0;
  background-color: #fff;
  .card {
    width: 555px;
    height: 740px;
    margin: 0 auto;
    padding: 50px 30px;
    background-color: #fff;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    .headTitle {
      text-align: center;
      h4 {
        font-size: 27px;
      }
      p {
        font-size: 14px;
        margin: 10px 0;
      }
    }
    .formMain {
      .el-tag + .el-tag {
        margin-left: 10px;
      }
      .el-tag,
      .button-new-tag {
        margin-left: 10px;
        height: 32px;
        line-height: 30px;
        padding-top: 0;
        padding-bottom: 0;
      }
      .el-select {
        width: 100%;
      }
      .input-new-tag {
        width: 90px;
        margin-left: 10px;
        vertical-align: bottom;
      }
      .el-upload-list__item {
        // div {
        //   height: 100%;
        // }
      }
      .submit {
        width: 100%;
        height: 45px;
        background-color: #000;
        border: 0;
        color: #fff;
        font-size: 18px;
        border-radius: 4px;
        margin-top: 20px;
        cursor: pointer;
      }
      .submit:hover {
        background-color: #333;
      }
    }
  }
}
</style>
