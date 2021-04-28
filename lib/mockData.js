"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mockData = void 0;
var mockData = {
  "cells": [{
    "type": "bpmn.Event",
    "size": {
      "width": 50,
      "height": 50
    },
    "eventType": "start",
    "position": {
      "x": 215,
      "y": 100
    },
    "angle": 0,
    "id": "5871a5a2-6a08-42db-b091-ded4210bffa6",
    "z": 1,
    "attrs": {
      ".body": {
        "fill": "#628FE4",
        "stroke": "none",
        "refWidth": "100%",
        "refHeight": "100%",
        "rx": "1%",
        "ry": "2%"
      },
      ".inner": {
        "visibility": "hidden"
      },
      "image": {
        "dataIconType": "none"
      },
      ".label": {
        "text": "开始",
        "fill": "#fff",
        "refY": "-44"
      }
    }
  }, {
    "type": "erd.Relationship",
    "size": {
      "width": 54,
      "height": 48
    },
    "position": {
      "x": 213,
      "y": 230
    },
    "angle": 0,
    "id": "2f8da99c-b8ce-44d4-9736-d744701a02e9",
    "z": 2,
    "attrs": {
      ".outer": {
        "fill": "rgba(246,118,19,0.10)",
        "stroke": "#F67613",
        "stroke-width": 1,
        "stroke-dasharray": "0"
      },
      "text": {
        "text": "排他",
        "font-weight": "Normal",
        "fill": "#F67613",
        "stroke-width": 1
      }
    }
  }, {
    "type": "link",
    "source": {
      "id": "5871a5a2-6a08-42db-b091-ded4210bffa6"
    },
    "target": {
      "id": "2f8da99c-b8ce-44d4-9736-d744701a02e9"
    },
    "markup": "<path class=\"connection\" stroke=\"#B2BECD\" d=\"M 0 0 0 0\"/><path class=\"marker-source\" fill=\"#B2BECD\" stroke=\"#B2BECD\" d=\"M 0 0 0 0\"/><path class=\"marker-target\" fill=\"#B2BECD\" stroke=\"#B2BECD\" d=\"M 0 0 0 0\"/><path class=\"connection-wrap\" d=\"M 0 0 0 0\"/><g class=\"labels\" /><g class=\"marker-vertices\"/><g class=\"marker-arrowheads\"/><g class=\"link-tools\" />",
    "bpmnType": "SequenceFlow",
    "id": "52b380e6-20c0-433b-989b-83f74fba4f16",
    "z": 3,
    "attrs": {
      ".marker-target": {
        "fill": "#B2BECD",
        "d": "M 10 0 L 0 5 L 10 10 z"
      }
    }
  }, {
    "size": {
      "width": 100,
      "height": 28
    },
    "type": "bpmn.Activity",
    "activityType": "task",
    "subProcess": null,
    "content": "<span class='dot'>策</span><span class='ellipsis'>策略集</span>",
    "position": {
      "x": 100,
      "y": 358
    },
    "angle": 0,
    "id": "74b1eee0-6aef-4a48-865c-a1a3b7d9c55b",
    "z": 4,
    "attrs": {
      ".body": {
        "fill": "#EAEEFA",
        "stroke": "#CCD9FD",
        "refWidth": "100%",
        "refHeight": "100%",
        "rx": "14px",
        "ry": "14px"
      },
      ".inner": {
        "visibility": "hidden"
      },
      "path": {
        "ref": ".outer"
      },
      "image": {
        "ref": ".outer",
        "ref-dy": "",
        "ref-y": 5,
        "xlink:href": "",
        "dataIconType": "none"
      },
      ".content": {
        "html": "<span class=\"dot\">策</span><span class=\"ellipsis\">策略集</span>"
      },
      ".fobj": {
        "width": 100,
        "height": 28
      },
      "div": {
        "style": {
          "width": 100,
          "height": 28
        }
      },
      ".fobj div": {
        "style": {
          "verticalAlign": "middle",
          "paddingTop": 0
        }
      },
      ".outer": {
        "stroke-width": 1,
        "stroke-dasharray": "none"
      },
      ".sub-process": {
        "visibility": "hidden",
        "data-sub-process": ""
      }
    }
  }, {
    "type": "link",
    "source": {
      "id": "2f8da99c-b8ce-44d4-9736-d744701a02e9"
    },
    "target": {
      "id": "74b1eee0-6aef-4a48-865c-a1a3b7d9c55b"
    },
    "markup": "<path class=\"connection\" stroke=\"#B2BECD\" d=\"M 0 0 0 0\"/><path class=\"marker-source\" fill=\"#B2BECD\" stroke=\"#B2BECD\" d=\"M 0 0 0 0\"/><path class=\"marker-target\" fill=\"#B2BECD\" stroke=\"#B2BECD\" d=\"M 0 0 0 0\"/><path class=\"connection-wrap\" d=\"M 0 0 0 0\"/><g class=\"labels\" /><g class=\"marker-vertices\"/><g class=\"marker-arrowheads\"/><g class=\"link-tools\" />",
    "bpmnType": "SequenceFlow",
    "id": "f260bb0f-edba-492a-8114-1c031ec5cbab",
    "z": 5,
    "attrs": {
      ".marker-target": {
        "fill": "#B2BECD",
        "d": "M 10 0 L 0 5 L 10 10 z"
      }
    }
  }, {
    "size": {
      "width": 100,
      "height": 28
    },
    "type": "bpmn.Activity",
    "activityType": "task",
    "subProcess": null,
    "content": "<span class='dot' style=\"background: #CFAB67;\">三</span><span class='ellipsis'>三方服务</span>",
    "position": {
      "x": 280,
      "y": 358
    },
    "angle": 0,
    "id": "0f670f55-e21b-4d70-bdaf-1c77604cd498",
    "z": 6,
    "attrs": {
      ".body": {
        "fill": "#EAEEFA",
        "stroke": "#CCD9FD",
        "refWidth": "100%",
        "refHeight": "100%",
        "rx": "14px",
        "ry": "14px"
      },
      ".inner": {
        "visibility": "hidden"
      },
      "path": {
        "ref": ".outer"
      },
      "image": {
        "ref": ".outer",
        "ref-dy": "",
        "ref-y": 5,
        "xlink:href": "",
        "dataIconType": "none"
      },
      ".content": {
        "html": "<span class=\"dot\" style=\"background: #CFAB67;\">三</span><span class=\"ellipsis\">三方服务</span>"
      },
      ".fobj": {
        "width": 100,
        "height": 28
      },
      "div": {
        "style": {
          "width": 100,
          "height": 28
        }
      },
      ".fobj div": {
        "style": {
          "verticalAlign": "middle",
          "paddingTop": 0
        }
      },
      ".outer": {
        "stroke-width": 1,
        "stroke-dasharray": "none"
      },
      ".sub-process": {
        "visibility": "hidden",
        "data-sub-process": ""
      }
    }
  }, {
    "type": "link",
    "source": {
      "id": "2f8da99c-b8ce-44d4-9736-d744701a02e9"
    },
    "target": {
      "id": "0f670f55-e21b-4d70-bdaf-1c77604cd498"
    },
    "markup": "<path class=\"connection\" stroke=\"#B2BECD\" d=\"M 0 0 0 0\"/><path class=\"marker-source\" fill=\"#B2BECD\" stroke=\"#B2BECD\" d=\"M 0 0 0 0\"/><path class=\"marker-target\" fill=\"#B2BECD\" stroke=\"#B2BECD\" d=\"M 0 0 0 0\"/><path class=\"connection-wrap\" d=\"M 0 0 0 0\"/><g class=\"labels\" /><g class=\"marker-vertices\"/><g class=\"marker-arrowheads\"/><g class=\"link-tools\" />",
    "bpmnType": "SequenceFlow",
    "id": "666c2fdc-c662-41d4-82dc-d73dfdd3b595",
    "z": 7,
    "attrs": {
      ".marker-target": {
        "fill": "#B2BECD",
        "d": "M 10 0 L 0 5 L 10 10 z"
      }
    }
  }, {
    "type": "bpmn.Event",
    "size": {
      "width": 50,
      "height": 50
    },
    "eventType": "start",
    "position": {
      "x": 125,
      "y": 466
    },
    "angle": 0,
    "id": "e98c5267-9de4-46e8-8aed-7927684b0a6b",
    "z": 8,
    "attrs": {
      ".body": {
        "fill": "#869FBE",
        "stroke": "none",
        "refWidth": "100%",
        "refHeight": "100%",
        "rx": "1%",
        "ry": "2%"
      },
      ".inner": {
        "visibility": "hidden"
      },
      "image": {
        "dataIconType": "none"
      },
      ".label": {
        "text": "结束",
        "fill": "#fff",
        "refY": "-44"
      }
    }
  }, {
    "type": "link",
    "source": {
      "id": "74b1eee0-6aef-4a48-865c-a1a3b7d9c55b"
    },
    "target": {
      "id": "e98c5267-9de4-46e8-8aed-7927684b0a6b"
    },
    "markup": "<path class=\"connection\" stroke=\"#B2BECD\" d=\"M 0 0 0 0\"/><path class=\"marker-source\" fill=\"#B2BECD\" stroke=\"#B2BECD\" d=\"M 0 0 0 0\"/><path class=\"marker-target\" fill=\"#B2BECD\" stroke=\"#B2BECD\" d=\"M 0 0 0 0\"/><path class=\"connection-wrap\" d=\"M 0 0 0 0\"/><g class=\"labels\" /><g class=\"marker-vertices\"/><g class=\"marker-arrowheads\"/><g class=\"link-tools\" />",
    "bpmnType": "SequenceFlow",
    "id": "45b9920a-9b59-4bc9-8a2a-7331e5b6bede",
    "z": 9,
    "attrs": {
      ".marker-target": {
        "fill": "#B2BECD",
        "d": "M 10 0 L 0 5 L 10 10 z"
      }
    }
  }, {
    "size": {
      "width": 100,
      "height": 28
    },
    "type": "bpmn.Activity",
    "activityType": "task",
    "subProcess": null,
    "content": "<span class='dot' style=\"background: #67CFCB;\">补</span><span class='ellipsis'>决策补充</span>",
    "position": {
      "x": 280,
      "y": 477
    },
    "angle": 0,
    "id": "7fd7b6d5-602c-47a0-91d7-fd8e5c52db0e",
    "z": 10,
    "attrs": {
      ".body": {
        "fill": "#EAEEFA",
        "stroke": "#CCD9FD",
        "refWidth": "100%",
        "refHeight": "100%",
        "rx": "14px",
        "ry": "14px"
      },
      ".inner": {
        "visibility": "hidden"
      },
      "path": {
        "ref": ".outer"
      },
      "image": {
        "ref": ".outer",
        "ref-dy": "",
        "ref-y": 5,
        "xlink:href": "",
        "dataIconType": "none"
      },
      ".content": {
        "html": "<span class=\"dot\" style=\"background: #67CFCB;\">补</span><span class=\"ellipsis\">决策补充</span>"
      },
      ".fobj": {
        "width": 100,
        "height": 28
      },
      "div": {
        "style": {
          "width": 100,
          "height": 28
        }
      },
      ".fobj div": {
        "style": {
          "verticalAlign": "middle",
          "paddingTop": 0
        }
      },
      ".outer": {
        "stroke-width": 1,
        "stroke-dasharray": "none"
      },
      ".sub-process": {
        "visibility": "hidden",
        "data-sub-process": ""
      }
    }
  }, {
    "type": "link",
    "source": {
      "id": "0f670f55-e21b-4d70-bdaf-1c77604cd498"
    },
    "target": {
      "id": "7fd7b6d5-602c-47a0-91d7-fd8e5c52db0e"
    },
    "markup": "<path class=\"connection\" stroke=\"#B2BECD\" d=\"M 0 0 0 0\"/><path class=\"marker-source\" fill=\"#B2BECD\" stroke=\"#B2BECD\" d=\"M 0 0 0 0\"/><path class=\"marker-target\" fill=\"#B2BECD\" stroke=\"#B2BECD\" d=\"M 0 0 0 0\"/><path class=\"connection-wrap\" d=\"M 0 0 0 0\"/><g class=\"labels\" /><g class=\"marker-vertices\"/><g class=\"marker-arrowheads\"/><g class=\"link-tools\" />",
    "bpmnType": "SequenceFlow",
    "id": "571744ff-5163-4b6a-86e7-bb29f1dffc9b",
    "z": 11,
    "attrs": {
      ".marker-target": {
        "fill": "#B2BECD",
        "d": "M 10 0 L 0 5 L 10 10 z"
      }
    }
  }, {
    "type": "bpmn.Event",
    "size": {
      "width": 50,
      "height": 50
    },
    "eventType": "start",
    "position": {
      "x": 305,
      "y": 596
    },
    "angle": 0,
    "id": "b3674a2f-cf6d-4561-aaee-428981eefd2f",
    "z": 12,
    "attrs": {
      ".body": {
        "fill": "#869FBE",
        "stroke": "none",
        "refWidth": "100%",
        "refHeight": "100%",
        "rx": "1%",
        "ry": "2%"
      },
      ".inner": {
        "visibility": "hidden"
      },
      "image": {
        "dataIconType": "none"
      },
      ".label": {
        "text": "结束",
        "fill": "#fff",
        "refY": "-44"
      }
    }
  }, {
    "type": "link",
    "source": {
      "id": "7fd7b6d5-602c-47a0-91d7-fd8e5c52db0e"
    },
    "target": {
      "id": "b3674a2f-cf6d-4561-aaee-428981eefd2f"
    },
    "markup": "<path class=\"connection\" stroke=\"#B2BECD\" d=\"M 0 0 0 0\"/><path class=\"marker-source\" fill=\"#B2BECD\" stroke=\"#B2BECD\" d=\"M 0 0 0 0\"/><path class=\"marker-target\" fill=\"#B2BECD\" stroke=\"#B2BECD\" d=\"M 0 0 0 0\"/><path class=\"connection-wrap\" d=\"M 0 0 0 0\"/><g class=\"labels\" /><g class=\"marker-vertices\"/><g class=\"marker-arrowheads\"/><g class=\"link-tools\" />",
    "bpmnType": "SequenceFlow",
    "id": "cbdafc15-8361-465c-9eb7-b5d1dd904b63",
    "z": 13,
    "attrs": {
      ".marker-target": {
        "fill": "#B2BECD",
        "d": "M 10 0 L 0 5 L 10 10 z"
      }
    }
  }]
};
exports.mockData = mockData;