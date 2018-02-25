//初始化状态
export const init = {
  //全局
  dropItems: [],
  propIndex: null,
  html: null,
  json: null,
  css: null,
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
          text: {
            type: 'string', 
            title: 'Talormade文字' 
          },
          href: { 
            type: 'string', 
            title: 'Talormade链接' 
          }
        }
      },
      //uiSchema
      uiSchema: {},
      //formData
      formData: {
        text: 'Create My Trip !',
        href: ''
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
          text: {
            type: 'string', 
            title: '标题文本' 
          },
          head: {
            type: 'string',
            title: '标题 H(x) ？',
            enum: ['H1', 'H2', 'H3', 'H4', 'H5', 'H6']
          }
        }
      },
      //uiSchema
      uiSchema: {
        head: {
          'ui:widget': 'select'
        }
      },
      //formData
      formData: {
        text: 'Head H1~H6',
        head: 'H1'
      }
    },

    ChUl: {
      //Schema
      schema: {
        definitions: {
          List: {
            type: 'object',
            properties: {
              text: {
                type: 'string',
                title: '文本',
                default: '子项'
              },
              href: {
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
          title: {
            type: 'string', 
            title: '列表标题' 
          },
          listStyle: {
            type: 'string', 
            title: '前置标志',
            enum: ['listSytleDefault', 'listSytleNumber'],
            enumNames: ['默认', '数字']
          },
          list: {
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
        title: 'This is a List.',
        listStyle: 'listSytleDefault',
        list: [
          {text: 'Here is list item1.', href: ''},
          {text: 'Here is list item2.', href: ''},
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
          text: {
            type: 'string', 
            title: '段落文本' 
          },
          align: {
            type: 'string',
            title: '对齐方式',
            enum: ['left-align', 'center', 'right-align'],
            enumNames: ['左对齐', '居中', '右对齐']
          },
          size: {
            type: 'integer', 
            title: '段落字号',
            minimum: 8,
            maximum: 30,
            multipleOf: 2
          },
          color: {
            type: 'string',
            title: '颜色',
            enum: ['cBlack', 'cGray', 'cRed', 'cBlue'],
            enumNames: ['黑色', '灰色', '中国红', '深蓝']
          }
        }
      },
      //uiSchema
      uiSchema: {
        text: {
          'ui:widget': 'textarea'
        },
        align: {
          'ui:widget': 'select'
        },
        size: {
          'ui:widget': 'range'
        },
        color: {
          'ui:widget': 'select'
        }
      },
      //formData
      formData: {
        text: 'Paragraph e.g. A paragraph is a section of a piece of writing. A paragraph always begins on a new line and contains at least one sentence.', 
        align: 'left-align',
        size: 10,
        color: 'inherit',
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
          text: {
            type: 'string', 
            title: '链接文本' 
          },
          href: {
            type: 'string',
            title: '链接URL',
          },
          size: {
            type: 'integer',
            title: '链接字号',
            minimum: 8,
            maximum: 16,
            multipleOf: 1
          },
          align: {
            type: 'string',
            title: '对齐方式',
            enum: ['left-align', 'center', 'right-align'],
            enumNames: ['左对齐', '居中', '右对齐']
          },
          color: {
            type: 'string',
            title: '颜色',
            enum: ['cBlack', 'cGray', 'cRed', 'cBlue'],
            enumNames: ['黑色', '灰色', '中国红', '深蓝']
          }
        }
      },
      //uiSchema
      uiSchema: {
        href: {
          'ui:placeholder': '/tours/tibet.htm'
        },
        align: {
          'ui:widget': 'select'
        },
        size: {
          'ui:widget': 'range'
        },
        color: {
          'ui:widget': 'select'
        }
      },
      //formData
      formData: {
        text: 'A hypertext link', 
        href: '',
        align: 'left-align',
        size: 10,
        color: 'inherit',
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
          href: {
            type: 'string', 
            title: '图片链接' 
          },
          title: {
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
        href: {
          'ui:placeholder': '/tours/tibet.htm'
        }
      },
      //formData
      formData: {
        imgSrc: 'https://imagenes.viaje-a-china.com/allpicture/2018/01/cd20c1fc6bd44966b7daaf27.jpg', 
        imgWidth: 360,
        imgHeight: 240,
        imgAlt: 'Lhasa tour 2018',
        href: '',
        title: 'Boy in red robe'
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
          title: {
            type: 'string', 
            title: '图片下方描述' 
          },
          size: {
            type: 'integer', 
            title: '文字字号',
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
        size: {
          'ui:widget': 'range'
        }
      },
      //formData
      formData: {
        imgSrc: 'https://data.chinahighlights.com/amp-img/homepage/mobile-home-brand.jpg',
        imgWidth: 500,
        imgHeight: 300,
        imgAlt: 'China tour 2018',
        title: 'China Highlights - Featured on 50+ Media and Press',
        size: 10
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
          title: {
            type: 'string', 
            title: '图片下方描述' 
          },
          href: {
            type: 'string', 
            title: '图片链接' 
          },
          size: {
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
        size: {
          'ui:widget': 'range'
        }
      },
      //formData
      formData: {
        imgSrc: 'https://data.chinahighlights.com/image/homepage/plan-a-sirst-trip-to-china-step-by-step.jpg',
        imgWidth: 100,
        imgHeight: 75,
        imgAlt: 'China tour 2018',
        title: 'How to Plan a First Trip to China — Step by Step',
        size: 9,
        href: '/tours/top-to-do.htm'
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
              href: {
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
          imgList: {
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
        imgWidth: {
          'ui:widget': 'updown'
        },
        imgHeight: {
          'ui:widget': 'updown'
        }
      },
      //formData
      formData: {
        imgWidth: 450,
        imgHeight: 300,
        imgList:[
          {imgSrc: 'https://ampproject-b5f4c.firebaseapp.com/examples/images/image1.jpg', href: ''},
          {imgSrc: 'https://ampproject-b5f4c.firebaseapp.com/examples/images/image2.jpg', href: ''},
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
        tourUrl: '',
        tourBtn: 'View Details',
      }
    },

  }
};