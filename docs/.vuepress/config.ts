import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'

export default defineUserConfig<DefaultThemeOptions>({
    base: "/",
    lang: "ZH-cn",
    title: "服务器管理文档",
    description: "",
    themeConfig: {
        sidebar: [{
            text: "指南",
            children: [
                "/README.md",
                {
                    text: "Web 服务",
                    children: ["/web/README.md"]
                }, {
                    text: "PBS 队列服务",
                    children: ["/pbs/README.md"]
                }
            ]
        }]
    }
});
