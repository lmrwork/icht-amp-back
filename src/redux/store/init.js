//初始化状态
export const init = {
  //全局
  dropItems: [],
  propIndex: null,
  html: null,
  json: null,
  //属性配置
  propConf: {

    ChBanner: {
      //Schema
      schema: {
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
      schema: {
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
        h1Text: 'Head 1',
      }
    },

    ChH2: {
      //Schema
      schema: {
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
        h2Text: 'Head 2',
      }
    },

    ChP: {
      //Schema
      schema: {
        title: '段落',
        description: '',
        type: 'object',
        required: [],
        properties: {
          pText: {
            type: 'string', 
            title: '段落文本' 
          },
          pAlign: {
            type: 'string',
            title: '对齐方式',
            enum: ['left-align', 'center-align', 'right-align'],
            enumNames: ['左对齐', '居中', '右对齐']
          }
        }
      },
      //uiSchema
      uiSchema: {
        pText: {
          "ui:widget": "textarea"
        },
        pAlign: {
          "ui:widget": "select"
        }
      },
      //formData
      formData: {
        pText: 'Paragraph e.g. A paragraph is a section of a piece of writing. A paragraph always begins on a new line and contains at least one sentence.', 
        pAlign: 'left-align'
      }
    },

    ChImg: {
      //Schema
      schema: {
        title: '图片',
        description: '',
        type: 'object',
        required: [],
        properties: {
          imgSrc: {
            type: 'string', 
            title: '图片源地址' 
          },
          imgWidth: {
            type: 'integer', 
            title: '图片宽度',
            minimum: 0,
            maximum: 960
          },
          imgHeight: {
            type: 'integer', 
            title: '图片高度',
            minimum: 0,
            maximum: 640
          },
          imgAlt: {
            type: 'string', 
            title: '图片Alt文字' 
          }
        }
      },
      //uiSchema
      uiSchema: {
        imgWidth: {
          'ui:widget': 'range'
        },
        imgHeight: {
          'ui:widget': 'range'
        }
      },
      //formData
      formData: {
        imgSrc: 'https://imagenes.viaje-a-china.com/allpicture/2018/01/cd20c1fc6bd44966b7daaf27.jpg', 
        imgWidth: 360,
        imgHeight: 240,
        imgAlt: 'Viajes Lhasa 2018',
      }
    }

  }
};