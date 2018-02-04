//初始化状态
export const init = {
  //拖拉团
  dropItems: [],
  propIndex: null,
  //属性配置
  inputConf: {

    ChBanner: {
      linkText: { 
        default: 'Create My Trip !', 
        type: 'string', 
        ui:'text', 
        title: 'Talormade文字' 
      },
      linkHref: { 
        default: '#', 
        type: 'string', 
        ui:'text', 
        title: 'Talormade链接' 
      }
    },

    ChH1: {
      h1Text: { 
        default: 'Head 1 : <h1>', 
        type: 'string', 
        ui:'text', 
        title: 'H1文本' 
      }
    },

    ChH2: {
      h2Text: { 
        default: 'Head 2 : <h2>', 
        type: 'string', 
        ui:'text', 
        title: 'H2文本'
      }
    },

    ChP: {
      pText: { 
        default: 'Paragraph : <p> # e.g. A paragraph is a section of a piece of writing. A paragraph always begins on a new line and contains at least one sentence.', 
        type: 'string', 
        ui:'textarea', 
        title: '段落文本' 
      }
    }

  }
};