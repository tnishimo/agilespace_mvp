new Vue({
    el:'#app',
    data:{
        message: 'hello,tomosuzu',
        message2: 'これはタスクです',
        number:3,
        ok:true,
        list: [
         ],
        newTask: "",
        nextId: 1,
        nextId2: 1,
        pbiDetail: false,
        pbiTasks: false,
        pbiTest: "aaaaaaaa",

        pbiData: {
         },
        newTask2: "",
    
    },

    methods: {
        sayHi(){
            return 'hi';
        },
        labName(){
            return 'ODANGO COMPANY SYSTMES Labs.';
        },
        addTask() {
            this.list.push({
                id: this.nextId++,
                value: this.newTask,
                precon: "",
                acceptanceCriteria1 : "",
                acceptanceCriteria2 : "",
                acceptanceCriteria3 : "",
                storyPoint : "" ,
                commitNo : "",
                status : "",
                memo : "",
                pbitaskItems: [

                ],
                pbitaskItems3: [
                    item1 = {name: "お風呂掃除",price:150},
                    item2 = {name: "肩たたき",price:250},
                ],
                estimatedTime : "12",
                timescale : "2",
                progressTime : "1.5",
                progressPercentage : "2"
                
            })
        },
        deleteTask(obj) {
            this.list = this.list.filter(e => e !== obj)
            this.pbiDetail = false;
            this.pbiTasks = false;
        },


        deleteTask3(todo){
            
            var todos = this.pbiData.pbitaskItems;
			var index = this.pbiData.pbitaskItems.indexOf(todo);
			todos.splice(index, 1);

        },

        detailBtn( pbiData ){
            this.pbiDetail = true;
            this.pbiTasks = true;
            this.pbiData = pbiData;

        },
        addTask2(){
            this.pbiData.pbitaskItems.push({
                task: this.newTask2,
                id: this.nextId2++,
                yosoku : "",
                jisseki : "",
                taskStatus:""
            })
        },
        pbiUp(index){
            tmp = this.list[ index-1 ];
            Vue.set(this.list, index-1, this.list[ index ]);
            Vue.set(this.list, index, tmp);
        },
        taskUp(index){
            tmp = this.pbiData.pbitaskItems[ index-1 ];
            Vue.set(this.pbiData.pbitaskItems, index-1, this.pbiData.pbitaskItems[ index ]);
            Vue.set(this.pbiData.pbitaskItems, index, tmp);
        },
        pbiDown(index){
            tmp = this.list[ index+1 ];
            Vue.set(this.list, index+1, this.list[ index ]);
            Vue.set(this.list, index, tmp);
        },
        taskDown(index){
            tmp = this.pbiData.pbitaskItems[ index+1 ];
            Vue.set(this.pbiData.pbitaskItems, index+1, this.pbiData.pbitaskItems[ index ]);
            Vue.set(this.pbiData.pbitaskItems, index, tmp);
        },
        

    }
})


/*
- 大規模になれば分離していく
- 作り方があり、一般的にはパーツを作ってやっていく。
- 流派がある
- TDD的に作るやりかた
- TDDの原点、まず作って、拡張していくも含まれている
- スケボーなら、滑っていることを確認して、次の段階に行く
- 1ファイルで作っても良い、あとから分ける


idがいつくか合った場合
- 一般的なHTMLな書き方
- vue的には、ここからがアプリの始まり
- コンポーネントを増やす＝ファイルを分ける
- コンポーネントを勉強しましょう
- すずともさんはreactが大得意！
- #app内のCSSをあてる方法

- div 
- コンポーネントに分けると美しくなる
- list.push
  - listは
  - pushはなにかの機能として。ナウい言語ならある
  - {   }は、連想配列　オブジェクト　
- htmlに書いたv-model="newTask　が、valu:this.newtask →newtask:""に入る
- this = #app (new Vueの中) →違うかもしれない
- v-for・・・for文　html側でやる。順番でとれていく
- 創発的設計
- 


- 閉じるという概念は不要
- 最初は、何もなくて、クリックされる毎に中身だけが入れ替わる
- v-show は、Trueに表示される という
- falseと定義するのは、最初は見せない。 v-on でtrueにするという処理を加えたので、見えるようになった

- 【済】まずは、まずは、バックログ詳細のデータの保存場所と表示する
- 詳細ボタンを押した時に、保存場所からよんでくれば表示される
   - 詳細ボタンを押した時に動く関数をつくる→詳細のTrue
   - de
- dataが保存場所
- (test)は関数の中でしか使えない
- IDとvalueはを2つ出してみる・・・配列を作ってみる


- addTask()が動いた時に既に全てのデータが作成されているようにする

 pbiAll: {
             pbi : " korehaPBIdesu. ",
             precondition : " korehaPrecondesu.  ",
             acceptanceCriteria1 : " korehaAC1desu. ",
             acceptanceCriteria2 : " korehaAC2desu. ",
             acceptanceCriteria3 : " korehaAC3desu. ",
             sotryPoint : " korehaSPdesu." ,
             commitNo : " koreha Commitno desu. ",
             status : "koreha status desu. ",
             memo : "koreha memo desu. ",
         },


                         
                list[0] = {"id":1,""}
                list[1] = {"id":1,}

*/

