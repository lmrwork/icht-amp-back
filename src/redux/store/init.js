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

    ChUl: {
      //Schema
      schema: {
        definitions: {
          List: {
            type: 'object',
            properties: {
              'liText': {
                type: 'string',
                title: '子项文本',
                default: 'List item'
              },
              liHref: {
                type: 'string',
                title: '子项链接',
                default: 'list link'
              },
            }
          }
        },
        title: '列表',
        description: '',
        type: 'object',
        required: [],
        properties: {
          ulTitle: {
            type: 'string', 
            title: '列表标题' 
          },
          ulList: {
            type: 'array', 
            title: '列表子项',
            minItems: 1,
            items: {
              $ref: '#/definitions/List'
            }
          },
        }
      },
      //uiSchema
      uiSchema: {},
      //formData
      formData: {
        ulTitle: 'Arts and Crafts',
        ulList: [
          {liText: 'Chinese Silk', liHref: ''},
          {liText: 'Chinese Jade Articles', liHref: ''},
          {liText: 'Chinese Embroidery', liHref: ''},
        ]
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
            enum: ['left-align', 'center', 'right-align'],
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

    ChA: {
      //Schema
      schema: {
        title: '超文本链接',
        description: '',
        type: 'object',
        required: [],
        properties: {
          aText: {
            type: 'string', 
            title: '链接文本' 
          },
          aHref: {
            type: 'string',
            title: '链接URL',
          },
          aAlign: {
            type: 'string',
            title: '对齐方式',
            enum: ['left-align', 'center', 'right-align'],
            enumNames: ['左对齐', '居中', '右对齐']
          }
        }
      },
      //uiSchema
      uiSchema: {
        aHref: {
          'ui:placeholder': '/tours/tibet.htm'
        },
        aAlign: {
          "ui:widget": "select"
        }
      },
      //formData
      formData: {
        aText: 'A hypertext link', 
        aHref: '',
        aAlign: 'left-align'
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
          },
          imgHref: {
            type: 'string', 
            title: '图片链接' 
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
        },
        imgHref: {
          'ui:placeholder': '/tours/tibet.htm'
        }
      },
      //formData
      formData: {
        imgSrc: 'https://imagenes.viaje-a-china.com/allpicture/2018/01/cd20c1fc6bd44966b7daaf27.jpg', 
        imgWidth: 360,
        imgHeight: 240,
        imgAlt: 'Lhasa tour 2018',
        imgHref: ''
      }
    }

  }
};