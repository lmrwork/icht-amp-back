//初始化状态
export const init = {
  //拖拉团
  dropItems: [],
  propIndex: null,
  //属性配置
  propConf: {

    ChBanner: {
      //Schema
      Schema: {
        title: '页顶导航 Banner',
        description: '',
        type: 'object',
        required: [],
        properties: {
          linkText: {
            type: 'string', 
            title: 'Talormade文字' 
          },
          linkHref: { 
            type: 'string', 
            title: 'Talormade链接' 
          }
        }
      },
      //uiSchema
      uiSchema: {},
      //formData
      formData: {
        linkText: 'Create My Trip !',
        linkHref: '#'
      }
    },

    ChH1: {
      //Schema
      Schema: {
        title: '标题 H1',
        description: '',
        type: 'object',
        required: [],
        properties: {
          h1Text: {
            type: 'string', 
            title: 'H1文本' 
          }
        }
      },
      //uiSchema
      uiSchema: {},
      //formData
      formData: {
        h1Text: 'Head 1 : <h1>',
      }
    },

    ChH2: {
      //Schema
      Schema: {
        title: '标题 H2',
        description: '',
        type: 'object',
        required: [],
        properties: {
          h2Text: {
            type: 'string', 
            title: 'H2文本' 
          }
        }
      },
      //uiSchema
      uiSchema: {},
      //formData
      formData: {
        h2Text: 'Head 2 : <h1>',
      }
    },

    ChP: {
      //Schema
      Schema: {
        title: '段落',
        description: '',
        type: 'object',
        required: [],
        properties: {
          pText: {
            type: 'string', 
            title: '段落文本' 
          }
        }
      },
      //uiSchema
      uiSchema: {"ui:widget": "textarea"},
      //formData
      formData: {
        pText: 'Paragraph : <p> # e.g. A paragraph is a section of a piece of writing. A paragraph always begins on a new line and contains at least one sentence.', 
      }
    }

  }
};