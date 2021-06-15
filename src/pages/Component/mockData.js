const data = { "cells": [{ "type": "bpmn.Event", "size": { "width": 50, "height": 50 }, "eventType": "start", "position": { "x": 142, "y": 210 }, "angle": 0, "bpmnType": "StartEvent", "bpmnSubType": "StartEvent", "id": "3f77e508-d448-4a5d-b86d-507211a6b175", "z": 1, "attrs": { ".body": { "fill": "#628FE4", "stroke": "none", "refWidth": "100%", "refHeight": "100%", "rx": "1%", "ry": "2%" }, ".inner": { "visibility": "hidden" }, ".label": { "text": "开始", "fill": "#fff" } } }, { "size": { "width": 100, "height": 28 }, "type": "bpmn.Activity", "activityType": "task", "subProcess": null, "content": "<span class='dot'>策</span><span class='ellipsis' title=准入规则_xyh>准入规则_xyh</span>", "position": { "x": 282, "y": 221 }, "angle": 0, "bpmnType": "ServiceTask", "bpmnSubType": "PolicyTask", "id": "577ca8d4-0c20-4767-9c9e-9e1f69182cf8", "z": 2, "bpmnData": { "type": "PolicyTask", "condition": { "dName": "creditCardApp_APPLY", "policySetName": "准入规则_xyh", "outputs": [], "inputs": [{ "name": "客户姓名", "value": "S_DC_VS_NAME" }, { "name": "生活城市", "value": "S_DC_VB_LIVECITY" }] } }, "allContent": "准入规则_xyh", "attrs": { ".body": { "fill": "#EAEEFA", "stroke": "#CCD9FD", "refWidth": "100%", "refHeight": "100%", "rx": "14px", "ry": "14px" }, ".inner": { "visibility": "hidden" }, "path": { "ref": ".outer" }, "image": { "ref": ".outer", "ref-dy": "", "ref-y": 5, "xlink:href": "" }, "text": { "ref-y": 0.5 }, ".content": { "html": "<span class='dot'>策</span><span class='ellipsis' title=准入规则_xyh>准入规则_xyh</span>" }, ".fobj": { "width": 100, "height": 28 }, "div": { "style": { "width": 100, "height": 28 } }, ".fobj div": { "style": { "verticalAlign": "middle", "paddingTop": 0 } }, ".outer": { "stroke-width": 1, "stroke-dasharray": "none" }, ".sub-process": { "visibility": "hidden", "data-sub-process": "" } } }, { "type": "bpmn.Flow", "flowType": "normal", "source": { "id": "3f77e508-d448-4a5d-b86d-507211a6b175" }, "target": { "id": "577ca8d4-0c20-4767-9c9e-9e1f69182cf8" }, "bpmnType": "SequenceFlow", "id": "509ab3a7-167b-445e-8810-726f4f584ca1", "z": 3, "attrs": { ".marker-target": { "fill": "#B2BECD", "stroke": "#B2BECD" }, ".connection": { "stroke": "#B2BECD" } } }, { "size": { "width": 100, "height": 28 }, "type": "bpmn.Activity", "activityType": "task", "subProcess": null, "content": "<span class=\"dot\" style=\"background: #829ca9;\">流</span><span class=\"ellipsis\" title=测试史蒂夫>测试史蒂夫</span>", "position": { "x": 282, "y": 373 }, "angle": 0, "bpmnType": "ServiceTask", "bpmnSubType": "TemplateTask", "id": "81745a2a-047d-4dda-8ca5-740bc48e1179", "z": 4, "bpmnData": { "type": "TemplateTask", "condition": { "name": "测试史蒂夫", "content": "{\"data\":{\"cells\":[{\"size\":{\"width\":100,\"height\":28},\"type\":\"bpmn.Activity\",\"activityType\":\"task\",\"subProcess\":null,\"content\":\"<span class='dot' style=\\\"background: #CFAB67;\\\">三</span><span class='ellipsis' title=同盾_智融分_银行>同盾_智融分_银行</span>\",\"position\":{\"x\":171,\"y\":249},\"angle\":0,\"bpmnType\":\"ServiceTask\",\"bpmnSubType\":\"ServiceTypeTask\",\"id\":\"b77d3127-a8ec-48cc-abb7-1e94e81fdb89\",\"z\":1,\"bpmnData\":{\"selectService\":\"tdZrfYh\",\"condition\":{\"selectService\":\"tdZrfYh\",\"outputParams\":[{\"displayName\":\"智融分\",\"serviceParam\":\"score\",\"value\":\"S_DC_VB_FAMIERROR\",\"index\":0}],\"inputParams\":[{\"displayName\":\"证件号码\",\"mustInput\":false,\"serviceParam\":\"id_number\",\"value\":\"S_DC_VB_FAMIERROR\",\"index\":0},{\"displayName\":\"业务流标识\",\"mustInput\":false,\"serviceParam\":\"biz_code\",\"value\":\"S_DC_VB_HOMEDETAIL\",\"index\":1},{\"displayName\":\"手机号\",\"mustInput\":false,\"serviceParam\":\"account_mobile\",\"value\":\"S_DC_VB_MONTHINCO\",\"index\":2}],\"initOutput\":[{\"checked\":false,\"displayName\":\"三方返回状态码\",\"serviceParam\":\"responseCode\"},{\"displayName\":\"智融分\",\"serviceParam\":\"score\",\"value\":\"S_DC_VB_FAMIERROR\",\"index\":0}]},\"displayName\":\"tdZrfYh\"},\"allContent\":\"同盾_智融分_银行\",\"attrs\":{\".body\":{\"fill\":\"#EAEEFA\",\"stroke\":\"#CCD9FD\",\"refWidth\":\"100%\",\"refHeight\":\"100%\",\"rx\":\"14px\",\"ry\":\"14px\"},\".inner\":{\"visibility\":\"hidden\"},\"path\":{\"ref\":\".outer\"},\"image\":{\"ref\":\".outer\",\"ref-dy\":\"\",\"ref-y\":5,\"xlink:href\":\"\"},\"text\":{\"ref-y\":0.5},\".content\":{\"html\":\"<span class='dot' style=\\\"background: #CFAB67;\\\">三</span><span class='ellipsis' title=同盾_智融分_银行>同盾_智融分_银行</span>\"},\".fobj\":{\"width\":100,\"height\":28},\"div\":{\"style\":{\"width\":100,\"height\":28}},\".fobj div\":{\"style\":{\"verticalAlign\":\"middle\",\"paddingTop\":0}},\".outer\":{\"stroke-width\":1,\"stroke-dasharray\":\"none\"},\".sub-process\":{\"visibility\":\"hidden\",\"data-sub-process\":\"\"}}},{\"size\":{\"width\":100,\"height\":28},\"type\":\"bpmn.Activity\",\"activityType\":\"task\",\"subProcess\":null,\"content\":\"<span class='dot' style=\\\"background: #67CFCB;\\\">补</span><span class='ellipsis' title=徐磊SUPPLEMENT>徐磊SUPPLEMENT</span>\",\"position\":{\"x\":419,\"y\":249},\"angle\":0,\"bpmnType\":\"UserTask\",\"bpmnSubType\":\"DecisionTask\",\"id\":\"9765fbf1-a9bf-4123-b13f-ccc60e41f233\",\"z\":2,\"bpmnData\":{\"condition\":{\"config\":{\"inputs\":[{\"inputName\":\"entryId\",\"dName\":\"进件ID\",\"name\":\"S_DC_VS_ENTRYID\",\"mustInput\":true},{\"inputName\":\"sType\",\"dName\":\"决策流执行方式\",\"name\":\"S_DC_VS_CTYPE\",\"mustInput\":true},{\"inputName\":\"token\",\"dName\":\"进件决策流TOKEN\",\"name\":\"S_DC_VS_TOKEN\",\"mustInput\":true},{\"inputName\":\"applyloanamount\",\"dName\":\"借款金额\",\"name\":\"F_DC_VS_APPLYLOANAMOUNT\",\"mustInput\":false}],\"selectedService\":\"XLSUPPLEMENT\"}}},\"allContent\":\"徐磊SUPPLEMENT\",\"attrs\":{\".body\":{\"fill\":\"#EAEEFA\",\"stroke\":\"#CCD9FD\",\"refWidth\":\"100%\",\"refHeight\":\"100%\",\"rx\":\"14px\",\"ry\":\"14px\"},\".inner\":{\"visibility\":\"hidden\"},\"path\":{\"ref\":\".outer\"},\"image\":{\"ref\":\".outer\",\"ref-dy\":\"\",\"ref-y\":5,\"xlink:href\":\"\"},\"text\":{\"ref-y\":0.5},\".content\":{\"html\":\"<span class='dot' style=\\\"background: #67CFCB;\\\">补</span><span class='ellipsis' title=徐磊SUPPLEMENT>徐磊SUPPLEMENT</span>\"},\".fobj\":{\"width\":100,\"height\":28},\"div\":{\"style\":{\"width\":100,\"height\":28}},\".fobj div\":{\"style\":{\"verticalAlign\":\"middle\",\"paddingTop\":0}},\".outer\":{\"stroke-width\":1,\"stroke-dasharray\":\"none\"},\".sub-process\":{\"visibility\":\"hidden\",\"data-sub-process\":\"\"}}},{\"type\":\"link\",\"source\":{\"id\":\"b77d3127-a8ec-48cc-abb7-1e94e81fdb89\"},\"target\":{\"id\":\"9765fbf1-a9bf-4123-b13f-ccc60e41f233\"},\"markup\":\"<path class=\\\"connection\\\" stroke=\\\"#B2BECD\\\" d=\\\"M 0 0 0 0\\\"/><path class=\\\"marker-source\\\" fill=\\\"#B2BECD\\\" stroke=\\\"#B2BECD\\\" d=\\\"M 0 0 0 0\\\"/><path class=\\\"marker-target\\\" fill=\\\"#B2BECD\\\" stroke=\\\"#B2BECD\\\" d=\\\"M 0 0 0 0\\\"/><path class=\\\"connection-wrap\\\" d=\\\"M 0 0 0 0\\\"/><g class=\\\"labels\\\" /><g class=\\\"marker-vertices\\\"/><g class=\\\"marker-arrowheads\\\"/><g class=\\\"link-tools\\\" />\",\"bpmnType\":\"SequenceFlow\",\"id\":\"2351c4b3-a2fb-4049-8b4e-a2eac9531499\",\"z\":3,\"linked\":true,\"attrs\":{\".marker-target\":{\"fill\":\"#B2BECD\",\"d\":\"M 10 0 L 0 5 L 10 10 z\"}}}]},\"nodeInfo\":{\"firstNodeId\":\"b77d3127-a8ec-48cc-abb7-1e94e81fdb89\",\"lastNodeId\":\"9765fbf1-a9bf-4123-b13f-ccc60e41f233\"}}" } }, "allContent": "测试史蒂夫", "attrs": { ".body": { "fill": "#EAEEFA", "stroke": "#CCD9FD", "refWidth": "100%", "refHeight": "100%", "rx": "14px", "ry": "14px" }, ".inner": { "visibility": "hidden" }, "path": { "ref": ".outer" }, "image": { "ref": ".outer", "ref-dy": "", "ref-y": 5, "xlink:href": "" }, "text": { "ref-y": 0.5 }, ".content": { "html": "<span class=\"dot\" style=\"background: #829ca9;\">流</span><span class=\"ellipsis\" title=测试史蒂夫>测试史蒂夫</span>" }, ".fobj": { "width": 100, "height": 28 }, "div": { "style": { "width": 100, "height": 28 } }, ".fobj div": { "style": { "verticalAlign": "middle", "paddingTop": 0 } }, ".outer": { "stroke-width": 1, "stroke-dasharray": "none" }, ".sub-process": { "visibility": "hidden", "data-sub-process": "" } } }, { "type": "bpmn.Flow", "flowType": "normal", "source": { "id": "577ca8d4-0c20-4767-9c9e-9e1f69182cf8" }, "target": { "id": "81745a2a-047d-4dda-8ca5-740bc48e1179" }, "bpmnType": "SequenceFlow", "id": "6b737837-3c5f-468f-b78e-20ad4f296b2f", "z": 5, "attrs": { ".marker-target": { "fill": "#B2BECD", "stroke": "#B2BECD" }, ".connection": { "stroke": "#B2BECD" } } }, { "size": { "width": 100, "height": 28 }, "type": "bpmn.Activity", "activityType": "task", "subProcess": null, "content": "<span class='dot' style=\"background: #8390DB;\">动</span><span class='ellipsis' title=触发异常件>触发异常件</span>", "position": { "x": 514, "y": 373 }, "angle": 0, "bpmnType": "ServiceTask", "bpmnSubType": "ActionServiceTask", "id": "9623b025-f81c-4b39-8f08-ecc03d57a295", "z": 6, "bpmnData": { "type": "ActionServiceTask", "condition": { "actionType": 1, "finalDecision": null, "name": null } }, "allContent": "触发异常件", "attrs": { ".body": { "fill": "#EAEEFA", "stroke": "#CCD9FD", "refWidth": "100%", "refHeight": "100%", "rx": "14px", "ry": "14px" }, ".inner": { "visibility": "hidden" }, "path": { "ref": ".outer" }, "image": { "ref": ".outer", "ref-dy": "", "ref-y": 5, "xlink:href": "" }, "text": { "ref-y": 0.5 }, ".content": { "html": "<span class='dot' style=\"background: #8390DB;\">动</span><span class='ellipsis' title=触发异常件>触发异常件</span>" }, ".fobj": { "width": 100, "height": 28 }, "div": { "style": { "width": 100, "height": 28 } }, ".fobj div": { "style": { "verticalAlign": "middle", "paddingTop": 0 } }, ".outer": { "stroke-width": 1, "stroke-dasharray": "none" }, ".sub-process": { "visibility": "hidden", "data-sub-process": "" } } }, { "type": "bpmn.Flow", "flowType": "normal", "source": { "id": "81745a2a-047d-4dda-8ca5-740bc48e1179" }, "target": { "id": "9623b025-f81c-4b39-8f08-ecc03d57a295" }, "bpmnType": "SequenceFlow", "id": "6be6ce94-0d72-480f-b9c4-a393e1a854ec", "z": 7, "attrs": { ".marker-target": { "fill": "#B2BECD", "stroke": "#B2BECD" }, ".connection": { "stroke": "#B2BECD" } } }, { "type": "bpmn.Event", "size": { "width": 50, "height": 50 }, "eventType": "end", "position": { "x": 539, "y": 507 }, "angle": 0, "bpmnType": "EndEvent", "bpmnSubType": "EndEvent", "id": "c5f03600-4516-4d92-b42d-1c550b735f47", "z": 8, "attrs": { ".body": { "fill": "#869FBE", "stroke": "none", "refWidth": "100%", "refHeight": "100%", "rx": "1%", "ry": "2%" }, ".outer": { "stroke-width": 5 }, ".inner": { "visibility": "hidden" }, ".label": { "text": "结束", "fill": "#fff" } } }, { "type": "bpmn.Flow", "flowType": "normal", "source": { "id": "9623b025-f81c-4b39-8f08-ecc03d57a295" }, "target": { "id": "c5f03600-4516-4d92-b42d-1c550b735f47" }, "bpmnType": "SequenceFlow", "id": "f42a7f17-676c-4055-9959-792137644eef", "z": 9, "attrs": { ".marker-target": { "fill": "#B2BECD", "stroke": "#B2BECD" }, ".connection": { "stroke": "#B2BECD" } } }] };

export default data;