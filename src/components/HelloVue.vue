 <template>
  <div class="user-table">
    <div class="header-query-box">
      <div class="left-box">
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
          <el-form-item>
            <el-input v-model="formInline.user" placeholder="搜索"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" icon="el-icon-search">查询</el-button>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" icon="el-icon-plus">删除</el-button>
          </el-form-item>
          <el-form-item>
            <el-button type="danger" icon="el-icon-delete">删除</el-button>
          </el-form-item>
        </el-form>
      </div>
      <div class="right-box"></div>
    </div>
    <div class="table-detail">
      <el-table :fit='true'
        ref="multipleTable"
        :data="tableData"
        border
        tooltip-effect="dark"
         style="width: 98%;"
        @selection-change="handleSelectionChange"
      >
        <el-table-column  type="selection" > </el-table-column>
         <el-table-column prop="num" label="序号" >
        </el-table-column>
        <el-table-column  label="日期"  >
          <template slot-scope="scope">{{ scope.row.date }}</template>
        </el-table-column>
       <el-table-column prop="name" label="姓名"  >
        </el-table-column>
         <el-table-column prop="like" label="喜欢"  >
        </el-table-column>
         <el-table-column prop="title" label="标题"  >
        </el-table-column>
        <el-table-column prop="address" label="地址"  show-overflow-tooltip>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

 <script>
export default {
  data() {
    return {
      tableData: [
        {
         num:"1",
          date: "2016-05-02",
          name: "王小虎",
          title:"beautiful",
          like:"1000",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          num:"1",
          date: "2016-05-02",
          name: "王小虎",
          title:"beautiful",
          like:"1000",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
         num:"1",
          date: "2016-05-02",
          name: "王小虎",
          title:"beautiful",
          like:"1000",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
         num:"1",
          date: "2016-05-02",
          name: "王小虎",
          title:"beautiful",
          like:"1000",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          num:"1",
          date: "2016-05-02",
          name: "王小虎",
          title:"beautiful",
          like:"1000",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          num:"1",
          date: "2016-05-02",
          name: "王小虎",
          title:"beautiful",
          like:"1000",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          num:"1",
          date: "2016-05-02",
          name: "王小虎",
          title:"beautiful",
          like:"1000",
          address: "上海市普陀区金沙江路 1518 弄",
        },
      ],
       multipleSelection: [],
      formInline: {
        user: "",
        region: "",
      },
    };
  },
  methods: {
     toggleSelection(rows) {
        if (rows) {
          rows.forEach(row => {
            this.$refs.multipleTable.toggleRowSelection(row);
          });
        } else {
          this.$refs.multipleTable.clearSelection();
        }
      },
      handleSelectionChange(val) {
        this.multipleSelection = val;
      },
    onSubmit() {
      console.log("submit!");
    },
  },
};
</script>
<style scoped>
.user-table {
  width: 100%;
  height: 100%;
  /* background: blue; */
  display: flex;
  flex-direction: column;
}
.left-box,
.right-box {
  padding:1%;
  height: 100%;
  width: 50%;
}
.header-query-box {
  height: 9%;
  display: flex;
  justify-content: flex-start;
}
.left-box {
  display: flex;
  justify-content: flex-start;
}
.table-detail {
  width: 100%;
  height: 300px;
  padding:1%
}

</style>