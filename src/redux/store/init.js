//初始化状态
export const init = {
  //拖拉团
  dropItems: [],
  //属性配置
  inputConf: {
    ChBanner: {
      linkText: { default: 'Create My Trip !', type: 'text', label: 'Talormade文字' },
      linkHref: { default: '#', type: 'text', label: 'Talormade链接' }
    },
    ChH1: {
      h1: { default: 'Head 1 : <h1>', type: 'text', label: 'H1文本' },
    },
    ChH2: {
      h2: { default: 'Head 2 : <h2>', type: 'text', label: 'H2文本' },
    },
    ChP: {
      p: { default: 'Paragraph : <p> # e.g. A paragraph is a section of a piece of writing. A paragraph always begins on a new line and contains at least one sentence.', type: 'textarea', label: '段落文本' },
    }
  }
};