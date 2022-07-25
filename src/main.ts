import _code from './main.ts?raw'
import hljs from "highlight.js";
import GUI from 'lil-gui'
import typescript from 'highlight.js/lib/languages/typescript';
import '@/assets/css/index.less'
import 'highlight.js/styles/github-dark.css';
hljs.registerLanguage('typescript', typescript);
const code = hljs.highlight('typescript', _code.split('/**********测试代码************/')[2].trim()).value
const doc = document.getElementById('doc') as HTMLDivElement
doc.children[0].innerHTML = code
const gui =new GUI({
  title:'控制面板'
})
gui.add({
  案例代码:true
},'案例代码').onChange((val:boolean)=>{
  doc.style.display = val ? '' : 'none'
})

/**********测试代码************/
import { Chart } from './core'
import {mock}  from 'mockjs'
const chart= new Chart(document.getElementById('app') as HTMLDivElement)

const menu={
  切换数据(){
    const res=mock({
      'data|0-20':[{
        "x|3":'',
        "y|0-100":0
      }]
    });
    chart.setDatas(res.data)
  }
}
menu.切换数据() 
gui.add(menu,'切换数据')
