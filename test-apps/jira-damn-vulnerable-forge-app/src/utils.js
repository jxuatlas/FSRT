import api, { route } from '@forge/api';
import jwt from "jsonwebtoken";

import {testFunctionFromTestFile} from './testfile';
import module_exports_func from './moduleex.js'
import {func_from_exports, diffunc} from "./exportse.js"
import {another_export, newExport} from './newexports.js'
import func_defult from './export_default';
import my_function from "./export_default2.js";
import {classone} from './anewclass';

let global = "global__flag___test"

export async function fetchIssueSummary(issueIdOrKey, test_value) {

  let obj = {
    method: 'POST',
    bananas: 'apple',
    headers: { //
      Accept: 'application/json',
    },
  };



  var token = jwt.sign({ foo: 'bar' }, process.env.SECRET);


  module_exports_func()
  func_from_exports()
  another_export()
  newExport()
  func_defult()
  my_function()

  // testFunctionFromTestFile();

  diffunc()

  // different_function();
  let a_class = new ANewClass();
  a_class.function_a_new_class();

  let val = "grapefruit";

  val = "peach";

  let pre_url = "/rest/api/3/issue/" + val;

  let a_url = route`/rest/api/3/issue/${issueIdOrKey}?fields=summary/${val}`;

  const resp = await api
    .asApp()
    .requestJira("/rest/api/3/issue/27/attachments", obj);
  const data = await resp.json();
  console.log(JSON.stringify(data));
  return data['fields']['summary'];
}

function get_random_string() {
  //return a_url = route`/rest/api/3/issue/${issueIdOrKey}?fields=summary`;
  return "test_string_from_get_random_string";
}

export async function writeComment(issueIdOrKey, comment) {
  /* const api = require('@forge/api'); */


  // ERROR, even if this is not assigned anything then it will assign the param to the issueIdOrKey var
  let issueIdOrKey = testFunctionFromTestFile("test_value_param")

  let my_class = new UselessClass();

  my_class.test_function();

  const resp = await api
    .asApp()
    .requestJira(route`/rest/api/3/issue/${issueIdOrKey}/comment`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: `{
        "body": {
          "type": "doc",
          "version": 1,
          "content": [
            {
              "type": "paragraph",
              "content": [
                "text": ${comment},
                "type": "text"
              ]
            }
          ]
        }
      }`,
    });
  console.log(`Response: ${resp.status} ${resp.statusText}`);
  console.log(await resp.json());
}
