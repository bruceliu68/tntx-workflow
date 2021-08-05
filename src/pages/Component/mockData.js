const data = {
    "data": {
        "cells": [
            {
                "type": "bpmn.Event",
                "size": {
                    "width": 50,
                    "height": 50
                },
                "eventType": "start",
                "position": {
                    "x": 190,
                    "y": 216
                },
                "angle": 0,
                "id": "01111968-83b2-4ea0-9d50-5c2bf742d50d",
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
            },
            {
                "size": {
                    "width": 100,
                    "height": 28
                },
                "type": "bpmn.Activity",
                "activityType": "task",
                "subProcess": null,
                "content": "<span class='dot'>策</span><span class='ellipsis'>策略集</span>",
                "position": {
                    "x": 370,
                    "y": 227
                },
                "angle": 0,
                "id": "3452e4f6-696c-42de-b79f-bebffe8ad966",
                "z": 2,
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
            },
            {
                "type": "link",
                "source": {
                    "id": "01111968-83b2-4ea0-9d50-5c2bf742d50d"
                },
                "target": {
                    "id": "3452e4f6-696c-42de-b79f-bebffe8ad966"
                },
                "markup": "<path class=\"connection\" stroke=\"#B2BECD\" d=\"M 0 0 0 0\"/><path class=\"marker-source\" fill=\"#B2BECD\" stroke=\"#B2BECD\" d=\"M 0 0 0 0\"/><path class=\"marker-target\" fill=\"#B2BECD\" stroke=\"#B2BECD\" d=\"M 0 0 0 0\"/><path class=\"connection-wrap\" d=\"M 0 0 0 0\"/><g class=\"labels\" /><g class=\"marker-vertices\"/><g class=\"marker-arrowheads\"/><g class=\"link-tools\" />",
                "bpmnType": "SequenceFlow",
                "id": "8c292ddc-8917-441b-b201-95257b0d9f87",
                "z": 3,
                "attrs": {
                    ".marker-target": {
                        "fill": "#B2BECD",
                        "d": "M 10 0 L 0 5 L 10 10 z"
                    }
                }
            },
            {
                "type": "bpmn.Event",
                "size": {
                    "width": 50,
                    "height": 50
                },
                "eventType": "start",
                "position": {
                    "x": 628,
                    "y": 216
                },
                "angle": 0,
                "id": "dd7b141b-7bfa-4f62-a2fd-33836bef6cc9",
                "z": 4,
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
            },
            {
                "type": "link",
                "source": {
                    "id": "3452e4f6-696c-42de-b79f-bebffe8ad966"
                },
                "target": {
                    "id": "dd7b141b-7bfa-4f62-a2fd-33836bef6cc9"
                },
                "markup": "<path class=\"connection\" stroke=\"#B2BECD\" d=\"M 0 0 0 0\"/><path class=\"marker-source\" fill=\"#B2BECD\" stroke=\"#B2BECD\" d=\"M 0 0 0 0\"/><path class=\"marker-target\" fill=\"#B2BECD\" stroke=\"#B2BECD\" d=\"M 0 0 0 0\"/><path class=\"connection-wrap\" d=\"M 0 0 0 0\"/><g class=\"labels\" /><g class=\"marker-vertices\"/><g class=\"marker-arrowheads\"/><g class=\"link-tools\" />",
                "bpmnType": "SequenceFlow",
                "id": "a26e6d13-970f-41af-8fce-d9ea1099826a",
                "z": 5,
                "attrs": {
                    ".marker-target": {
                        "fill": "#B2BECD",
                        "d": "M 10 0 L 0 5 L 10 10 z"
                    }
                }
            }
        ]
    },
    "cells": [
        {
            "type": "bpmn.Event",
            "size": {
                "width": 50,
                "height": 50
            },
            "eventType": "start",
            "position": {
                "x": 190,
                "y": 216
            },
            "angle": 0,
            "id": "01111968-83b2-4ea0-9d50-5c2bf742d50d",
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
        },
        {
            "size": {
                "width": 100,
                "height": 28
            },
            "type": "bpmn.Activity",
            "activityType": "task",
            "subProcess": null,
            "content": "<span class='dot'>策</span><span class='ellipsis'>策略集</span>",
            "position": {
                "x": 370,
                "y": 227
            },
            "angle": 0,
            "id": "3452e4f6-696c-42de-b79f-bebffe8ad966",
            "z": 2,
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
        },
        {
            "type": "link",
            "source": {
                "id": "01111968-83b2-4ea0-9d50-5c2bf742d50d"
            },
            "target": {
                "id": "3452e4f6-696c-42de-b79f-bebffe8ad966"
            },
            "markup": "<path class=\"connection\" stroke=\"#B2BECD\" d=\"M 0 0 0 0\"/><path class=\"marker-source\" fill=\"#B2BECD\" stroke=\"#B2BECD\" d=\"M 0 0 0 0\"/><path class=\"marker-target\" fill=\"#B2BECD\" stroke=\"#B2BECD\" d=\"M 0 0 0 0\"/><path class=\"connection-wrap\" d=\"M 0 0 0 0\"/><g class=\"labels\" /><g class=\"marker-vertices\"/><g class=\"marker-arrowheads\"/><g class=\"link-tools\" />",
            "bpmnType": "SequenceFlow",
            "id": "8c292ddc-8917-441b-b201-95257b0d9f87",
            "z": 3,
            "attrs": {
                ".marker-target": {
                    "fill": "#B2BECD",
                    "d": "M 10 0 L 0 5 L 10 10 z"
                }
            }
        },
        {
            "type": "bpmn.Event",
            "size": {
                "width": 50,
                "height": 50
            },
            "eventType": "start",
            "position": {
                "x": 628,
                "y": 216
            },
            "angle": 0,
            "id": "dd7b141b-7bfa-4f62-a2fd-33836bef6cc9",
            "z": 4,
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
        },
        {
            "type": "link",
            "source": {
                "id": "3452e4f6-696c-42de-b79f-bebffe8ad966"
            },
            "target": {
                "id": "dd7b141b-7bfa-4f62-a2fd-33836bef6cc9"
            },
            "markup": "<path class=\"connection\" stroke=\"#B2BECD\" d=\"M 0 0 0 0\"/><path class=\"marker-source\" fill=\"#B2BECD\" stroke=\"#B2BECD\" d=\"M 0 0 0 0\"/><path class=\"marker-target\" fill=\"#B2BECD\" stroke=\"#B2BECD\" d=\"M 0 0 0 0\"/><path class=\"connection-wrap\" d=\"M 0 0 0 0\"/><g class=\"labels\" /><g class=\"marker-vertices\"/><g class=\"marker-arrowheads\"/><g class=\"link-tools\" />",
            "bpmnType": "SequenceFlow",
            "id": "a26e6d13-970f-41af-8fce-d9ea1099826a",
            "z": 5,
            "attrs": {
                ".marker-target": {
                    "fill": "#B2BECD",
                    "d": "M 10 0 L 0 5 L 10 10 z"
                }
            }
        }
    ],
    "elements": [
        {
            "type": "bpmn.Event",
            "size": {
                "width": 50,
                "height": 50
            },
            "eventType": "start",
            "position": {
                "x": 190,
                "y": 216
            },
            "angle": 0,
            "id": "01111968-83b2-4ea0-9d50-5c2bf742d50d",
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
        },
        {
            "size": {
                "width": 100,
                "height": 28
            },
            "type": "bpmn.Activity",
            "activityType": "task",
            "subProcess": null,
            "content": "<span class='dot'>策</span><span class='ellipsis'>策略集</span>",
            "position": {
                "x": 370,
                "y": 227
            },
            "angle": 0,
            "id": "3452e4f6-696c-42de-b79f-bebffe8ad966",
            "z": 2,
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
        },
        {
            "type": "bpmn.Event",
            "size": {
                "width": 50,
                "height": 50
            },
            "eventType": "start",
            "position": {
                "x": 628,
                "y": 216
            },
            "angle": 0,
            "id": "dd7b141b-7bfa-4f62-a2fd-33836bef6cc9",
            "z": 4,
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
        }
    ],
    "links": [
        {
            "type": "link",
            "source": {
                "id": "01111968-83b2-4ea0-9d50-5c2bf742d50d"
            },
            "target": {
                "id": "3452e4f6-696c-42de-b79f-bebffe8ad966"
            },
            "markup": "<path class=\"connection\" stroke=\"#B2BECD\" d=\"M 0 0 0 0\"/><path class=\"marker-source\" fill=\"#B2BECD\" stroke=\"#B2BECD\" d=\"M 0 0 0 0\"/><path class=\"marker-target\" fill=\"#B2BECD\" stroke=\"#B2BECD\" d=\"M 0 0 0 0\"/><path class=\"connection-wrap\" d=\"M 0 0 0 0\"/><g class=\"labels\" /><g class=\"marker-vertices\"/><g class=\"marker-arrowheads\"/><g class=\"link-tools\" />",
            "bpmnType": "SequenceFlow",
            "id": "8c292ddc-8917-441b-b201-95257b0d9f87",
            "z": 3,
            "attrs": {
                ".marker-target": {
                    "fill": "#B2BECD",
                    "d": "M 10 0 L 0 5 L 10 10 z"
                }
            }
        },
        {
            "type": "link",
            "source": {
                "id": "3452e4f6-696c-42de-b79f-bebffe8ad966"
            },
            "target": {
                "id": "dd7b141b-7bfa-4f62-a2fd-33836bef6cc9"
            },
            "markup": "<path class=\"connection\" stroke=\"#B2BECD\" d=\"M 0 0 0 0\"/><path class=\"marker-source\" fill=\"#B2BECD\" stroke=\"#B2BECD\" d=\"M 0 0 0 0\"/><path class=\"marker-target\" fill=\"#B2BECD\" stroke=\"#B2BECD\" d=\"M 0 0 0 0\"/><path class=\"connection-wrap\" d=\"M 0 0 0 0\"/><g class=\"labels\" /><g class=\"marker-vertices\"/><g class=\"marker-arrowheads\"/><g class=\"link-tools\" />",
            "bpmnType": "SequenceFlow",
            "id": "a26e6d13-970f-41af-8fce-d9ea1099826a",
            "z": 5,
            "attrs": {
                ".marker-target": {
                    "fill": "#B2BECD",
                    "d": "M 10 0 L 0 5 L 10 10 z"
                }
            }
        }
    ]
};

export default data;
