import IconSvg from "./icon-svg/index.vue";
import Avatar from "./avatar/index.vue"
import ContextMenu from "./context-menu"

export default function (app) {
    app.component("icon-svg", IconSvg);
    app.component("io-avatar", Avatar);
    app.component("io-context-menu", ContextMenu);
}
