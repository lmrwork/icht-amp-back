//初始化状态
export const init = {
  //全局
  dropItems: [],
  propIndex: null,
  html: null,
  json: null,
  qrCode: null,
  saving: null,
  loading: null,
  amp_status: 0,
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
        linkHref: ''
      }
    },

    ChHead: {
      //Schema
      schema: {
        title: '标题',
        description: '',
        type: 'object',
        required: [],
        properties: {
          headText: {
            type: 'string', 
            title: '标题文本' 
          },
          headType: {
            type: 'string',
            title: '标题 H(x) ？',
            enum: ['H1', 'H2', 'H3', 'H4', 'H5', 'H6']
          }
        }
      },
      //uiSchema
      uiSchema: {
        headType: {
          'ui:widget': 'select'
        }
      },
      //formData
      formData: {
        headText: 'Head H1~H6',
        headType: 'H1'
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

    ChH3: {
      //Schema
      schema: {
        title: '标题 H3',
        description: '',
        type: 'object',
        required: [],
        properties: {
          h3Text: {
            type: 'string', 
            title: 'H3文本' 
          }
        }
      },
      //uiSchema
      uiSchema: {},
      //formData
      formData: {
        h3Text: 'Head 3',
      }
    },

    ChUl: {
      //Schema
      schema: {
        definitions: {
          List: {
            type: 'object',
            properties: {
              liText: {
                type: 'string',
                title: '文本',
                default: '子项'
              },
              liHref: {
                type: 'string',
                title: '链接',
                default: ''
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
          listStyle: {
            type: 'string', 
            title: '前置标志',
            enum: ['listSytleDefault', 'listSytleNumber'],
            enumNames: ['默认', '数字']
          },
          ulList: {
            type: 'array', 
            title: '列表子项',
            items: {
              title: '子项属性',
              $ref: '#/definitions/List'
            }
          },
        }
      },
      //uiSchema
      uiSchema: {
        listStyle: {
          'ui:widget': 'select'
        }
      },
      //formData
      formData: {
        ulTitle: 'This is a List.',
        listStyle: 'listSytleDefault',
        ulList: [
          {liText: 'Here is list item1.', liHref: ''},
          {liText: 'Here is list item2.', liHref: ''},
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
          },
          pSize: {
            type: 'integer', 
            title: '段落字号',
            minimum: 8,
            maximum: 30,
            multipleOf: 2
          },
          pColor: {
            type: 'string',
            title: '颜色',
            enum: ['cGray', 'cRed', 'cBlue'],
            enumNames: ['灰色', '中国红', '深蓝']
          }
        }
      },
      //uiSchema
      uiSchema: {
        pText: {
          'ui:widget': 'textarea'
        },
        pAlign: {
          'ui:widget': 'select'
        },
        pSize: {
          'ui:widget': 'range'
        },
        pColor: {
          'ui:widget': 'select'
        }
      },
      //formData
      formData: {
        pText: 'Paragraph e.g. A paragraph is a section of a piece of writing. A paragraph always begins on a new line and contains at least one sentence.', 
        pAlign: 'left-align',
        pSize: 10,
        pColor: 'inherit',
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
          'ui:widget': 'select'
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
        title: '图片：AMP要求图片必须设置原始宽、高，且布局为responsive',
        description: '',
        type: 'object',
        required: [],
        properties: {
          imgSrc: {
            type: 'string', 
            title: '图片源地址（更换后，需要点击下方的 “更新图片”）' 
          },
          imgWidth: {
            type: 'integer', 
            title: '图片宽度（px）',
            minimum: 0,
            maximum: 960
          },
          imgHeight: {
            type: 'integer', 
            title: '图片高度（px）',
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
          },
          imgTitle: {
            type: 'string', 
            title: '图片下方描述' 
          }
        }
      },
      //uiSchema
      uiSchema: {
        imgWidth: {
          'ui:widget': 'updown'
        },
        imgHeight: {
          'ui:widget': 'updown'
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
        imgHref: '',
        imgTitle: 'Boy in red robe'
      }
    },

    ChImg2: {
      //Schema
      schema: {
        title: '图片：AMP要求图片必须设置原始宽、高，且布局为responsive',
        description: '',
        type: 'object',
        required: [],
        properties: {
          imgSrc: {
            type: 'string', 
            title: '图片源地址（更换后，需要点击下方的 “更新图片”）' 
          },
          imgWidth: {
            type: 'integer', 
            title: '图片宽度（px）',
            minimum: 0,
            maximum: 960
          },
          imgHeight: {
            type: 'integer', 
            title: '图片高度（px）',
            minimum: 0,
            maximum: 640
          },
          imgAlt: {
            type: 'string', 
            title: '图片Alt文字' 
          },
          imgTitle: {
            type: 'string', 
            title: '图片下方描述' 
          },
          textSize: {
            type: 'integer', 
            title: '段落字号',
            minimum: 8,
            maximum: 30,
            multipleOf: 2
          },
        }
      },
      //uiSchema
      uiSchema: {
        imgWidth: {
          'ui:widget': 'updown'
        },
        imgHeight: {
          'ui:widget': 'updown'
        },
        textSize: {
          'ui:widget': 'range'
        }
      },
      //formData
      formData: {
        imgSrc: 'https://data.chinahighlights.com/amp-img/homepage/mobile-home-brand.jpg',
        imgWidth: 500,
        imgHeight: 300,
        imgAlt: 'China tour 2018',
        imgTitle: 'China Highlights - Featured on 50+ Media and Press',
        textSize: 10
      }
    },

    ChImg3: {
      //Schema
      schema: {
        title: '图片：AMP要求图片必须设置原始宽、高，且布局为responsive',
        description: '',
        type: 'object',
        required: [],
        properties: {
          imgSrc: {
            type: 'string', 
            title: '图片源地址（更换后，需要点击下方的 “更新图片”）' 
          },
          imgWidth: {
            type: 'integer', 
            title: '图片宽度（px）',
            minimum: 0,
            maximum: 960
          },
          imgHeight: {
            type: 'integer', 
            title: '图片高度（px）',
            minimum: 0,
            maximum: 640
          },
          imgAlt: {
            type: 'string', 
            title: '图片Alt文字' 
          },
          imgTitle: {
            type: 'string', 
            title: '图片下方描述' 
          },
          imgHref: {
            type: 'string', 
            title: '图片链接' 
          },
          textSize: {
            type: 'integer', 
            title: '段落字号',
            minimum: 8,
            maximum: 10,
            multipleOf: 1
          },
        }
      },
      //uiSchema
      uiSchema: {
        imgWidth: {
          'ui:widget': 'updown'
        },
        imgHeight: {
          'ui:widget': 'updown'
        },
        textSize: {
          'ui:widget': 'range'
        }
      },
      //formData
      formData: {
        imgSrc: 'https://data.chinahighlights.com/image/homepage/plan-a-sirst-trip-to-china-step-by-step.jpg',
        imgWidth: 100,
        imgHeight: 75,
        imgAlt: 'China tour 2018',
        imgTitle: 'How to Plan a First Trip to China — Step by Step',
        textSize: 9,
        imgHref: '/tours/top-to-do.htm'
      }
    },

    ChCarousel: {
      //Schema
      schema: {
        definitions: {
          Image: {
            type: 'object',
            properties: {
              imgSrc: {
                type: 'string',
                title: '图片源地址',
                default: 'https://ampproject-b5f4c.firebaseapp.com/examples/images/image3.jpg'
              },
              imgHref: {
                type: 'string',
                title: '图片链接',
                default: ''
              },
            }
          }
        },
        title: '轮播图',
        description: '',
        type: 'object',
        required: [],
        properties: {
          imageWidth: {
            type: 'integer',
            title: '图片宽度（px）',
            minimum: 0,
            maximum: 960
          },
          imageHeight: {
            type: 'integer',
            title: '图片高度（px）',
            minimum: 0,
            maximum: 640
          },
          imageList: {
            type: 'array', 
            title: '图片集',
            items: {
              title: '图片',
              $ref: '#/definitions/Image'
            }
          },
        }
      },
      //uiSchema
      uiSchema: {
        imageWidth: {
          'ui:widget': 'updown'
        },
        imageHeight: {
          'ui:widget': 'updown'
        }
      },
      //formData
      formData: {
        imageWidth: 450,
        imageHeight: 300,
        imageList:[
          {imgSrc: 'https://ampproject-b5f4c.firebaseapp.com/examples/images/image1.jpg', imgHref: ''},
          {imgSrc: 'https://ampproject-b5f4c.firebaseapp.com/examples/images/image2.jpg', imgHref: ''},
        ]
      }
    },

    ChTour: {
      //Schema
      schema: {
        title: 'CH 精华线路',
        description: '',
        type: 'object',
        required: [],
        properties: {
          imgSrc: {
            type: 'string', 
            title: '图片源地址（更换后，需要点击下方的 “更新图片”）' 
          },
          imgWidth: {
            type: 'integer', 
            title: '图片宽度（px）',
            minimum: 0,
            maximum: 960
          },
          imgHeight: {
            type: 'integer', 
            title: '图片高度（px）',
            minimum: 0,
            maximum: 640
          },
          imgAlt: {
            type: 'string', 
            title: '图片Alt文字' 
          },
          tourTitle: {
            type: 'string', 
            title: '线路名称' 
          },
          tourCities: {
            type: 'string', 
            title: '经过城市' 
          },
          tourDesc: {
            type: 'string', 
            title: '线路简述' 
          },
          tourUrl: {
            type: 'string', 
            title: '线路URL' 
          },
          tourBtn: {
            type: 'string', 
            title: '线路按钮文字' 
          },
        }
      },
      //uiSchema
      uiSchema: {
        imgWidth: {
          'ui:widget': 'updown'
        },
        imgHeight: {
          'ui:widget': 'updown'
        },
        textSize: {
          'ui:widget': 'updown'
        },
        tourDesc: {
          'ui:widget': 'textarea'
        }
      },
      //formData
      formData: {
        imgSrc: 'https://images.arachina.com/allpicture/2016/11/bf0ee703cd7e478190d1396e.jpg',
        imgWidth: 500,
        imgHeight: 320,
        imgAlt: 'The Great Wall of China',
        tourTitle: 'Classic Wonders - 11 Days',
        tourCities: 'Beijing - Xi\'an - Guilin/Yangshuo -  Shanghai',
        tourDesc: 'Enjoy China’s classic scenery in Guilin, as well as ancient culture in Beijing and Xi’an, and classy Shanghai, all in 11 days.',
        textSize: 11,
        tourUrl: '',
        tourBtn: 'View Details',
      }
    },

  }
};