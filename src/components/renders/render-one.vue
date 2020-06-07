<script>
import oneChild from "./one-child";
export default {
  components: {
    oneChild
  },
  render(createElement) {
    return createElement(
      "div",
      {
        // 与 `v-bind:class` 的 API 相同，
        // 接受一个字符串、对象或字符串和对象组成的数组
        class: {
          foo: true,
          bar: false
        },
        // 与 `v-bind:style` 的 API 相同，
        // 接受一个字符串、对象，或对象组成的数组
        style: {
          color: "red",
          fontSize: "18px"
        },
        // 普通的 HTML attribute
        attrs: {
          id: "one"
        },
        // 仅用于组件，用于监听原生事件，而不是组件内部使用 `vm.$emit` 触发的事件。
        nativeOn: {
          //`vm.$emit` 触发的事件，无效
          childClick: () => {
            console.log("my child click");
          }
        }
      },
      [
        "wuyi",
        createElement("one-child", {
          // 组件 prop
          props: {
            name: "child-组件"
          },
          // 仅用于组件，用于监听原生事件，而不是组件内部使用 `vm.$emit` 触发的事件。
          nativeOn: {
            //原生事件
            click: () => {
              console.log("child click");
            }
          }
        }),
        createElement("p", {
          // DOM property DOM属性
          domProps: {
            innerHTML: "<p>domProps</p>"
          },
          // 事件监听器在 `on` 内，
          // 但不再支持如 `v-on:keyup.enter` 这样的修饰器。
          // 需要在处理函数中手动检查 keyCode。
          on: {
            click: function() {
              console.log("p click");
            }
          }
        })
      ]
    );
  }
};
</script>