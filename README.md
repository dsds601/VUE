# vue
* 인프런 캡틴 판교님 강의 정리 내용입니다.
* 캡틴 판교님 link
https://joshua1988.github.io/vue-camp/
* 실전 개념 https://github.com/tastejs/hacker-news-pwas/blob/master/docs/api.md

1. Reactivity
   * defineProperty API를 이용해서 화면에 변경을 감지해서 데이터 바이딩을 사용한다.
   * get , set , writable , enumerable 등에 메서드를 사용 할 수 있다.

2. instance
* Vue를 정의하고 객체에 인스턴스를 붙여줘야 vue에 메서드를 유효하게 사용 할 수 있다.
  * 예 
    * vue 생성후 el 속성을 통해 app이라는 아이디를 가진 div에 붙여 app 안에서는 vue를 유효하게 사용 할 수 있다.
  ~~~
  const vm = new Vue({
      el : '#app',
      data : {
          message : 'hi'
      }
  });
  ~~~
  
3. 생성자함수
   1. 함수 앞에 변수명이 대문자일 경우 생성자 함수를 의미합니다.
   2. 생성자 함수에 함수를 정의해 함수를 호출 할 수도 있습니다.
   3. Vue에서도 생성자 함수 new Vue() 안에 함수를 정의해두고 사용하게 됩니다.

4. 인스턴스 속성 (Vue 생성자 안에 객체를 넣어 활용합니다.)
   ~~~
   new Vue({
     el: , // 인스턴스가 그려지는 화면의 시작점 (특정 HTML 태그)
     template: , // 화면에 표시할 요소 (HTML, CSS 등)
     data: , // 뷰의 반응성(Reactivity)이 반영된 데이터 속성
     methods: , // 화면의 동작과 이벤트 로직을 제어하는 메서드
     created: , // 뷰의 라이프 사이클과 관련된 속성
     watch: , // data에서 정의한 속성이 변화했을 때 추가 동작을 수행할 수 있게 정의하는 속
   });
   ~~~

   1. 컴포넌트
      1. 화면에 **영역**을 구분하여 개발하는 기능 컴포넌트간 관계가 생길 수 있습니다.
      2. 컴포넌트간 데이터를 주고 받기 위해서는 규칙이 있습니다.
         1. 상위에서 하위 컴포넌트에게는 데이터를 내려줍니다 props 전달
         2. 하위에서 상위 컴포넌트에게는 이벤트를 올려줍니다. 이벤트 발생
      3. 컴포넌트내 template 속성을 통해 화면을 구성할 수 있다.
       ~~~
       <app-content></app-content> // 지정한 뷰 영역안에 삽입 
      Vue.component('app-content', { // 전역 컴포넌트
   
             template: '<div>content</div>'
         });
      // 지역 컴포넌트
      new Vue({
             el : '#app',
             components: { 
               'app-footer' : { template : '<footer>footer</footer>
             }
         });
   
      ~~~
   * 뷰 템플릿
     1. 데이터 바인딩 {{}} 머스타치 문법을 사용합ㄴ디ㅏ.
     2. 뷰 디렉티브 v-... 디렉티브를 사용합니다.

## Vuex
1. Vuex 시작하기
   * src폴더 밑에 store 폴더를 만들고 store.js 파일 생성
   ~~~
   import Vue from "vue";
   import Vuex from "vuex";
    Vue.use(Vuex);
    
    export const store = new Vuex.Store({
    });
   ~~~
2. vuex 기술 요소
   1. state : 여러 컴포넌트에 공유되는 데이터 data
      ~~~
      사용
      state : {
            message : 'text'      
      }
      <p> {{this.$store.state.message}} </p>
      ~~~
   2. getters : 연산된 state 값을 접근하는 속성 computed
   3. mutations : state 값을 변경하는 이벤트 로직 method
      1. state 값을 변경할수있는 **유일한** 메서드
      2. 뮤테이션은 commit()으로 동작시킵니다.
      3. 여러개 state를 넘기고 싶을땐 객체 형태 key : value로 전달 하면 됩니다.
      ~~~
      state : {num:10},
      mutations : {
        printNumbers(state) : {
            return state.num
      } ,
        setNumbers(state) :{
        return state.num + 10;
      }
      //=== 
      this.$state.commit('printNumbers');
      ~~~
      1. actions : 비동기 처리 로직을 선언하는 메서드 async method
         1. 비동기 처리 로직을 선언하는 메서드 비동기 로직을 담당하는 mutations 접근하는 actions
         2. 데이터 요청 , Promise , ES6 async 같은 비동기 처리는 모두 actions에 선언
         3. actions -> mutations -> state
         ~~~
         state : {
            num : 10
         },
         mutations : {
            doubleNumber(state) {
               state.num * 2;
            }
         },
         actions : {// setTimeOut , axios등 비동기 로직
            delayDoubleNumber(context) {
               context.commit('doubleNumber')
            }
         }
         // APP
         this.$state.dispatch('delayDoubleNumber');
         ~~~
         
## Helper
* Store에 있는 4가지 속성을 간편하게 코딩한는 방법
1. state -> mapState
   1. Vuex에 선언한 state 속성을 뷰 컴포넌트에 더 쉽게 연결해주는 헬퍼
   ~~~
   import { mapState } from 'vuex'
   computed() {
      ...mapState(['num'])  // num() {return this.$store.state.num; }
   }
   // store.js
   state : {
      num : 10
   }
   
   // APP.js
   <p> {{ this.num }} </p>
   ~~~
2. getters -> mapGetters
   1. Vuex에 선언한 getters 속성을 뷰 컴포넌트에 더 쉽게 연결해주는 헬퍼
   ~~~
   import { mapGetters } from 'vuex'
   computed() { ...mapGetters(['reverseMessage']) }
   // store.js
   getters: {
      reverseMessage(state) {
         return state.msg.split('').reverse().join('');
      }
   }
   <p> {{ this.reverseMessage }}</p>
   ~~~
3. mutations -> mapMutations
   1. Vuex에 선언한 mutations 속성을 뷰 컴포넌트에 연결해주는 헬퍼
   ~~~
   import { mapMutations } from 'vuex'
   methods : {
      ...mapMutations(['clickBtn']),
      aythLogin(){}
   }
   
   //store.js
   mutations: {
      clickBtn(state) {
         alert(state.msg)
      }
   }
   }
   ~~~
4. actions -> mapActions
   1. Vuex에 선언한 actions 속성을 뷰 컴포넌트에 연결해주는 헬퍼
   ~~~
   import {mapActions} from 'vuex'
   
   methods : {
      ...mapActions(['delayClickBtn']),
   }
   
   actions: {
      delayClickBtn (context) {
         setTimeout(() => context.commit('clickBtn'), 200);
      }
   }
   ~~~
 
### 사용법
* 헬퍼를 사용하고자 하는 vue 파일에 아래와 같이 헬퍼 로딩
  ~~~
  import {mapState} from 'vuex'
  ... <-Spread Object 안에있는값을 ...objecName Object key value 가 다 들어갑니다.
  export default {
   computed() {...mapState(['num]), ...~~~ mapGetters // this.num 으로 접근 가능,
  methods : {mapMutations, mapActions}
  }
  ~~~
  
  * Vuex에 선언한 속성을 그대로 컴포넌트에 연결하는 문법
    ~~~
    ...mapMutations(['clickBtn','addNumber'])
    ..mapMutations({popupMsg : 'clickBtn'}) // 컴포넌트 메서드명 : store 뮤테이션 명
    ~~~
    
## ESLint
* 잘못된 문법 혹은 또는 에러 가이드 도구.

### TIP
1. components랑 구분을 위해 views라는 폴더 안에는 router에 관련된 vue 파일을 두는게 좋다


